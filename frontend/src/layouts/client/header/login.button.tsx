import { Button, Text } from "@chakra-ui/react";
import { RiAccountCircleLine } from "@remixicon/react";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
      <NavLink to={"/login"}>
        <Button
          colorScheme="blue"
          className="w-15 lg:w-30 flex justify-around items-center gap-1"
        >
          <Text className="text-xs lg:text-sm hidden md:block">Login</Text>
          <RiAccountCircleLine size={20} color="white" />
        </Button>
      </NavLink>
    </>
  );
};

export default LoginButton;
