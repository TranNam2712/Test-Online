import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { useState } from "react";

const Pagination = ({
  totalPages,
  setCurrentPage,
}: {
  totalPages: number;
  setCurrentPage: (page: number) => void;
}) => {
  const [currentPage, setPageState] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPageState(page);
      setCurrentPage(page);
    }
  };

  const renderPageButtons = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3);

      if (totalPages > 4) {
        pages.push("..."); // ngăn cách

        pages.push(totalPages);
      }
    }

    return pages.map((item, idx) =>
      item === "..." ? (
        <Text key={`ellipsis-${idx}`} px={2}>
          ...
        </Text>
      ) : (
        <Button
          key={item}
          onClick={() => handlePageChange(item as number)}
          colorScheme={item === currentPage ? "blue" : "gray"}
          variant={item === currentPage ? "solid" : "outline"}
        >
          {item}
        </Button>
      )
    );
  };

  return (
    <HStack spacing={2}>
      <IconButton
        icon={<RiArrowLeftSLine />}
        isDisabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label="Previous Page"
      />
      {renderPageButtons()}
      <IconButton
        icon={<RiArrowRightSLine />}
        isDisabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label="Next Page"
      />
    </HStack>
  );
};

export default Pagination;
