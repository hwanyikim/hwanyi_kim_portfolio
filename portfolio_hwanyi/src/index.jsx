import React from "react";
import ReactDOMClient from "react-dom/client";
import { PortfolioUiDesign } from "./screens/PortfolioUiDesign";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PortfolioUiDesign />);
