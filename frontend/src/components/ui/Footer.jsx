import { Box, Text, Flex } from "@chakra-ui/react";
import ChakraRouterLink from "../ChakraRouterLink";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.100"
      color="gray.600"
      py={4}
      px={8}
      textAlign="center"
    >
      <Flex align="center" justify={"center"} maxW="100%" gap={10}>
        <Text fontSize="sm">
          Created by{" "}
          <ChakraRouterLink
            href="https://goldic.xyz"
            color="gray.800"
            isExternal
            fontWeight="semibold"
            _hover={{ color: "cyan.500" }}
          >
            goldic.xyz
          </ChakraRouterLink>
        </Text>
        <Text fontSize="sm">
          <ChakraRouterLink href="mailto:contact@goldic.xyz">
            contact@goldic.xyz
          </ChakraRouterLink>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
