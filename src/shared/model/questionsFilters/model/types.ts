export interface QuestionsFiltersState {
  page: number;
  limit: number;

  title: string;

  specializationId?: number;
  skills: string[];

  complexity: number[];
  rate: number[];
}
