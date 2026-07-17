export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

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

export interface User {
  id: string;
  username: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number;
  data: T[];
}
