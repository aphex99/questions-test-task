import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/app";

import { NotFoundPage, QuestionPage, QuestionsPage } from "@/pages";

import { ErrorBoundaryFallback } from "@/shared/ui";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundaryFallback />,
    children: [
      {
        index: true,
        element: <QuestionsPage />,
      },
      {
        path: "/question/:id",
        element: <QuestionPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
