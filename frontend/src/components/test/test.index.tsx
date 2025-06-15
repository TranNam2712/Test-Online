import { useParams } from "react-router-dom";
import Breadcrumb from "../UI/bread-crumb";
import InfoTest from "./info.test";
import { TestSettingCard } from "./test-setting.card";

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

const testData: Test = {
  id: 1,
  name: "Đề thi Hóa học THPT Quốc Gia 2025",
  slug: "de-thi-hoa-hoc-thptqg-2025",
  category: "Thi Thptqg",
  sub_category: "Hóa Học",
  description: "Đề thi thử môn Hóa học dành cho kỳ thi THPT Quốc gia.",
  image_thumbnail: "/images/tests/hoa-thumbnail.jpg",
  total_question: 10,
  total_completed: 1200,
  rating: 5,
  duration: "00:30:00",
  questions: [
    {
      id: 1,
      question:
        "Ở điều kiện thường, chất nào sau đây làm mất màu dung dịch Br2?",
      answers: [
        { id: 1, question_id: 1, answer_text: "Benzen", is_answer: false },
        { id: 2, question_id: 1, answer_text: "Etilen", is_answer: true },
        { id: 3, question_id: 1, answer_text: "Metan", is_answer: false },
        { id: 4, question_id: 1, answer_text: "Butan", is_answer: false },
      ],
    },
    {
      id: 2,
      question: "Chất nào sau đây là muối axit?",
      answers: [
        { id: 5, question_id: 2, answer_text: "KNO3", is_answer: false },
        { id: 6, question_id: 2, answer_text: "NaHSO4", is_answer: true },
        { id: 7, question_id: 2, answer_text: "NaCl", is_answer: false },
        { id: 8, question_id: 2, answer_text: "NazSO4", is_answer: false },
      ],
    },
    {
      id: 3,
      question:
        "Cho vài giọt phenolphtalein vào dung dịch NH3 thì dung dịch chuyển thành",
      answers: [
        { id: 9, question_id: 3, answer_text: "màu vàng", is_answer: false },
        { id: 10, question_id: 3, answer_text: "màu cam", is_answer: false },
        { id: 11, question_id: 3, answer_text: "màu hồng", is_answer: true },
        { id: 12, question_id: 3, answer_text: "màu xanh", is_answer: false },
      ],
    },
    {
      id: 4,
      question: "Chất nào sau đây không tác dụng với dung dịch NaOH?",
      answers: [
        { id: 13, question_id: 4, answer_text: "FeCl2", is_answer: false },
        { id: 14, question_id: 4, answer_text: "CuSO4", is_answer: false },
        { id: 15, question_id: 4, answer_text: "MgCl2", is_answer: false },
        { id: 16, question_id: 4, answer_text: "KNO3", is_answer: true },
      ],
    },
    {
      id: 5,
      question: "Trùng hợp etilen thu được polime có tên gọi là",
      answers: [
        { id: 17, question_id: 5, answer_text: "polietilen", is_answer: true },
        { id: 18, question_id: 5, answer_text: "polistiren", is_answer: false },
        {
          id: 19,
          question_id: 5,
          answer_text: "polipropilen",
          is_answer: false,
        },
        {
          id: 20,
          question_id: 5,
          answer_text: "poli(vinyl clorua)",
          is_answer: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Khi nhựa PVC cháy sinh ra nhiều khí độc, trong đó có khí X. Biết khí X tác dụng với dung dịch AgNO3, thu được kết tủa trắng. Công thức của khí X là",
      answers: [
        { id: 21, question_id: 6, answer_text: "C2H4", is_answer: false },
        { id: 22, question_id: 6, answer_text: "HCl", is_answer: true },
        { id: 23, question_id: 6, answer_text: "CO", is_answer: false },
        { id: 24, question_id: 6, answer_text: "CH4", is_answer: false },
      ],
    },
    {
      id: 7,
      question:
        "Glucozo là một loại monosaccarit có nhiều trong quả nho chín. Công thức phân tử của glucozo là",
      answers: [
        { id: 25, question_id: 7, answer_text: "C2H4O2", is_answer: false },
        { id: 26, question_id: 7, answer_text: "(C6H10O5)n", is_answer: false },
        { id: 27, question_id: 7, answer_text: "C12H22O11", is_answer: false },
        { id: 28, question_id: 7, answer_text: "C6H12O6", is_answer: true },
      ],
    },
    {
      id: 8,
      question: "Ở nhiệt độ thường, kim loại Fe phản ứng được với dung dịch",
      answers: [
        { id: 29, question_id: 8, answer_text: "FeCl2", is_answer: false },
        { id: 30, question_id: 8, answer_text: "NaCl", is_answer: false },
        { id: 31, question_id: 8, answer_text: "MgCl2", is_answer: false },
        { id: 32, question_id: 8, answer_text: "CuCl2", is_answer: true },
      ],
    },
    {
      id: 9,
      question: "Kim loại nào sau đây có tính dẫn điện tốt nhất?",
      answers: [
        { id: 33, question_id: 9, answer_text: "Cu", is_answer: false },
        { id: 34, question_id: 9, answer_text: "Ag", is_answer: true },
        { id: 35, question_id: 9, answer_text: "Br", is_answer: false },
        { id: 36, question_id: 9, answer_text: "Al", is_answer: false },
      ],
    },
    {
      id: 10,
      question: "Chất nào sau đây thuộc loại ancol no, đơn chức, mạch hở?",
      answers: [
        { id: 37, question_id: 10, answer_text: "C2H5-OH", is_answer: true },
        { id: 38, question_id: 10, answer_text: "HCHO", is_answer: false },
        { id: 39, question_id: 10, answer_text: "C2H4(OH)2", is_answer: false },
        {
          id: 40,
          question_id: 10,
          answer_text: "CH2=CH-CH2-OH",
          is_answer: false,
        },
      ],
    },
  ],
};

const Test = () => {
  const { categorySlug, subCategorySlug } = useParams<{
    categorySlug: string;
    subCategorySlug: string;
  }>();
  return (
    <>
      <Breadcrumb
        items={[
          { title: testData.category, slug: categorySlug },
          { title: testData.sub_category, slug: subCategorySlug },
          {
            title: testData.name,
          },
        ]}
      />
      <div className="w-ful md:bg-white py-2 px-5 my-5 flex justify-between md:justify-around items-center">
        {/* main content */}
        <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between ">
          {/* info test */}
          <div className="w-full md:w-27/40">
            <InfoTest test={testData} />
          </div>
          {/* setting and do test */}
          <div className="w-full md:w-12/40">
            <TestSettingCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
