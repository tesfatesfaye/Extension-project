import { useVSCodeMessaging } from "../hooks/useVSCodeMessaging";
import { FileList } from "./FileList";
const AppContent = () => {
  useVSCodeMessaging();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Selected Files</h1>
      <FileList />
    </div>
  );
};

export default AppContent;