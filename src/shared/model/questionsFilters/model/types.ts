export interface QuestionsFiltersState {
  page: number;
  limit: number;

  title: string;

  specializationId?: number;
  skills: number[];

  complexity: number[];
  rate: number[];
}
