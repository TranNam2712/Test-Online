import { Card, CardBody, Select, Text } from "@chakra-ui/react";
import TestCard from "../card/test.card";

interface Test {
  id: number;
  name: string;
  slug: string;
  img: string;
  description: string;
  time: number;
  attend: number;
  total_question: number;
}

const ListTest = ({ listTest }: { listTest: Test[] }) => {
  return (
    <>
      {/* sort card */}
      <Card variant={"outline"} shadow={"base"}>
        <CardBody py={2} px={5} className="flex items-center justify-between">
          <div className="flex gap-1">
            <Text fontWeight={"bold"}>{listTest.length}</Text>
            <Text>kết quả</Text>
          </div>
          <div className="flex items-center gap-2">
            <Text className="hidden md:block">Sắp xếp:</Text>
            <Select
              maxW="170px"
              bg="white"
              borderColor="gray.300"
              borderRadius="md"
            >
              <option value="newest">Mới nhất</option>
              <option value="highest-rated">Đánh giá cao nhất</option>
            </Select>
          </div>
        </CardBody>
      </Card>

      {/* list test */}
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(310px,1fr))] mt-5">
        {listTest.map((test) => (
          <TestCard test={test} key={test.id} />
        ))}
      </div>
    </>
  );
};

export default ListTest;
