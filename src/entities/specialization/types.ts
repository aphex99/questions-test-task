import type { User } from "@/shared/model";

export interface Specialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: User;
}
