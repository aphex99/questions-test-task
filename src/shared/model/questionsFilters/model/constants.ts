import type { QuestionsFiltersState } from "./types.ts";

export const questionsFiltersInitialState: QuestionsFiltersState = {
  page: 1,
  limit: 10,

  title: "",

  specializationId: undefined,
  skills: [],

  complexity: [],
  rate: [],
};
