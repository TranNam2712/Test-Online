import { Stack, Text, Box, Radio, RadioGroup, Flex } from "@chakra-ui/react";

interface Answer {
  id: number;
  answer_text: string;
  is_answer: boolean;
  question_id: number;
}

interface QuestionCardProps {
  index: number;
  questionText: string;
  answers: Answer[];
  onChange?: (answerId: number) => void;
}

export const QuestionCard = ({
  index,
  questionText,
  answers,
}: QuestionCardProps) => {
  const getLabel = (i: number) => String.fromCharCode(65 + i);

  return (
    <Box p={2} bg="white">
      <Stack spacing={2}>
        {/* Header */}
        <Text fontSize="xl">Câu hỏi {index}</Text>

        {/* Question */}
        <Text color="blue.600" fontWeight="md">
          {questionText}
        </Text>

        {/* devide top */}
        <Flex align="center" width={"full"}>
          <Box borderTop="1px solid" borderColor="gray.300" width={"4"}></Box>
          <Text
            px={1}
            fontSize="xs"
            color="gray.500"
            whiteSpace="nowrap"
            textAlign="center"
          >
            Câu trả lời
          </Text>
          <Box borderTop="1px solid" borderColor="gray.300" flex={1}></Box>
        </Flex>
        {/* Answers */}
        <RadioGroup name={`question-${index}`}>
          <Stack spacing={3} pl={1}>
            {answers.map((answer, i) => (
              <Radio key={answer.id} value={answer.id.toString()}>
                <Text>
                  {getLabel(i)}. {answer.answer_text}
                </Text>
              </Radio>
            ))}
            {/* Bottom Divider */}
          </Stack>
        </RadioGroup>
      </Stack>
      <Box borderTop="1px solid" borderColor="gray.300" flex={1} mt={5}></Box>
    </Box>
  );
};
