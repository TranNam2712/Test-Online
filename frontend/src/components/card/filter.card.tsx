import { Accordion, Button, Card, CardBody } from "@chakra-ui/react";
import SearchFilter from "./filter/search.filter";
import RateFilter from "./filter/rate.filter";
import QuestionFilter from "./filter/question.filter";
import TimeFilter from "./filter/time.filter";
const FilterCard = () => {
  return (
    <>
      <Card variant={"outline"} shadow={"base"}>
        <CardBody>
          {/* search */}
          <SearchFilter />

          {/* filter */}
          <Accordion allowMultiple defaultIndex={[0, 1, 2]}>
            {/* rate */}
            <RateFilter />

            {/* question*/}
            <QuestionFilter />

            {/* time */}
            <TimeFilter />
          </Accordion>

          {/* button filer */}
          <Button
            bg="#153BAF"
            color="white"
            fontWeight="bold"
            py={6}
            borderRadius="md"
            width="full"
            _hover={{ bg: "#0F2E8F" }}
            _active={{ bg: "#0D2679" }}
          >
            Áp dụng bộ lọc
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default FilterCard;
