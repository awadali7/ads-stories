// components/CustomCursor.tsx
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Hide the native arrow
        document.body.style.cursor = "none";

        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.style.cursor = ""; // restore default when unmounting
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`
        fixed 
        w-[24px] 
        h-[24px] 
        rounded-full 
        bg-white 
        pointer-events-none 
        transform 
        -translate-x-1/2 
        -translate-y-1/2 
        shadow-[0_2px_6px_rgba(0,0,0,0.4)] 
        z-[9999]
      `}
        />
    );
}
