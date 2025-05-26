import ErrorBoundary from "./components/Error Boundry/ErrorBoundry";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </>
  );
}

export default App;
