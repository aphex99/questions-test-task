import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { useGetQuestionsQuery, useLazyGetQuestionsQuery } from "@/pages/questions";
import { COUNT_PER_PAGE } from "@/pages/questions/config/consts.ts";

import { useAppSelector } from "@/shared/lib/redux";
import { selectQuestionsFilters } from "@/shared/model/questionsFilters";

export interface UseQuestionNavigationReturn {
  currentPage: number;
  goNext: () => Promise<void>;
  goPrevious: () => Promise<void>;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export const useQuestionNavigation = (): UseQuestionNavigationReturn => {
  const filters = useAppSelector(selectQuestionsFilters);

  const { id } = useParams();

  const questionId = Number(id);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") ?? 1);

  const { data: questionsList } = useGetQuestionsQuery({ ...filters, page: currentPage });
  const questions = questionsList?.data ?? [];

  const [fetchList] = useLazyGetQuestionsQuery();

  const currentIndex = questions.findIndex((question) => question.id === questionId) ?? -1;

  const isFirstQuestion = currentIndex === 0 && currentPage === 1;
  const totalPages = Math.ceil((questionsList?.total || 0) / COUNT_PER_PAGE);
  const isLastQuestion = currentPage === totalPages && currentIndex === (questions.length || 0) - 1;

  const goNext = async () => {
    if (!questionsList || !questions.length) {
      return;
    }

    const nextQuestion = questions[currentIndex + 1];

    if (nextQuestion) {
      navigate(`/questions/${nextQuestion.id}?page=${currentPage}`);
      return;
    }

    const { data: nextPage } = await fetchList({ ...filters, page: currentPage + 1 }).unwrap();

    if (nextPage?.length) {
      navigate(`/questions/${nextPage[0].id}?page=${currentPage + 1}`);
    }
  };

  const goPrevious = async () => {
    if (!questionsList || !questions.length) {
      return;
    }

    const prevQuestion = questions[currentIndex - 1];

    if (prevQuestion) {
      navigate(`/questions/${prevQuestion.id}?page=${currentPage}`);
      return;
    }

    if (currentPage === 1) {
      return;
    }

    const { data: previousPage } = await fetchList({ ...filters, page: currentPage - 1 }).unwrap();

    const lastQuestion = previousPage[previousPage.length - 1];

    navigate(`/questions/${lastQuestion.id}?page=${currentPage - 1}`);
  };

  return { goNext, goPrevious, isFirstQuestion, isLastQuestion, currentPage };
};
