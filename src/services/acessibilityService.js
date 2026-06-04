let fontScale =
  Number(localStorage.getItem("fontScale")) || 1;

export const getFontScale = () => fontScale;

export const setFontScale = (value) => {
  fontScale = value;

  document.documentElement.style.setProperty(
    "--font-scale",
    fontScale
  );

  localStorage.setItem(
    "fontScale",
    fontScale
  );
};

export const increaseFontSize = () => {
  setFontScale(
    Math.min(fontScale + 0.1, 1.8)
  );
};

export const decreaseFontSize = () => {
  setFontScale(
    Math.max(fontScale - 0.1, 0.8)
  );
};

export const initializeAccessibility = () => {
  document.documentElement.style.setProperty(
    "--font-scale",
    fontScale
  );
};

const toggleClass = (className) => {
  document.documentElement.classList.toggle(
    className
  );
};

export const toggleContrast = () => {
  toggleClass("high-contrast");
};

export const toggleDyslexiaFont = () => {
  toggleClass("dyslexia-font");
};

export const toggleBigCursor = () => {
  toggleClass("large-cursor");
};

export const readPage = () => {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const text = document.body.innerText;

  const speech =
    new SpeechSynthesisUtterance(text);

  speech.lang = "pt-BR";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};

export const stopReading = () => {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();
};