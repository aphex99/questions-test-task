import type { QuestionsFiltersState } from "@/shared/model/questionsFilters/model/types.ts";

export const filterEmptyParams = (params: QuestionsFiltersState) => {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) =>
        !Array.isArray(value) && value !== null && value !== undefined && value !== "",
    ),
  );
};
