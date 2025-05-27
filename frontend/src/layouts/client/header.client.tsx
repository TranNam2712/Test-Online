import { Button } from "@chakra-ui/react";
import { RiHeartFill } from "@remixicon/react";
import { toast } from "react-toastify";

const Header = () => {
  const test = () => {
    toast("Wow so easy!");
  };

  return (
    <div>
      header
      <Button colorScheme="cyan" onClick={test}>
        test
      </Button>
      <RiHeartFill
        size={36} // set custom `width` and `height`
        color="red" // set `fill` color
        className="my-icon" // add custom class name
      />
    </div>
  );
};

export default Header;
