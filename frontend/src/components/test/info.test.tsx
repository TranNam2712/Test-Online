import { Card, Text } from "@chakra-ui/react";
import {
  RiContactsBook2Line,
  RiQuestionAnswerLine,
  RiTimeLine,
} from "@remixicon/react";
import { QuestionCard } from "../card/question.card";
interface Answer {
  id: number;
  answer_text: string;
  is_answer: boolean;
  question_id: number;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

interface Test {
  id: number;
  name: string;
  slug: string;
  category: string;
  sub_category: string;
  description: string;
  image_thumbnail: string;
  total_question: number;
  total_completed: number;
  rating: number;
  duration: string;
  questions: Question[];
}
const InfoTest = ({ test }: { test: Test }) => {
  return (
    <>
      <Card
        variant={"outline"}
        shadow={"base"}
        className="w-full rounded-xl border p-5 shadow-sm bg-white"
      >
        <Text fontSize={"2xl"}>{test.name}</Text>
        <Text fontSize={"lg"} className="text-gray-600 text-sm mt-1">
          {test.description}
        </Text>

        <div className="flex items-center justify-between bg-gray-200 p-5 rounded-md my-5 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <div className="hidden md:block">
              <RiQuestionAnswerLine className="text-gray-700" />
            </div>
            <Text fontSize="sm" noOfLines={1}>
              {test.total_question} câu
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <div className="hidden md:block">
              <RiTimeLine className="text-gray-700" />
            </div>
            <Text fontSize="sm" noOfLines={1}>
              {test.duration} phút
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <div className="hidden md:block">
              <RiContactsBook2Line className="text-gray-700" />
            </div>
            <Text fontSize="sm" noOfLines={1}>
              {test.total_completed.toLocaleString()} lượt thi
            </Text>
          </div>
        </div>

        {test.questions.map((ques) => (
          <QuestionCard
            answers={ques.answers}
            index={ques.id}
            questionText={ques.question}
          />
        ))}
      </Card>
    </>
  );
};

export default InfoTest;
