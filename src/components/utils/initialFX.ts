import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "../Navbar";

// FIX: Store loop timelines at module level so we can pause/restart them on scroll-back
let loopTimeline1: gsap.core.Timeline | null = null;
let loopTimeline2: gsap.core.Timeline | null = null;

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  // FIX: Store returned timelines so we can control them on scroll-back
  loopTimeline1 = LoopText(landingText2, landingText3);
  loopTimeline2 = LoopText(landingText4, landingText5);

  // FIX: When user scrolls back to top, restart the loop timelines from beginning
  // Without this: chars are stuck mid-cycle (y:-80 or opacity:0) making text invisible
  ScrollTrigger.create({
    trigger: ".landing-section",
    start: "top top",
    end: "bottom top",
    onLeaveBack: () => {
      // Reset all char positions cleanly
      gsap.set(
        [
          landingText2.chars,
          landingText3.chars,
          landingText4.chars,
          landingText5.chars,
        ],
        { clearProps: "y,opacity,transform" }
      );
      // Restart loops from beginning so text is visible immediately
      if (loopTimeline1) {
        loopTimeline1.restart();
      }
      if (loopTimeline2) {
        loopTimeline2.restart();
      }
      // Also restore h3 "Top Rated Plus" visibility
      gsap.set(landingText.chars, { opacity: 1, y: 0, filter: "blur(0px)" });
    },
  });
}

// FIX: Now returns the timeline so caller can restart it on scroll-back
function LoopText(Text1: SplitText, Text2: SplitText): gsap.core.Timeline {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );

  // FIX: Return timeline reference
  return tl;
}
