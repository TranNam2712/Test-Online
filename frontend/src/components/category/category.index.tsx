// import { useParams } from "react-router-dom";
import { CategoryStatus } from "../../types/category.type";
import Breadcrumb from "../UI/bread-crumb";
import { Text } from "@chakra-ui/react";
import ListCardCategory from "./category.list-card";
import HotTestCard from "./category.hot-test";

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
  id: number;
  name: string;
  slug: string;
  description?: string;
  is_parent?: boolean;
  status?: CategoryStatus;
  subCategories: SubCategory[];
}
const category: Category = {
  id: 1,
  slug: "thptqg",
  name: "Thi Thptqg",
  description: "Đề Thi Trắc Nghiệm THPT Quốc Gia 2023",
  is_parent: true,
  status: CategoryStatus.ACTIVE,
  subCategories: [
    {
      id: 1,
      slug: "toan",
      name: "Đề thi THPT QG môn Toán",
      description:
        "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
      image_thumbnail: "images/category/thptqg/toan-hoc.png",
      total_test: 836,
      total_completed: 91949,
    },
    {
      id: 2,
      slug: "vat-ly",
      name: "Đề thi THPT QG môn Vật Lý",
      description:
        "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật Lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật Lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
      image_thumbnail: "images/category/thptqg/vat-ly.png",
      total_test: 705,
      total_completed: 47454,
    },
    {
      id: 3,
      slug: "hoa-hoc",
      name: "Đề thi THPT QG môn Hóa Học",
      description:
        "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Hóa Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Hóa Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
      image_thumbnail: "images/category/thptqg/hoa-hoc.png",
      total_test: 612,
      total_completed: 32010,
    },
  ],
};

const highlights = [
  {
    slug: "",
    title: "Đề thi minh họa tốt nghiệp THPT năm 2022 môn GDCD",
    from: "Bộ Giáo Dục Và Đào Tạo",
    questions: 40,
    views: 299,
  },
  {
    slug: "",
    title: "Đề minh họa kì thi tốt nghiệp THPT năm 2022 môn Sinh Học",
    from: "Bộ Giáo Dục Và Đào Tạo",
    questions: 40,
    views: 125,
  },
  {
    slug: "",
    title: "Đề thi minh họa tốt nghiệp THPT năm 2022 môn Toán",
    from: "Bộ Giáo Dục Và Đào Tạo",
    questions: 50,
    views: 605,
  },
];

const Category = () => {
  //   const { categorySlug } = useParams();

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: category.name,
            slug: category.slug,
          },
        ]}
      />
      <div className="w-full md:bg-white py-2 px-2 my-5 flex justify-between md:justify-around items-center">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-between items-center">
          {/* title */}
          <Text fontSize={"2xl"} className="hidden md:block w-full mb-5">
            {category.description}
          </Text>

          {/* main content */}
          <div className="w-full flex justify-between mt-5">
            {/* list card */}
            <div className="w-full lg:w-6/10">
              <ListCardCategory subCategories={category.subCategories} />
            </div>

            {/* hot test card */}
            <div className="hidden lg:block w-3/10">
              <HotTestCard listItems={highlights} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
