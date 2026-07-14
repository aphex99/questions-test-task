import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";

import ErrorBoundaryFallback from "@/shared/ui/error-boundary/ui/ErrorBoundaryFallback.tsx";

import { router } from "./providers/router";
import { StoreProvider } from "./providers/store";

function App() {
  return (
    <StoreProvider>
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default App;
