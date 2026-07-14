import { baseApi } from "@/shared/api";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => "/questions",
    }),
  }),
});
