// src/hooks/useVSCodeMessaging.js
import { useEffect } from "react";
import { useFiles } from "../contexts/FileContext";

export const useVSCodeMessaging = () => {
  const { addFile } = useFiles();

  useEffect(() => {
    const handleMessage = (event) => {
      const message = event.data;

      switch (message.command) {
        case "addFile":
          const fileInfo = message.fileInfo;
          fileInfo.content = `// ${fileInfo.path}\n${fileInfo.content}`;
          addFile(fileInfo);
          break;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [addFile]);
};
