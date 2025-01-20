import {
  Box,
  Flex,
  HStack,
  Spacer,
  IconButton,
  StackDivider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerFooter,
  VStack,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import ChakraRouterLink from "../ChakraRouterLink";
import ContactBtn from "../ContactBtn";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" px={{ base: 4, md: 8, lg: 12 }} py={{ base: 4, md: 8 }}>
      <Flex minW={"max-content"} align={"center"}>
        <Logo />
        <Spacer />

        <HStack
          justify={"center"}
          align={"center"}
          spacing={10}
          display={{ base: "none", md: "flex" }}
        >
          <ChakraRouterLink href={"/about"} size="18px">
            О нас
          </ChakraRouterLink>
          <ChakraRouterLink href={"https://github.com/goldic342/urelocate-v2"}>
            Github
          </ChakraRouterLink>
          <ContactBtn>Связаться с нами</ContactBtn>
        </HStack>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<Menu />}
          variant="ghost"
          aria-label="Open menu"
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Меню</DrawerHeader>
            <DrawerBody>
              <VStack
                spacing={4}
                align={"stretch"}
                divider={<StackDivider borderColor="gray.200" />}
              >
                <ChakraRouterLink href={"/about"} size="18px" onClick={onClose}>
                  О нас
                </ChakraRouterLink>
                <ChakraRouterLink
                  href={"https://github.com/goldic342/urelocate-v2"}
                >
                  Github
                </ChakraRouterLink>
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <ContactBtn width={"100%"}>Связаться с нами</ContactBtn>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;
