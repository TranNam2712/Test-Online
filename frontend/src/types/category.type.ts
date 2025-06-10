export const CategoryStatus = {
  ACTIVE: 1,
  UNACTIVE: 2,
  DELETED: 3,
} as const;

export type CategoryStatus =
  (typeof CategoryStatus)[keyof typeof CategoryStatus];

export interface Category {
  id: number;
  sub_categories_id?: number | null;
  name: string;
  slug: string;
  description?: string;
  image_thumbnail?: string;
  total_test?: number;
  total_completed?: number;
  rating?: number;
  total_evaluation?: number;
  is_parent?: boolean;
  status?: CategoryStatus;
}
