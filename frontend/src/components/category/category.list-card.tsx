import { Stack } from "@chakra-ui/react";
import { CategoryStatus } from "../../types/category.type";
import CategoryCard from "../card/category.card";
interface SubCategory {
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

const ListCardCategory = ({
  subCategories,
}: {
  subCategories: SubCategory[];
}) => {
  return (
    <div>
      <Stack gap={3}>
        {subCategories.map((sub) => (
          <CategoryCard sub={sub} />
        ))}
      </Stack>
    </div>
  );
};

export default ListCardCategory;
