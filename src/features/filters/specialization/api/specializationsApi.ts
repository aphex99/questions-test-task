import type { SpecializationType } from "@/features/filters/specialization";

import { baseApi } from "@/shared/api";
import type { PaginatedResponse } from "@/shared/types";

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<PaginatedResponse<SpecializationType>, void>({
      query: () => {
        return {
          url: `/specializations?page=1&limit=28`,
        };
      },
      providesTags: ["Specializations"],
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
