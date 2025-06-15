import { NavLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

interface BreadcrumbItem {
  title: string;
  slug?: string; // nếu không truyền, component sẽ auto sinh
}

interface Props {
  items?: BreadcrumbItem[];
}

const Breadcrumb = ({ items = [] }: Props) => {
  const fullItems: BreadcrumbItem[] = [
    { title: "Trang chủ", slug: "/" },
    ...items,
  ];

  let accumulatedPath = "";

  return (
    <nav aria-label="Breadcrumb">
      <div className="w-full bg-blue-700">
        <div className="hidden w-full max-w-screen-xl mx-auto items-center md:flex py-3">
          <ol className="flex text-white text-sm ml-1">
            {fullItems.map((item, index) => {
              const isLast = index === fullItems.length - 1;

              // Cập nhật accumulatedPath
              if (index > 0) {
                accumulatedPath += `/${
                  item.slug?.replace(/^\//, "") ??
                  item.title.toLowerCase().replace(/\s+/g, "-")
                }`;
              }

              const to = index === 0 ? "/" : accumulatedPath;

              return (
                <li key={index} className="flex items-center">
                  {!isLast ? (
                    <NavLink to={to} className="hover:underline">
                      <ChakraLink color="white">{item.title}</ChakraLink>
                    </NavLink>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  {!isLast && <span className="mx-2">/</span>}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
