import { COUNT_PER_PAGE } from "@/pages/questions/config/consts.ts";

import type { QuestionsFiltersState } from "./types.ts";

export const questionsFiltersInitialState: QuestionsFiltersState = {
  limit: COUNT_PER_PAGE,

  title: "",

  specializationId: undefined,
  skills: [],

  complexity: [],
  rate: [],
};
