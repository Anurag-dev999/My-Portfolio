import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!isClickable);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const animate = () => {
      const lerp = 0.12;
      cursorPos.current.x += (pos.current.x - cursorPos.current.x) * lerp;
      cursorPos.current.y += (pos.current.y - cursorPos.current.y) * lerp;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150"
        style={{
          width: isPointer ? "48px" : isClicking ? "28px" : "36px",
          height: isPointer ? "48px" : isClicking ? "28px" : "36px",
          borderColor: isPointer ? "hsl(var(--violet))" : "hsl(var(--cyan) / 0.6)",
          boxShadow: isPointer
            ? "0 0 15px hsl(var(--violet) / 0.4)"
            : "0 0 10px hsl(var(--cyan) / 0.3)",
          transitionProperty: "width, height, border-color, box-shadow",
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: isClicking ? "6px" : "4px",
          height: isClicking ? "6px" : "4px",
          backgroundColor: "hsl(var(--cyan))",
          boxShadow: "0 0 8px hsl(var(--cyan))",
          transition: "width 0.1s, height 0.1s",
        }}
      />
    </>
  );
}
