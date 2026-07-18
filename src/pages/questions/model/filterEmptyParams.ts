import type { QuestionsFiltersState } from "@/shared/model/questionsFilters";

export const filterEmptyParams = (params: QuestionsFiltersState) => {
  const isParams = Object.entries(params).filter(([_, value]) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value !== null && value !== undefined && value !== "";
  });
  return Object.fromEntries(isParams);
};
