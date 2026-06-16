import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PageTransition({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.set(containerRef.current, { opacity: 0, y: 15 });

    gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [children]);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
}