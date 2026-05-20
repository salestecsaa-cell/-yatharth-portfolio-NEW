import { gsap } from "gsap";

/**
 * Hides the 3D character model immediately.
 * Call this before any programmatic scroll to #work section
 * so the fixed character doesn't overlap the Work section content.
 */
export function hideCharacter() {
  gsap.to(".character-model", {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.3,
    ease: "power1.out",
  });
}
