import { Button, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Future = () => {
  const items = [
    {
      image: "dinhhuong1.jpg",
      title: "Đại học",
      description:
        "Ngân hàng câu hỏi trắc nghiệm online đầy đủ các môn học đại cương, môn học chuyên ngành giúp các bạn Sinh viên ôn thi kết thúc học phần/tín chỉ ở trường ĐH-CĐ đạt kết quả tốt.",
    },
    {
      image: "dinhhuong2.jpg",
      title: "Hướng nghiệp",
      description:
        "Hệ thống ngân hàng câu hỏi và các bài thi trắc nghiệm về nghề nghiệp như ôn thi bằng lái xe, trắc nghiệm công viên chức, trắc nghiệm tính cách, MBTI Test, IQ/EQ Test.",
    },
  ];

  return (
    <section
      className="bg-cover mt-10 bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('invision-bg.jpg')" }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={12}>
          ĐỊNH HƯỚNG TƯƠNG LAI
        </Heading>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {items.map((item, index) => (
            <NavLink to={"/"}>
              <div
                key={index}
                className="bg-white text-gray-900 rounded-xl shadow-lg w-full max-w-md h-[500px] flex flex-col overflow-hidden"
              >
                {/* Top half: Image */}
                <div className="h-4/7 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-60 h-50 object-contain"
                  />
                </div>

                {/* Bottom half: Text + Button */}
                <div className="h-3/7 px-6 flex flex-col justify-around items-center text-center">
                  <Heading className="mb-2">{item.title}</Heading>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <Button colorScheme="yellow" variant="outline">
                    Làm ngay
                  </Button>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Future;
