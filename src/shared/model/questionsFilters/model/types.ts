export interface QuestionsFiltersState {
  limit: number;

  title: string;

  specializationId?: number;
  skills: number[];

  complexity: number[];
  rate: number[];
}
