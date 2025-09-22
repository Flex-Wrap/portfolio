import React, { type ReactNode, useState } from "react";

type ColorScheme = "red" | "blue" | "purple" | "black";

type DotOverlayProps = {
  x: string | number;
  y: string | number;
  children?: ReactNode;
  color?: ColorScheme; // choose color, default red
};

export default function DotOverlay({
  x,
  y,
  children,
  color = "red",
}: DotOverlayProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`dot-overlay${open ? " open" : ""}`}
      style={{
        left: typeof x === "number" ? `${x}px` : x,
        top: typeof y === "number" ? `${y}px` : y,
        "--dot-color": `var(--color-${color})`, // dynamic color variable
      } as React.CSSProperties}
      onClick={() => !open && setOpen(true)}
    >
      {open && <div className="dot-overlay-content">{children}</div>}

      <button className="back-btn" onClick={() => setOpen(false)}>
        Back
      </button>
    </div>
  );
}
