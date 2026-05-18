import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>


            <div className="what-content-in">
              <h3>GRAPHIC DESIGN</h3>
              <h4>Content that Captures Attention</h4>
              <p>
               I design high-impact visuals, social media creatives, ads, thumbnails, and brand assets, so businesses stand out and convert faster.
              </p>
              <h5>Softwares & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Canva</div>
                <div className="what-tags">Photoshop</div>
                <div className="what-tags">Illustrator</div>
                <div className="what-tags">Figma</div>
                <div className="what-tags">ChatGPT</div>
                <div className="what-tags">Gemini</div>
                <div className="what-tags">Freepik</div>
                <div className="what-tags">Midjourney</div>
                <div className="what-tags">Claude</div>
                <div className="what-tags">Flux</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >


            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>VIDEO EDITING</h3>
              <h4>Performance-Driven Video Editing</h4>
              <p>
                I create scroll stopping videos, reels, ads, and AI-powered content, optimized for retention and performance that drives results.
              </p>
              <h5>Softwares & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">CapCut</div>
                <div className="what-tags">Premiere Pro</div>
                <div className="what-tags">After Effects</div>
                <div className="what-tags">Higgsfield</div>
                <div className="what-tags">VEO 3</div>
                <div className="what-tags">Kling</div>
                <div className="what-tags">HeyGen</div>
                <div className="what-tags">VEED</div>
                <div className="what-tags">Eleven Labs</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhatIDo;


function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);


    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}



