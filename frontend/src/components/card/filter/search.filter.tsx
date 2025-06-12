import { Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { RiSearchEyeLine } from "@remixicon/react";

const SearchFilter = () => {
  return (
    <>
      {" "}
      <div className="w-full flex items-center justify-between">
        <Text fontSize={"lg"}>Tìm kiếm</Text>
        <Text fontSize={"sm"} color={"blue.400"} cursor={"pointer"}>
          Xóa bộ lọc
        </Text>
      </div>
      <div className="w-full max-w-md mx-auto py-4">
        <InputGroup>
          <Input
            type="text"
            placeholder="Nhập từ khóa cần tìm ..."
            className="rounded-2xl focus:shadow-lg transition duration-300"
            bg="white"
            _focus={{ borderColor: "blue.400" }}
          />
          <InputRightElement pointerEvents="none">
            <RiSearchEyeLine />
          </InputRightElement>
        </InputGroup>
      </div>
    </>
  );
};

export default SearchFilter;
