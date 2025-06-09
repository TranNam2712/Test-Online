import { Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

interface FooterSection {
  title: string;
  items: string[];
}

const footerData: FooterSection[] = [
  {
    title: "THI THPT QG",
    items: ["Môn Toán–Văn–Anh", "Môn Lý–Hoá–Sinh", "Môn Sử–Địa–GDCD"],
  },
  {
    title: "ĐỀ KIỂM TRA",
    items: ["Đề thi HK1, HK2", "Kiểm tra 1 tiết", "Kiểm tra 15 phút"],
  },
  {
    title: "ENGLISH TEST",
    items: ["Ngữ pháp tiếng Anh", "Từ vựng Tiếng Anh", "Tiếng Anh THPT QG"],
  },
  {
    title: "IT TEST",
    items: ["Tin học văn phòng", "Lập trình Web/App", "Quản trị hệ thống"],
  },
  {
    title: "ĐẠI HỌC",
    items: ["Môn đại cương", "Chuyên ngành Kinh tế", "Chuyên ngành Kỹ thuật"],
  },
  {
    title: "HƯỚNG NGHIỆP",
    items: ["Bằng lái xe máy/môtô", "Thi Công/Viên chức", "Bằng lái xe Ô tô"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C3EDD] text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto items-center">
        {/* Logo */}
        <div className="flex justify-center items-center mb-10">
          <NavLink to={"/"}>
            <img
              src="/logo2.png"
              alt="TRAC NGHIEM"
              className="h-8 w-50 mx-auto"
            />
          </NavLink>
        </div>
        <div className="h-px bg-white/30 my-6" />

        {/* Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-10 text-sm mx-auto">
          {footerData.map((section, idx) => (
            <div key={idx}>
              <Text className="text-yellow-400 font-semibold pb-3 uppercase tracking-wider">
                {section.title}
              </Text>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-yellow-200 transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/30 my-6" />

        {/* Contact Info */}
        <div className="text-center text-sm space-y-2 text-gray-950">
          <p>
            <strong className="font-medium ">
              Chịu trách nhiệm nội dung:{" "}
            </strong>
            Đại Học Sài Gòn - Giám đốc Công ty TNHH TÀI LIỆU TRỰC TUYẾN VI NA
          </p>
          <p>
            <strong className="font-medium ">Liên hệ:</strong> P402, 273 An
            Dương Vương, Phường 3, Quận 5, Tp. Hồ Chí Minh
          </p>
          <p>Hotline: 093 303 0098 | Email: support@tailieu.vn</p>
          <p className="text-xs ">
            © 2022 Tracnghiem.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
