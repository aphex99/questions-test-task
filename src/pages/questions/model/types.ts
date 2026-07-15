import type { PaginatedResponse } from "@/features/pagination";

import type { Question } from "@/entities/question";

export type QuestionsResponse = PaginatedResponse<Question>;
