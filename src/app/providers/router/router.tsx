import { createBrowserRouter } from "react-router-dom";

import { NotFoundPage } from "@/pages/not-found";
import { QuestionPage } from "@/pages/question";
import { QuestionsPage } from "@/pages/questions";

export const router = createBrowserRouter([
  {
    path: "/",
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
]);
