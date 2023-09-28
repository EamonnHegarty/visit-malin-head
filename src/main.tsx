import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import theme from "./theme.ts";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
