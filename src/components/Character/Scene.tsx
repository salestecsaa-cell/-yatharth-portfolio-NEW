import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  const [webglSupported, setWebglSupported] = useState(true);

  // Check WebGL support
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("webgl2");
      return !!gl;
    } catch (e) {
      console.warn("WebGL not supported:", e);
      return false;
    }
  };

  useEffect(() => {
    // Check WebGL support first
    const hasWebGL = checkWebGLSupport();
    if (!hasWebGL) {
      setWebglSupported(false);
      setLoading(100); // Mark as complete with error state
      return;
    }

    if (canvasDiv.current) {
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        });
      } catch (e) {
        console.error("WebGL renderer initialization failed:", e);
        setWebglSupported(false);
        setLoading(100);
        return;
      }

      try {
        renderer.setSize(container.width, container.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap to 2 for performance
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        canvasDiv.current.appendChild(renderer.domElement);
      } catch (e) {
        console.error("Renderer setup failed:", e);
        renderer.dispose();
        setWebglSupported(false);
        setLoading(100);
        return;
      }

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer | undefined;
      let animationId: number | null = null;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      loadCharacter()
        .then((gltf) => {
          if (gltf && canvasDiv.current) {
            const animations = setAnimations(gltf);
            hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
            mixer = animations.mixer;
            const character = gltf.scene;
            scene.add(character);
            headBone = character.getObjectByName("spine006") || null;
            screenLight = character.getObjectByName("screenlight") || null;
            progress.loaded().then(() => {
              setTimeout(() => {
                light.turnOnLights();
                animations.startIntro();
              }, 2500);
            });
            window.addEventListener("resize", () =>
              handleResize(renderer, camera, canvasDiv, character)
            );
          }
        })
        .catch((error) => {
          console.error("Failed to load character:", error);
          setLoading(100);
        });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };

      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = setTimeout(() => {
          element?.addEventListener("touchmove", (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        clearTimeout(debounce);
        if (animationId !== null) {
          cancelAnimationFrame(animationId);
        }
        scene.clear();
        renderer.dispose();
        document.removeEventListener("mousemove", onMouseMove);
        
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
        
        if (canvasDiv.current && renderer.domElement.parentNode === canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
      };
    }
  }, [setLoading]);

  return (
    <>
      {!webglSupported ? (
        <div className="character-container">
          <div className="character-model" style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            borderRadius: "8px",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}>
            <div>
              <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>
                3D Model Not Supported
              </h3>
              <p style={{
                margin: 0,
                fontSize: "14px",
                opacity: 0.7,
                lineHeight: "1.5",
              }}>
                Your browser doesn't support WebGL. 
                <br />
                Check the portfolio gallery below to see the work!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="character-container">
          <div className="character-model" ref={canvasDiv}>
            <div className="character-rim"></div>
            <div className="character-hover" ref={hoverDivRef}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Scene;
