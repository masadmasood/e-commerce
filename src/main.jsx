import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";

import ShopContextProvider from "./context/ShopContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
