import { Box, Button, Card, Stack, Text } from "@chakra-ui/react";
import { CategoryStatus } from "../../types/category.type";
import { RiCalendar2Line, RiUserFollowLine } from "@remixicon/react";
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
interface Category {
  subCategories: SubCategory[];
}

const ListCardCategory = (category: Category) => {
  return (
    <div>
      <Stack gap={3}>
        {category.subCategories.map((sub, idx) => (
          <Card variant="outline" key={idx} className="w-full p-4">
            <div className="grid grid-cols-4 grid-rows-4 gap-2">
              {/* image */}
              <div className="row-span-3 md:row-span-4 m-auto">
                <img
                  src={sub.image_thumbnail}
                  alt="icon"
                  className="object-contain"
                />
              </div>

              {/* title */}
              <div className="col-span-3 my-auto">
                <Text fontSize={"xl"} className="w-full ">
                  {sub.name}
                </Text>
              </div>

              {/* description */}
              <div className="col-span-3 row-span-2 col-start-2 row-start-2">
                <p className="text-sm text-muted-foreground">
                  {sub.description}
                </p>
              </div>

              {/* bottom */}
              <div className="col-span-4 md:col-span-3 md:col-start-2 row-start-4 ">
                <Box
                  borderTop="1px solid"
                  borderColor="gray.300"
                  mb={"4"}
                ></Box>
                <div className="flex items-center justify-between">
                  {/* count */}
                  <div className="flex gap-4">
                    <span className="inline-flex justify-between items-center gap-1">
                      <RiCalendar2Line size={18} color="grey" />
                      <Text fontSize={15} color="grey">
                        {" "}
                        {sub.total_test} đề thi
                      </Text>
                    </span>
                    <span className="inline-flex justify-between items-center gap-1">
                      <RiUserFollowLine size={18} color="grey" />
                      <Text fontSize={15} color="grey">
                        {sub.total_completed} lượt thi
                      </Text>
                    </span>
                  </div>

                  {/* button */}
                  <Button
                    variant={"outline"}
                    colorScheme="cyan"
                    className="mt-2"
                    size={"sm"}
                  >
                    Xem chi tiết
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default ListCardCategory;
