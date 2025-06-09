import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

interface Props {
  current: string;
}

const Breadcrumb = ({ current }: Props) => (
  <div className="w-full bg-blue-700">
    <div className="hidden w-full max-w-screen-xl mx-auto items-center md:block py-3 ">
      <div className="text-white text-sm ml-1">
        <NavLink to={"/"} className={"hover:underline"}>
          <Link>Trang chủ </Link>
        </NavLink>
        <span className="mx-1">/</span>
        <span>{current}</span>
      </div>
    </div>
  </div>
);

export default Breadcrumb;
