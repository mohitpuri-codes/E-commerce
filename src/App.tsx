import { ErrorBoundary } from "react-error-boundary";
import Router from "./routes/Router";
import GlobalErrorPage from "./pages/GlobalErrorPage";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={GlobalErrorPage}>
        <Router />
      </ErrorBoundary>
    </>
  );
}

export default App;
