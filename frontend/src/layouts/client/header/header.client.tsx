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
      slug: "/thi-thptqg",
      subcategories: [
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
      ],
    },
    {
      title: "THI THPTQG",
      slug: "/thi-thptq",
      subcategories: [
        { title: "THI THPTQG MON Ly", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
      ],
    },
    {
      title: "THI THPTQG",
      slug: "/thi-thptq",
      subcategories: [
        { title: "THI THPTQG MON Hoa", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
      ],
    },
    {
      title: "THI THPTQG",
      slug: "/thi-thptq",
      subcategories: [
        { title: "THI THPTQG MON Sinh", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
      ],
    },
    {
      title: "THI THPTQG",
      slug: "/thi-thptq",
      subcategories: [
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
      ],
    },
    {
      title: "THI THPTQG",
      slug: "/thi-thptq",
      subcategories: [
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
      ],
    },
    {
      title: "THI THPTQG",
      slug: "/thi-thptq",
      subcategories: [
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
        { title: "THI THPTQG MON TOAN", slug: "/thptqg-toan" },
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
    <nav className="w-full bg-blue-700 md:bg-white py-2 px-2 md:py-4 flex justify-between md:justify-around items-center">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
        {/* toggle button */}
        <MenuToggle categories={menu.categories} />
        {/* logo */}
        <div className="w-50 pr-3">
          <NavLink to="/">
            <img
              className="w-50 md:w-full"
              src={isMd ? "logo.png" : "logo2.png"}
              alt="Logo"
            />
          </NavLink>
        </div>
        {/* categories */}
        <MenuNavbar categories={menu.categories} />
        {/* login */}
        <LoginButton />
      </div>
    </nav>
  );
};

export default Header;
