import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/app";

import { NotFoundPage } from "@/pages";

import { ErrorBoundaryFallback } from "@/shared/ui";
import { SkeletonQuestionsPage } from "@/shared/ui/skeletons";
import { SkeletonOneQuestionPage } from "@/shared/ui/skeletons/skeleton-one-question-page";

const QuestionsPage = lazy(() => import("@/pages/questions"));
const QuestionPage = lazy(() => import("@/pages/question"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundaryFallback />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SkeletonQuestionsPage />}>
            <QuestionsPage />
          </Suspense>
        ),
      },
      {
        path: "/questions/:id",
        element: (
          <Suspense fallback={<SkeletonOneQuestionPage />}>
            <QuestionPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
