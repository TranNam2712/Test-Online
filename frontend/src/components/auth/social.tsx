import { Button, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { RiDiscordLine, RiFacebookFill, RiGoogleFill } from "@remixicon/react";

const SocialConnect = () => {
  return (
    <>
      <Flex align="center" width={"full"}>
        <Divider flex="1" />
        <Text
          px={2}
          fontSize="sm"
          color="gray.500"
          whiteSpace="nowrap"
          textAlign="center"
        >
          Or continue with
        </Text>
        <Divider flex="1" />
      </Flex>

      <HStack justify="center" spacing={5}>
        <Button variant="outline" colorScheme={"gray"} rounded="md" p={5}>
          <RiGoogleFill />
        </Button>
        <Button variant="outline" rounded="md" p={5}>
          <RiFacebookFill color="blue" />
        </Button>
        <Button variant="outline" rounded="md" p={5}>
          <RiDiscordLine color="purple" />
        </Button>
      </HStack>
    </>
  );
};

export default SocialConnect;
