import type { Skill } from "@/entities/skill";
import type { Specialization } from "@/entities/specialization";

import type { Topic, User } from "@/shared/model";

export interface Question {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: "public" | "private" | string;
  rate: number;
  complexity: number;
  createdById: string;
  updatedById: string;
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
  questionTopics: Topic[];
  createdAt: string;
  updatedAt: string;
  createdBy: User;
  updatedBy: User;
  checksCount: number;
  isLearned: boolean;
  isFavorite: boolean;
  profileId: string;
  lastUpdate: string;
}
