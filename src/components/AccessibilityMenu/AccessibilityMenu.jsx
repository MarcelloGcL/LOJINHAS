import { useState } from "react";

import {
  toggleContrast,
  toggleDyslexiaFont,
  toggleBigCursor,
  readPage,
  stopReading,
  setFontScale,
  getFontScale,
} from "../../services/acessibilityService";

import "./AccessibilityMenu.css";

function AccessibilityMenu({ onClose }) {
  const [fontScale, setScale] = useState(getFontScale());

  const [contrastEnabled, setContrastEnabled] = useState(
    document.documentElement.classList.contains("high-contrast"),
  );

  const [dyslexiaEnabled, setDyslexiaEnabled] = useState(
    document.documentElement.classList.contains("dyslexia-font"),
  );

  const [cursorEnabled, setCursorEnabled] = useState(
    document.documentElement.classList.contains("large-cursor"),
  );

  const [boldEnabled, setBoldEnabled] = useState(
    document.documentElement.classList.contains("bold-text"),
  );

  const [spacingEnabled, setSpacingEnabled] = useState(
    document.documentElement.classList.contains("spacing-text"),
  );

  const [lineHeightEnabled, setLineHeightEnabled] = useState(
    document.documentElement.classList.contains("line-height-text"),
  );

  const [grayScaleEnabled, setGrayScaleEnabled] = useState(
    document.documentElement.classList.contains("gray-scale"),
  );

  const [lowSaturationEnabled, setLowSaturationEnabled] = useState(
    document.documentElement.classList.contains("low-saturation"),
  );

  const [linksEnabled, setLinksEnabled] = useState(
    document.documentElement.classList.contains("highlight-links"),
  );

  const [animationsEnabled, setAnimationsEnabled] = useState(
    document.documentElement.classList.contains("pause-animations"),
  );

  const toggleClass = (className, setter) => {
    document.documentElement.classList.toggle(className);

    setter(document.documentElement.classList.contains(className));
  };

  const handleContrast = () => {
    toggleContrast();

    setContrastEnabled(
      document.documentElement.classList.contains("high-contrast"),
    );
  };

  const handleDyslexia = () => {
    toggleDyslexiaFont();

    setDyslexiaEnabled(
      document.documentElement.classList.contains("dyslexia-font"),
    );
  };

  const handleCursor = () => {
    toggleBigCursor();

    setCursorEnabled(
      document.documentElement.classList.contains("large-cursor"),
    );
  };

  const resetAccessibility = () => {
    document.documentElement.classList.remove(
      "high-contrast",
      "dyslexia-font",
      "large-cursor",
      "bold-text",
      "spacing-text",
      "line-height-text",
      "gray-scale",
      "low-saturation",
      "highlight-links",
      "pause-animations",
    );

    setContrastEnabled(false);
    setDyslexiaEnabled(false);
    setCursorEnabled(false);
    setBoldEnabled(false);
    setSpacingEnabled(false);
    setLineHeightEnabled(false);
    setGrayScaleEnabled(false);
    setLowSaturationEnabled(false);
    setLinksEnabled(false);
    setAnimationsEnabled(false);

    setFontScale(1);
    setScale(1);

    stopReading();
  };

  return (
    <aside
      className="accessibility-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de acessibilidade"
    >
      <div className="accessibility-title">
        <div className="accessibility-header">
          <div>
            <h2>Menu Acessibilidade</h2>
            <p>Personalize sua experiência de navegação</p>
          </div>

          <button
            type="button"
            className="close-accessibility"
            onClick={onClose}
            aria-label="Fechar menu de acessibilidade"
          >
            ✕
          </button>
        </div>
      </div>

      <section className="font-section">
        <h4>Tamanho da Fonte</h4>

        <input
          className="font-slider"
          type="range"
          min="0.8"
          max="1.8"
          step="0.1"
          value={fontScale}
          aria-label="Ajustar tamanho da fonte"
          onChange={(e) => {
            const value = Number(e.target.value);

            setScale(value);
            setFontScale(value);
          }}
        />

        <span className="font-percentage">{Math.round(fontScale * 100)}%</span>
      </section>

      <section>
        <h4>Leitura e Texto</h4>

        <div className="accessibility-grid">
          <button
            type="button"
            onClick={handleDyslexia}
            className={dyslexiaEnabled ? "active-accessibility" : ""}
          >
            Fonte para Dislexia
          </button>

          <button
            type="button"
            onClick={() => toggleClass("bold-text", setBoldEnabled)}
            className={boldEnabled ? "active-accessibility" : ""}
          >
            Texto Negrito
          </button>

          <button
            type="button"
            onClick={() => toggleClass("spacing-text", setSpacingEnabled)}
            className={spacingEnabled ? "active-accessibility" : ""}
          >
            Espaçamento de Letras
          </button>

          <button
            type="button"
            onClick={() =>
              toggleClass("line-height-text", setLineHeightEnabled)
            }
            className={lineHeightEnabled ? "active-accessibility" : ""}
          >
            Altura da Linha
          </button>
        </div>
      </section>

      <section>
        <h4>Ajustes Visuais</h4>

        <div className="accessibility-grid">
          <button
            type="button"
            onClick={handleContrast}
            className={contrastEnabled ? "active-accessibility" : ""}
          >
            Alto Contraste
          </button>

          <button
            type="button"
            onClick={() => toggleClass("gray-scale", setGrayScaleEnabled)}
            className={grayScaleEnabled ? "active-accessibility" : ""}
          >
            Monocromático
          </button>

          <button
            type="button"
            onClick={() =>
              toggleClass("low-saturation", setLowSaturationEnabled)
            }
            className={lowSaturationEnabled ? "active-accessibility" : ""}
          >
            Baixa Saturação
          </button>
        </div>
      </section>

      <section>
        <h4>Ferramentas</h4>

        <div className="accessibility-grid">
          <button
            type="button"
            onClick={handleCursor}
            className={cursorEnabled ? "active-accessibility" : ""}
          >
            Cursor Maior
          </button>

          <button
            type="button"
            onClick={() => toggleClass("highlight-links", setLinksEnabled)}
            className={linksEnabled ? "active-accessibility" : ""}
          >
            Destacar Links
          </button>

          <button
            type="button"
            onClick={() =>
              toggleClass("pause-animations", setAnimationsEnabled)
            }
            className={animationsEnabled ? "active-accessibility" : ""}
          >
            Parar Animações
          </button>

          <button type="button" onClick={readPage}>
            Ler Página
          </button>

          <button type="button" onClick={stopReading}>
            Parar Leitura
          </button>
        </div>
      </section>

      <section>
        <button
          type="button"
          className="reset-button"
          onClick={resetAccessibility}
        >
          Restaurar Configurações
        </button>
      </section>
    </aside>
  );
}

export default AccessibilityMenu;
