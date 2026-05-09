import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    els.forEach((el) => io.observe(el));
    // Safety fallback: ensure visibility even if observer never fires
    const t = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 1500);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}
