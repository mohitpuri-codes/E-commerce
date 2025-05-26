import { useErrorBoundary } from "react-error-boundary";

function GlobalErrorPage() {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div className="flex justify-center items-center flex-col my-0 mx-auto">
      <p>OOPS! Something went wrong</p>
      <button
        onClick={resetBoundary}
        className="border-1 bg-green-400 py-1 px-2 rounded"
      >
        Reload the Page
      </button>
    </div>
  );
}

export default GlobalErrorPage;
