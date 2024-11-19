// src/App.jsx
import React from "react";
import { FileProvider } from "./contexts/FileContext";
import AppContent from "./components/AppContent";
// Create a new component to use the hook

const App = () => {
  return (
    <FileProvider>
      <AppContent />
    </FileProvider>
  );
};

export default App;
