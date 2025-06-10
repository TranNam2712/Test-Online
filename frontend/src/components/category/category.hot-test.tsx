import { Box, Card, CardBody, Text } from "@chakra-ui/react";

interface Item {
  slug: string;
  title: string;
  from: string;
  questions: number;
  views: number;
}

const HotTestCard = ({ listItems }: { listItems: Item[] }) => {
  return (
    <Card>
      {/* title */}
      <div className="bg-blue-700 rounded items-center py-3">
        <Text fontSize={"2xl"} className="text-center text-white">
          Đề Thi Nổi Bật
        </Text>
      </div>
      <CardBody>
        <div className="overflow-y-scroll">
          {listItems.map((item) => (
            <div className="flex flex-col gap-1 p-2">
              <Text>{item.title}</Text>
              <Text>{item.from}</Text>
              <div className="flex gap-5 mb-2">
                <Text color={"gray"} fontSize={"xs"}>
                  {item.questions} câu
                </Text>
                <Text color={"gray"} fontSize={"xs"}>
                  {item.views} lượt thi
                </Text>
              </div>
              <Box borderTop="1px solid" borderColor="gray.300"></Box>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default HotTestCard;
