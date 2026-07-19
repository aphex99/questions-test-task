import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { toggleGroup } from "@/shared/lib/array";

import { questionsFiltersInitialState } from "./constants.ts";

const questionsFiltersSlice = createSlice({
  name: "questionsFilters",
  initialState: questionsFiltersInitialState,
  reducers: {
    setSpecialization(state, action: PayloadAction<number | undefined>) {
      state.specializationId =
        action.payload === state.specializationId ? undefined : action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    toggleComplexity(state, action: PayloadAction<number[]>) {
      state.complexity = toggleGroup(state.complexity, action.payload);
    },
    toggleRate(state, action: PayloadAction<number>) {
      const value = action.payload;
      if (state.rate.includes(value)) {
        state.rate = state.rate.filter((rate) => rate !== value);
      } else {
        state.rate.push(value);
      }
    },
    toggleSkill(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.skills.includes(id)) {
        state.skills = state.skills.filter((skill) => skill !== id);
      } else {
        state.skills.push(id);
      }
    },
    resetFilters(state) {
      return { ...questionsFiltersInitialState, limit: state.limit };
    },
  },
});

export const {
  resetFilters,
  setSpecialization,
  setTitle,
  toggleComplexity,
  toggleRate,
  toggleSkill,
} = questionsFiltersSlice.actions;

export default questionsFiltersSlice.reducer;
