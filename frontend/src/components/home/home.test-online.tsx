import { Button, Heading, Text } from "@chakra-ui/react";

const TestOnline = () => {
  return (
    <>
      {/* Heading chính */}
      <div className="w-full my-8 text-center">
        <Heading className="uppercase font-mono">Trắc nghiệm online 1</Heading>
        <Text className="text-xl font-bold">
          Đa dạng - Thông minh - Chính xác
        </Text>
      </div>

      {/* Danh sách Card */}
      <div className="w-full flex justify-center flex-wrap gap-6 p-0 md:p-8  text-center">
        {/* card */}
        {[
          {
            title: "ĐỀ THI HỌC KỲ",
            img: "typeTest2.jpg",
            desc: "Ngân hàng câu hỏi đầy đủ các môn cấp 1,2,3 được trộn tạo đề theo cấu trúc phân loại giúp các em dễ dàng ôn tập online đề thi giữa học kỳ, thi học kỳ theo các chủ đề đã học.",
          },
          {
            title: "ĐỀ THI THPT QG",
            img: "typeTest1.jpg",
            desc: "Tổng hợp đề thi trắc nghiệm online THPT QG của các môn Toán, Tiếng Anh, Vật lý, Hóa học, Sinh học, Địa lý, Lịch sử, GDCD kèm đáp án và lời giải chi tiết.",
          },
          {
            title: "ĐỀ KIỂM TRA",
            img: "typeTest3.jpg",
            desc: "Hệ thống bài kiểm tra 1 tiết, kiểm tra 15 phút được thiết kế theo hình thức trắc nghiệm online giúp học sinh có thể tạo ra đề tự luyện tập và chấm điểm trực tuyến.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group h-[440px] w-8/10 md:w-4/13 lg:w-1/5 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Top highlight bar */}
            <div className="w-full h-2 bg-transparent group-hover:bg-amber-400 transition-all duration-300" />

            {/* Nội dung Card */}
            <div className="flex flex-col justify-around items-center gap-4 h-full px-4 py-6 text-center">
              {/* Ảnh */}
              <div className="h-28 flex items-center justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Tiêu đề */}
              <Heading size={"md"} className="uppercase">
                {item.title}
              </Heading>

              {/* Mô tả */}
              <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>

              {/* Nút */}
              <Button variant={"outline"} colorScheme="yellow">
                Làm ngay
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Testing English */}
      <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 mt-5">
          {/* Left Content */}
          <div
            className="w-full flex flex-col
           md:w-1/2 items-center gap-4 md:items-start mb-4 md:mb-0 px-5"
          >
            <Heading className="uppercase pt-3">Trắc nghiệm Tiếng Anh</Heading>
            <p className="text-sm text-gray-600  flex-grow">
              Tổng hợp hàng ngàn câu trắc nghiệm Tiếng Anh Online và các đề thi
              chứng chỉ quốc tế TOEIC, TOEFL, IELTS giúp các bạn ôn luyện và đạt
              điểm tốt trong các kỳ thi Tiếng Anh.
            </p>
            <Button variant={"outline"} colorScheme="yellow" className="w-30">
              Làm ngay
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="testEnglish.jpg"
              alt="Trắc nghiệm Tiếng Anh"
              className="w-full object-cover "
            />
          </div>
        </div>
      </div>

      {/* Testing IT */}
      <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 mt-5">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="testIT.webp"
              alt="Trắc nghiệm IT"
              className="w-full object-cover "
            />
          </div>

          {/* Right Content */}
          <div
            className="w-full flex flex-col
           md:w-1/2 items-center gap-4 md:items-start mb-4 md:mb-0 px-5"
          >
            <Heading className="uppercase">Trắc nghiệm IT</Heading>
            <p className="text-sm text-gray-600  flex-grow">
              Hệ thống các bài trắc nghiệm online về tin học văn phòng, tin học
              cơ bản, lập trình, quản trị hệ thống, chứng chỉ quốc tế giúp các
              bạn ôn luyện và thi các chứng chỉ về CNTT.
            </p>
            <Button variant={"outline"} colorScheme="yellow" className="w-30">
              Làm ngay
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestOnline;
