import type { QuestionsResponse } from "@/pages/questions";

import { baseApi } from "@/shared/api";
import type { QuestionsFiltersState } from "@/shared/model/questionsFilters/model/types.ts";

import { filterEmptyParams } from "../model/filterEmptyParams.ts";

type GetQuestionsParams = QuestionsFiltersState;

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsResponse, GetQuestionsParams>({
      query: (params) => {
        return {
          url: "/questions/public-questions",
          params: filterEmptyParams(params),
        };
      },
      providesTags: ["Questions"],
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
