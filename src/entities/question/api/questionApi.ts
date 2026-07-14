import { baseApi } from "@/shared/api";

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestion: builder.query({
      query: (id: string) => `/question/:${id}`,
    }),
  }),
});
