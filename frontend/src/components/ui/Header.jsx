import {
  Box,
  Flex,
  HStack,
  Button,
  Spacer,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerFooter
} from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import ChakraRouterLink from '../ChakraRouterLink'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="header" px={{ base: 4, md: 8, lg: 12 }} py={{ base: 4, md: 8 }}>
      <Flex minW={'max-content'} align={'center'}>
        <Logo />
        <Spacer />

        <HStack
          justify={'center'}
          align={'center'}
          spacing={10}
          display={{ base: 'none', md: 'flex' }}
        >
          <ChakraRouterLink href={'/about'} size="18px">
            О нас
          </ChakraRouterLink>
          <Button onClick={() => alert('modal here')}>Связаться с нами</Button>
        </HStack>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
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
              <ChakraRouterLink href={'/about'} size="18px" onClick={onClose}>
                О нас
              </ChakraRouterLink>
            </DrawerBody>
            <DrawerFooter>
              <Button
                width={'100%'}
                onClick={() => {
                  alert('modal here')
                }}
              >
                Связаться с нами
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Header
