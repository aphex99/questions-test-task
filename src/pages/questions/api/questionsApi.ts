import type { Question } from "@/entities/question";

import { baseApi } from "@/shared/api";
import type { QuestionsFiltersState } from "@/shared/model/questionsFilters/model/types.ts";
import type { PaginatedResponse } from "@/shared/types";

import { filterEmptyParams } from "../model/filterEmptyParams.ts";

type GetQuestionsParams = QuestionsFiltersState;

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<PaginatedResponse<Question>, GetQuestionsParams>({
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

export const { useGetQuestionsQuery, useLazyGetQuestionsQuery } = questionsApi;
