// src/App.jsx
import React from "react";
import { FileProvider } from "./contexts/FileContext";
import { FileList } from "./components/FileList";
import { useVSCodeMessaging } from "./hooks/useVSCodeMessaging";

// Create a new component to use the hook
const AppContent = () => {
  useVSCodeMessaging();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Selected Files</h1>
      <FileList />
      </div>
  );
};

const App = () => {
  return (
    <FileProvider>
      <AppContent />
    </FileProvider>
  );
};

export default App;
5