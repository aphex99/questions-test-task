import { baseApi } from "@/shared/api";
import type { PaginatedResponse } from "@/shared/types";

import type { SkillType } from "../model/types.ts";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<PaginatedResponse<SkillType>, void>({
      query: () => {
        return {
          url: `/skills?page=1&limit=66`,
        };
      },
      providesTags: ["Specializations"],
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
