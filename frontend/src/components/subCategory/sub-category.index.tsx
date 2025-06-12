// import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CategoryStatus } from "../../types/category.type";
import FilterCard from "../card/filter.card";
import Breadcrumb from "../UI/bread-crumb";
import ListTest from "./list-test";
import { useRef } from "react";
import { RiEqualizerLine } from "@remixicon/react";
import Pagination from "../UI/pagination";

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

interface Test {
  id: number;
  name: string;
  img: string;
  description: string;
  time: number;
  attend: number;
  total_question: number;
}

const tests: Test[] = [
  {
    id: 1,
    name: "Đề thi Trắc nghiệm THPT Quốc Gia Môn Toán học Năm 2019 - Mã đề thi 101",
    img: "/images/subCategory/mon-toan.jpg",
    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 228,
    total_question: 50,
  },
  {
    id: 2,
    name: "Đề thi THPT Quốc Gia Môn Toán học Năm 2017 - Mã đề thi 101",
    img: "/images/subCategory/mon-toan.jpg",

    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 21,
    total_question: 50,
  },
  {
    id: 3,
    name: "Đề thi THPT Quốc Gia Môn Toán học Năm 2020 - Mã đề thi 102",
    img: "/images/subCategory/mon-toan.jpg",

    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 134,
    total_question: 50,
  },
  {
    id: 4,
    name: "Đề thi THPT Quốc Gia Môn Toán học Năm 2018 - Mã đề thi 103",
    img: "/images/subCategory/mon-toan.jpg",

    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 87,
    total_question: 50,
  },
  {
    id: 5,
    name: "Đề thi Thử THPT Quốc Gia Môn Toán học Trường A - Mã đề thi 104",
    img: "/images/subCategory/mon-toan.jpg",

    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 56,
    total_question: 50,
  },
  {
    id: 6,
    name: "Đề thi Thử THPT Quốc Gia Môn Toán học Trường B - Mã đề thi 105",
    img: "/images/subCategory/mon-toan.jpg",

    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 99,
    total_question: 50,
  },
  {
    id: 7,
    name: "Đề thi THPT Quốc Gia Môn Toán học Năm 2021 - Mã đề thi 106",
    img: "/images/subCategory/mon-toan.jpg",

    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 301,
    total_question: 50,
  },
  {
    id: 8,
    name: "Đề thi THPT Quốc Gia Môn Toán học Năm 2022 - Mã đề thi 107",
    img: "/images/subCategory/mon-toan.jpg",

    description: "Môn Toán - Nâng cao",
    time: 0,
    attend: 175,
    total_question: 50,
  },
];

const SubCategory = () => {
  //   const { categorySlug } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;

  return (
    <>
      <Breadcrumb current={category.name} />
      <div className="w-full md:bg-white py-2 px-4 my-5 flex justify-between md:justify-around items-center">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-between items-center">
          {/* main */}
          <div className="w-full flex justify-between mt-5">
            {isMobile ? (
              <>
                {/* drawer in mobile */}
                <Drawer
                  size={"sm"}
                  isOpen={isOpen}
                  placement="left"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      {/* filter card */}
                      <FilterCard onCloseDrawer={onClose} />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>

                {/* Fixed Button Mobile */}
                <Box position="fixed" bottom="0" left="0" right="0" zIndex="10">
                  <Button
                    ref={btnRef}
                    onClick={onOpen}
                    leftIcon={<RiEqualizerLine />}
                    colorScheme="teal"
                    width="100%"
                  >
                    Bộ lọc
                  </Button>
                </Box>
              </>
            ) : (
              <div className="w-6/20 lg:w-9/40">
                {/* filter card in desktop */}
                <FilterCard />
              </div>
            )}

            {/* main content */}
            <div className="w-full md:w-13/20 lg:w-30/40">
              <ListTest listTest={tests} />

              {/* pagination */}
              <div className="w-2/3 flex items-center justify-center p-5 mx-auto">
                <Pagination totalPages={10} setCurrentPage={() => 1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategory;
