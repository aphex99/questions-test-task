import type { Question } from "@/entities/question";

export interface GetQuestionsResponse<T> {
  total: number;
  page: number;
  limit: number;
  data: T[];
}

export type QuestionsResponse = GetQuestionsResponse<Question>;
