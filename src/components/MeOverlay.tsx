import React, { useState } from "react";
import MiddlePng from "../assets/middle.png";
import LeftPng from "../assets/left.png";
import RightPng from "../assets/right.png";
import "./MeOverlay.css";

type MeOverlayProps = {
  position: "left" | "middle" | "right";
};

export default function MeOverlay({ position }: MeOverlayProps) {
  const [open, setOpen] = useState(false);

  // Choose the image based on position prop
  let src = MiddlePng.src;
  if (position === "left") src = LeftPng.src;
  if (position === "right") src = RightPng.src;

  return (
    <div
      className={`me-png-container${open ? " open" : ""}`}
      onClick={() => !open && setOpen(true)}
      style={{ cursor: "pointer" }}
    >
      <img src={src} alt={`Me ${position}`} />

      {open && (
        <div className="dot-overlay-content">
          <h2>About Me</h2>
          <p>
            This is my expanded content. You can add descriptions, links,
            projects, or any interactive content here.
          </p>

          <button className="back-btn" onClick={() => setOpen(false)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
