import React from "react";
import { ResumeProvider } from "./context/ResumeContext";
import BuilderPage from "./pages/BuilderPage";

import './pages/BuilderPage.css';
export default function App() {
  return (
    <ResumeProvider>
      <BuilderPage />
    </ResumeProvider>
  );
}
