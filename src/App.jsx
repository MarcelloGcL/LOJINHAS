import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import { initializeAccessibility } from "./services/acessibilityService";
import AccessibilityWidget from "./components/AccessibilityWidget/AccessibilityWidget.jsx";

function App() {
  useEffect(() => {
    initializeAccessibility();
  }, []);

  return (
    <CartProvider>
      <AppRoutes />
      <AccessibilityWidget />
    </CartProvider>
  );
}

export default App;