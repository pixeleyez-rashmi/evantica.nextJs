"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Direction = "ltr" | "rtl";

const DirectionContext = createContext<{
  dir: Direction;
  toggleDir: () => void;
}>({ dir: "ltr", toggleDir: () => {} });

export function DirectionProvider({ children }: { children: React.ReactNode }) {
  const [dir, setDir] = useState<Direction>("ltr");

  // Refresh પર localStorage થી direction load કરો
  useEffect(() => {
    const saved = localStorage.getItem("dir") as Direction;
    if (saved) {
      setDir(saved);
      document.documentElement.setAttribute("dir", saved);
    }
  }, []);

  const toggleDir = () => {
    const newDir = dir === "ltr" ? "rtl" : "ltr";
    setDir(newDir);
    document.documentElement.setAttribute("dir", newDir);
    // localStorage માં save કરો
    localStorage.setItem("dir", newDir);
  };

  return (
    <DirectionContext.Provider value={{ dir, toggleDir }}>
      <div dir={dir}>{children}</div>
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  return useContext(DirectionContext);
}
