import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "@/shared/api";
import { questionsFiltersReducer } from "@/shared/model/questionsFilters/model";

export const store = configureStore({
  reducer: {
    questionsFilters: questionsFiltersReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
