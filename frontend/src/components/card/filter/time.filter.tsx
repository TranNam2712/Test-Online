import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";

const TimeFilter = () => {
  const [displayValue, setDisplayValue] = useState(500);
  const [sliderValue, setSliderValue] = useState(500);

  return (
    <AccordionItem border="none" mt={5}>
      {/* Header */}
      <AccordionButton
        p="0"
        _hover={{ bg: "none", boxShadow: "none" }}
        _active={{ bg: "none", boxShadow: "none" }}
        _focus={{ boxShadow: "none" }}
        bg="transparent"
      >
        <Box flex="1" textAlign="left">
          <Text fontSize="lg">Thời gian làm bài tối đa</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      {/* Nội dung */}
      <AccordionPanel px="0" mt={4}>
        <Text fontSize={"md"} textAlign="center">
          1 phút ~ 360 phút
        </Text>
        <Box px={3} className="w-full">
          <Slider
            min={1}
            max={360}
            value={sliderValue}
            onChange={(val) => setSliderValue(val)} // Cập nhật UI
            onChangeEnd={(val) => setDisplayValue(val)} // Chỉ set khi thả chuột
            colorScheme="pink"
            aria-label="slider-ex-4"
          >
            <SliderTrack bg="gray.200" p={0}>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb
              boxSize={5}
              bg="pink.500"
              border="2px solid white"
              _hover={{ bg: "pink.600" }}
              _focus={{ boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.4)" }} // focus ring
            />
          </Slider>

          <Text fontSize="md" textAlign="center" color="gray.700">
            {`${displayValue} phút`}
          </Text>
        </Box>
      </AccordionPanel>

      {/* Divider cuối */}
      <Box
        borderBottom="1px solid"
        borderColor="gray.300"
        width="full"
        my={3}
      />
    </AccordionItem>
  );
};

export default TimeFilter;
