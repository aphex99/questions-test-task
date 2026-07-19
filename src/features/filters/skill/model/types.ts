import type { Specialization } from "@/shared/types";

export interface SkillType {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
}
