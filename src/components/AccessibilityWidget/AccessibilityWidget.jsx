import { useState } from "react";
import AccessibilityMenu from "../AccessibilityMenu/AccessibilityMenu";
import "./AccessibilityWidget.css";

function AccessibilityWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <>
          <div
            className="accessibility-overlay"
            onClick={() => setOpen(false)}
          />

          <AccessibilityMenu
            onClose={() => setOpen(false)}
          />
        </>
      )}

      <button
        className="floating-accessibility-button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir menu de acessibilidade"
      >
        <svg
          className="accessibility-icon"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />

          <circle
            cx="24"
            cy="15"
            r="2.5"
            fill="currentColor"
          />

          <path
            d="M16 21H32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M24 18V31"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M19 35L24 29L29 35"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}

export default AccessibilityWidget;