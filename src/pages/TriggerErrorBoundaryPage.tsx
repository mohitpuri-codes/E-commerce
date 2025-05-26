import { useState } from "react";

function ErrorBoundary() {
  const [triggerError, setTriggerError] = useState(false);
  if (triggerError) {
    throw new Error("UI crash");
  }
  return (
    <div className=" m-4 flex items-center justify-center">
      <button
        onClick={() => {
          setTriggerError(true);
        }}
        className="bg-red-400 border-1 rounded py-1 px-2"
      >
        Trigger Error
      </button>
    </div>
  );
}

export default ErrorBoundary;
