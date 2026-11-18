"use client";
import { useEffect } from "react";

/**
 * Animated background (no canvas, no lines): slow drifting aurora lights, a faint dot field that
 * lights up around the pointer, and a soft glow that follows the cursor. All motion is CSS
 * transforms, so it stays smooth, and it is switched off for visitors who prefer reduced motion.
 */
export default function AuroraBackground() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let x = window.innerWidth / 2, y = window.innerHeight / 3;
    const apply = () => {
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
      raf = 0;
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="aurora" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <span className="blob b4" />
      <span className="ring" />
      <span className="dots" />
      <span className="dots lit" />
      <span className="cursor-glow" />
    </div>
  );
}
