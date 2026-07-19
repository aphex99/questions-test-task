import { RouterProvider } from "react-router-dom";

import { router } from "./providers/router";
import { StoreProvider } from "./providers/store";

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
