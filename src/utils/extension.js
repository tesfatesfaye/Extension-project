// extension.js
import * as vscode from "vscode";

export function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "your-extension.addFile",
    async (uri) => {
      if (uri && uri.fsPath) {
        if (!global.panel) {
          global.panel = vscode.window.createWebviewPanel(
            "fileManager",
            "File Manager",
            vscode.ViewColumn.Two,
            {
              enableScripts: true,
              retainContextWhenHidden: true,
            }
          );

          global.panel.onDidDispose(() => {
            global.panel = undefined;
          });
        }

        // Added async/await here
        const fs = await import("fs/promises");
        const content = await fs.readFile(uri.fsPath, "utf8");
        const fileInfo = {
          path: uri.fsPath,
          content: content,
        };

        global.panel.webview.postMessage({
          command: "addFile",
          fileInfo: fileInfo,
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
