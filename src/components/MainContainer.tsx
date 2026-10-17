import { lazy, PropsWithChildren, Suspense, useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));
const VideoSection = lazy(() => import("./VideoSection/VideoSection"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />

            <Suspense fallback={<div style={{ height: "600px" }}>Loading video...</div>}>
              <VideoSection />
            </Suspense>

            <TechStackWhenNear />

            <Work />

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

// The 3D tools section pulls in ~730 KB of physics code. Load it only when the
// visitor scrolls near it; until then show the same heading and box so the
// page height (and the GSAP scroll positions) stay the same.
const TechStackWhenNear = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const placeholder = (
    <div className="techstack" ref={ref}>
      <h2>Softwares <span className="tech-accent">&</span> Tools I Use</h2>
      <div className="tech-canvas" />
    </div>
  );

  if (!near) return placeholder;
  return (
    <Suspense fallback={placeholder}>
      <TechStack />
    </Suspense>
  );
};

export default MainContainer;
