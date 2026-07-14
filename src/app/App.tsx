import { RouterProvider } from "react-router-dom";

import { router } from "@/app/providers/router";
import { StoreProvider } from "@/app/providers/store";
import AppLayout from "@/app/ui/AppLayout.tsx";

function App() {
  return (
    <StoreProvider>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </StoreProvider>
  );
}

export default App;
