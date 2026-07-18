import type { AppState } from "@/app/providers/store";

export const selectQuestionsFilters = (state: AppState) => state.questionsFilters;

export const selectSpecializationId = (state: AppState) => state.questionsFilters.specializationId;

export const selectTitle = (state: AppState) => state.questionsFilters.title;

export const selectComplexity = (state: AppState) => state.questionsFilters.complexity;

export const selectRate = (state: AppState) => state.questionsFilters.rate;

export const selectSkills = (state: AppState) => state.questionsFilters.skills;
