import { useErrorBoundary } from "react-error-boundary";

function ErrorBoundary() {
  const { showBoundary } = useErrorBoundary();
  return (
    <div className=" m-4 flex items-center justify-center">
      <button
        onClick={() => {
          showBoundary("Something went wrong");
          throw new Error("Something went wrong");
        }}
        className="bg-red-400 border-1 rounded py-1 px-2"
      >
        Trigger ErrorBoundary
      </button>
    </div>
  );
}

export default ErrorBoundary;
