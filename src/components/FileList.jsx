// src/components/FileList.jsx
import React from "react";
import { useFiles } from "../contexts/FileContext";

export const FileList = () => {
  const { files } = useFiles();

  return (
    <div className="space-y-4">
      {files.length === 0 ? (
        <p className="text-gray-500">
          No files selected. Right-click on files and select "Add to Extension"
          to begin.
        </p>
      ) : (
        <div className="space-y-4">
          {files.map((file, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h2 className="font-semibold mb-2">{file.path}</h2>
              <textarea
                className="w-full h-32 p-2 border rounded bg-gray-50"
                value={file.content}
                readOnly
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
