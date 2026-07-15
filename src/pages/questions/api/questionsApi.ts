import type { QuestionsResponse } from "@/pages/questions";

import { baseApi } from "@/shared/api";

interface GetQuestionsParams {
  page: number;
  limit: number;
}

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsResponse, GetQuestionsParams>({
      query: ({ page, limit }) => ({
        url: "/questions/public-questions",
        params: {
          page,
          limit,
        },
      }),
      providesTags: ["Questions"],
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
