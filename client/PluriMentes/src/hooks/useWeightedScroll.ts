import { useEffect } from "react";

export default function useWeightedScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetPosition = window.scrollY;
    let currentPosition = window.scrollY;
    let animationFrame: number | undefined;

    const updateScroll = () => {
      currentPosition += (targetPosition - currentPosition) * 0.095;

      if (Math.abs(targetPosition - currentPosition) < 0.5) {
        window.scrollTo(0, targetPosition);
        animationFrame = undefined;
        return;
      }

      window.scrollTo(0, currentPosition);
      animationFrame = window.requestAnimationFrame(updateScroll);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey) return;

      event.preventDefault();

      const delta = event.deltaY * (event.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : 1);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetPosition = Math.max(0, Math.min(maxScroll, targetPosition + delta * 0.52));

      if (animationFrame === undefined) {
        currentPosition = window.scrollY;
        animationFrame = window.requestAnimationFrame(updateScroll);
      }
    };

    const handleScroll = () => {
      if (animationFrame === undefined) targetPosition = window.scrollY;
    };

    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
