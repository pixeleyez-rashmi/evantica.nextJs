"use client";
import { useState } from "react";
import { useDirection } from "../../components/common/DirectionProvider";

export default function DirToggleButton() {
  const { dir, toggleDir } = useDirection();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      id="directionToggle"
      onClick={toggleDir}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-1/2 right-0 z-[9999] bg-black dark:bg-white text-white dark:text-black text-xs font-black px-3 py-4 shadow-lg cursor-pointer hover:bg-primary transition-all duration-300"
      style={{
        transformOrigin: "right center",
        transform: `translateY(-50%) scaleX(${hovered ? 1.2 : 1})`,
        borderRadius: "12px 0 0 12px",
      }}
    >
      {dir === "ltr" ? "LTR" : "RTL"}
    </button>
  );
}
