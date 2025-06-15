import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const TestSettingCard = () => {
  const [questionCount, setQuestionCount] = useState(40);
  const [duration, setDuration] = useState(50);
  const [timed, setTimed] = useState(true);
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleAnswers, setShuffleAnswers] = useState(true);
  const [showDuringTest, setShowDuringTest] = useState(false);
  const [showAfterTest, setShowAfterTest] = useState(true);

  return (
    <Box
      bg="white"
      rounded="md"
      p={4}
      mb={5}
      boxShadow="md"
      border="1px solid #e2e8f0"
    >
      <Button colorScheme="green" w="full" size="lg" mb={3}>
        BẮT ĐẦU LÀM BÀI
      </Button>

      <Text mb={4} fontSize="sm" color="gray.600">
        Chọn các cài đặt để điều chỉnh đề thi
      </Text>

      <Accordion allowMultiple defaultIndex={[0, 1, 2]}>
        {/* Cài đặt đề thi */}
        <AccordionItem border="none">
          <AccordionButton p={0} _hover={{ bg: "none" }}>
            <Box flex="1" textAlign="left">
              <Text fontSize={"xl"}>Cài đặt đề thi</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pt={2} px={0}>
            <Flex justify={"space-between"}>
              <Checkbox defaultChecked>Câu hỏi khác</Checkbox>
              <Flex align={"center"} justify={"center"}>
                <Input
                  type="number"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  w="50px"
                  mr={2}
                  size="sm"
                />
                <Text>/40</Text>
              </Flex>
            </Flex>
          </AccordionPanel>
          <Divider my={3} />
        </AccordionItem>

        {/* Thời gian làm bài */}
        <AccordionItem border="none">
          <AccordionButton p={0} _hover={{ bg: "none" }}>
            <Box flex="1" textAlign="left">
              <Text fontSize={"xl"}>Thời gian làm bài</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pt={4} px={0}>
            <RadioGroup
              value={timed ? "yes" : "no"}
              onChange={(val) => setTimed(val === "yes")}
            >
              <Stack spacing={3}>
                <Radio value="no">Không tính giờ</Radio>
                <Flex justify={"space-between"}>
                  <Radio value="yes">Tính giờ</Radio>
                  <Flex justify={"center"} alignItems={"center"}>
                    <Input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      w="50px"
                      mr={3}
                      size="sm"
                    />
                    <Text>phút</Text>
                  </Flex>
                </Flex>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
          <Divider my={3} />
        </AccordionItem>

        {/* Cài đặt khác */}
        <AccordionItem border="none">
          <AccordionButton p={0} _hover={{ bg: "none" }}>
            <Box flex="1" textAlign="left">
              <Text fontSize={"xl"}>Cài đặt khác</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pt={4} px={0}>
            <Stack spacing={3}>
              <Checkbox
                isChecked={shuffleQuestions}
                onChange={(e) => setShuffleQuestions(e.target.checked)}
              >
                Xáo trộn câu hỏi
              </Checkbox>
              <Checkbox
                isChecked={shuffleAnswers}
                onChange={(e) => setShuffleAnswers(e.target.checked)}
              >
                Xáo trộn đáp án
              </Checkbox>
              <Checkbox
                isChecked={showDuringTest}
                onChange={(e) => setShowDuringTest(e.target.checked)}
              >
                Xem kết quả trong khi làm bài
              </Checkbox>
              <Checkbox
                isChecked={showAfterTest}
                onChange={(e) => setShowAfterTest(e.target.checked)}
              >
                Xem kết quả sau khi làm bài
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
