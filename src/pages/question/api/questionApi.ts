import type { Question } from "@/entities/question";

import { baseApi } from "@/shared/api";

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestion: builder.query<Question, number>({
      query: (id) => ({
        url: `/questions/public-questions/${id}`,
      }),
      providesTags: ["Questions"],
    }),
  }),
});

export const { useGetQuestionQuery } = questionApi;
