import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { StrictMode } from 'react';

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);