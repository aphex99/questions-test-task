import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["Questions", "Specializations"],
  endpoints: () => ({}),
});
