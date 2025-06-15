import {
  Box,
  Badge,
  Image,
  Text,
  Flex,
  HStack,
  AspectRatio,
} from "@chakra-ui/react";
import {
  RiContactsBook2Line,
  RiQuestionAnswerLine,
  RiTimeLine,
} from "@remixicon/react";
import { NavLink, useParams } from "react-router-dom";

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

const TestCard = ({ test }: { test: Test }) => {
  const { categorySlug, subCategorySlug } = useParams<{
    categorySlug: string;
    subCategorySlug: string;
  }>();
  return (
    <Box
      borderWidth="1px"
      mx={"auto"}
      borderRadius="2xl"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      w="full"
      position="relative"
    >
      {/* Ảnh minh họa với tỉ lệ 16:9 */}
      <AspectRatio ratio={16 / 9} w="full">
        <Box position="relative" w="full">
          <Image
            src={test.img}
            objectFit="cover"
            w="100%"
            h="100%"
            alt={test.name}
            borderTopRadius="lg"
          />
          {/* Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
            borderTopRadius="lg"
          />
          {/* Tag môn học */}
          <Badge
            position="absolute"
            top="0"
            left="0"
            bg="#153BAF"
            px={3}
            py={2}
            borderBottomRightRadius="2xl"
            zIndex="1"
          >
            <Text fontSize="xs" color="white">
              {test.description}
            </Text>
          </Badge>
        </Box>
      </AspectRatio>

      {/* Tiêu đề đề thi */}
      <Box p={4}>
        <NavLink to={`/${categorySlug}/${subCategorySlug}/${test.slug}`}>
          <Text
            fontSize="lg"
            cursor={"pointer"}
            noOfLines={2}
            _hover={{ color: "blue" }}
          >
            {test.name}
          </Text>
        </NavLink>
      </Box>

      <Box borderBottom="1px" borderColor="gray.200" mb={3}></Box>

      {/* Thông tin phụ */}
      <HStack justify="space-between" px={4} pb={4} spacing={4}>
        <Flex align="center" gap={1}>
          <RiTimeLine color="#153BAF" size={20} />
          <Text fontSize="sm" noOfLines={1}>
            Không tính giờ
          </Text>
        </Flex>
        <Flex align="center" gap={1}>
          <RiContactsBook2Line color="#153BAF" size={20} />
          <Text fontSize="sm" noOfLines={1}>
            {test.attend} lượt thi
          </Text>
        </Flex>
        <Flex align="center" gap={1}>
          <RiQuestionAnswerLine color="#153BAF" size={20} />
          <Text fontSize="sm" noOfLines={1}>
            {test.total_question} câu hỏi
          </Text>
        </Flex>
      </HStack>
    </Box>
  );
};

export default TestCard;
