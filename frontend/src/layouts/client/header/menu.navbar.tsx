import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SubCategory {
  title: string;
  slug: string;
}

interface Category {
  title: string;
  slug: string;
  subcategories: SubCategory[];
}

interface Menu {
  categories: Category[];
}

const MenuNavbar = ({ categories }: Menu) => {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  return (
    <nav className="w-full hidden md:flex justify-center  ">
      <div className="relative inline-block">
        {/* Main Menu */}
        <ul className="flex justify-around items-center gap-10 bg-white z-10 relative">
          {categories.map((category) => (
            <li
              key={category.slug}
              className="cursor-pointer flex"
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <NavLink
                to={`/${category.slug}`}
                className={({ isActive }) =>
                  `group relative transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-gray-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <Text
                    className={`
 uppercase relative text-xs lg:text-base
        after:content-[''] after:absolute after:bottom-0 after:left-1/2
        after:translate-x-[-50%] after:h-[2px] after:bg-blue-600
        after:transition-all after:duration-300 after:ease-in-out
        ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}
      `}
                  >
                    {category.title}
                  </Text>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Dropdown */}
        {hoveredCategory && hoveredCategory.subcategories.length > 0 && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-lg p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-all z-50 rounded-2xl"
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {hoveredCategory.subcategories.map((sub) => (
              <NavLink
                key={sub.slug}
                to={`/${hoveredCategory.slug}/${sub.slug}`}
                className="pb-1"
              >
                <Text className="text-xs lg:text-sm text-gray-800 hover:text-blue-600">
                  {sub.title}
                </Text>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuNavbar;
