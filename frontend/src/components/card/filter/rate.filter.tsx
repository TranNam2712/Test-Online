import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { RiStarFill } from "@remixicon/react";

const RateFilter = () => {
  const ratings = [5, 4, 3, 2, 1, 0];
  return (
    <>
      <AccordionItem border="none">
        {/* tilte rate */}
        <AccordionButton
          p={"0"}
          _hover={{ bg: "none", boxShadow: "none" }}
          _active={{ bg: "none", boxShadow: "none" }}
          _focus={{ boxShadow: "none" }}
          bg="transparent"
        >
          <Box flex="1" textAlign="left">
            <Text fontSize={"lg"}>Đánh giá</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        {/* tilte rate */}

        {/* rate */}
        <AccordionPanel px="0" mt={4}>
          {ratings.map((rating, i) => (
            <Flex
              key={rating}
              align="center"
              className="cursor-pointer flex-col"
            >
              <div className="w-full flex px-5">
                <Text>{rating}</Text>
                <Text mx={2}>-</Text>
                {[...Array(5)].map((_, index) => (
                  <RiStarFill
                    key={index}
                    color={index < rating ? "#C2185B" : "#E0E0E0"}
                    className="mr-1"
                  />
                ))}
              </div>

              {i !== ratings.length - 1 && (
                <Box
                  borderBottom="1px solid"
                  borderColor="gray.300"
                  width="full"
                  my={3}
                />
              )}
            </Flex>
          ))}
        </AccordionPanel>

        <Box
          borderBottom="1px solid"
          borderColor="gray.300"
          width="full"
          py={2}
        />
        {/* rate */}
      </AccordionItem>
    </>
  );
};

export default RateFilter;
