import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/app/ui/AppLayout.tsx";

import { NotFoundPage } from "@/pages/not-found";
import { QuestionPage } from "@/pages/question";
import { QuestionsPage } from "@/pages/questions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
