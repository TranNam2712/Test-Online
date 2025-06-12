import LoginButton from "./login.button";
import { NavLink } from "react-router-dom";
import MenuNavbar from "./menu.navbar";
import MenuToggle from "./menu.toggle";
import { useEffect, useState } from "react";

interface subCategory {
  title: string;
  slug: string;
}

interface category {
  title: string;
  slug: string;
  subcategories: subCategory[];
}

interface menu {
  categories: category[];
}
const menu: menu = {
  categories: [
    {
      title: "THI THPTQG",
      slug: "thi-thptqg",
      subcategories: [
        { title: "THI THPTQG MON TOAN", slug: "toan-hoc" },
        { title: "THI THPTQG MON Ly", slug: "vat-ly" },
        { title: "THI THPTQG MON Hoa", slug: "hoa-hoc" },
        { title: "THI THPTQG MON Van", slug: "ngu-van" },
        { title: "THI THPTQG MON Tieng Anh", slug: "tieng-anh" },
      ],
    },
    {
      title: "Đề thi kiểm tra",
      slug: "de-kiem-tra",
      subcategories: [
        { title: "Trắc nghiệm toán 12", slug: "toan-hoc-lop-12" },
        { title: "Trắc nghiệm vật lý 12", slug: "vat-ly-lop-12" },
        { title: "Trắc nghiệm hóa học 12", slug: "hoa-hoc-lop-12" },
        { title: "Trắc nghiệm sinh học 12", slug: "sinh-hoc-lop-12" },
        { title: "Trắc nghiệm tiếng anh 12", slug: "tieng-anh-lop-12" },
        { title: "Trắc nghiệm toán 11", slug: "toan-hoc-lop-11" },
        { title: "Trắc nghiệm vật lý 11", slug: "vat-ly-lop-11" },
        { title: "Trắc nghiệm hóa học 11", slug: "hoa-hoc-lop-11" },
        { title: "Trắc nghiệm sinh học 11", slug: "sinh-hoc-lop-11" },
        { title: "Trắc nghiệm tiếng anh 11", slug: "tieng-anh-lop-11" },
      ],
    },
    {
      title: "English Test",
      slug: "tieng-anh",
      subcategories: [
        { title: "Từ vựng tiếng anh", slug: "tu-vung-tieng-anh" },
        { title: "Ngữ pháp tiếng anh", slug: "ngu-phap-tieng-anh" },
        { title: "Toeic", slug: "toeic" },
      ],
    },
    {
      title: "It Test",
      slug: "cntt",
      subcategories: [
        { title: "Tin học văn phòng", slug: "van-phong" },
        { title: "Lập trình", slug: "lap-trinh" },
        { title: "Quản trị hệ thống", slug: "quan-tri-he-thong" },
      ],
    },
    {
      title: "Đại học",
      slug: "dai-hoc",
      subcategories: [
        { title: "Các môn Đại cương", slug: "cac-mon-dai-cuong" },
        { title: "Quản trị - Marketing", slug: "quan-tri-marketing" },
        { title: "Kinh tế - Thương mại ", slug: "kinh-te-thuong-mai" },
        { title: "Tài chính - Ngân hàng", slug: "tai-chinh-ngan-hang" },
        { title: "Kế toán - Kiểm toán", slug: "ke-toan-kiem-toan" },
        { title: "Khoa học - Kỹ thuật", slug: "khoa-hoc-ky-thuat" },
        { title: "Xã hội nhân văn", slug: "xa-hoi-nhan-van" },
        { title: "Luật - Môn khác ", slug: "luat-mon-khac" },
      ],
    },
    {
      title: "Hướng nghiệp",
      slug: "huong-nghiep",
      subcategories: [
        { title: "Trắc nghiệm bằng lái ", slug: "trac-nghiem-bang-lai" },
        { title: "Trắc nghiệm công chức", slug: "trac-nghiem-cong-chuc" },
        { title: "Trắc nghiệm MBTI", slug: "trac-nghiem-mbti" },
        { title: "Trắc nghiệm HOLLAND ", slug: "trac-nghiem-holland" },
      ],
    },
  ],
};

const Header = () => {
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-blue-700 md:bg-white py-2 px-2 flex justify-between md:justify-around items-center">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
        {/* toggle button */}
        <MenuToggle categories={menu.categories} />
        {/* logo */}
        <div className="w-50">
          <NavLink to="/">
            <img
              className="w-50 md:w-full"
              src={isMd ? "/logo.png" : "/logo2.png"}
              alt="Logo"
            />
          </NavLink>
        </div>
        {/* categories */}
        <MenuNavbar categories={menu.categories} />
        {/* login */}
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
