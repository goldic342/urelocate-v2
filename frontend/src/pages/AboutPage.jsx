import { Container, Text, Heading, Box, VStack, Image } from "@chakra-ui/react";
import ChakraRouterLink from "../components/ChakraRouterLink";

const AboutPage = () => {
  return (
    <Container
      maxW={"4xl"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      flexDir={"column"}
      minH={"74vh"}
    >
      <VStack spacing={8} mt={{ base: 12, md: 16, lg: 20 }}>
        <VStack spacing={4} align={"flex-start"}>
          <Heading>О проекте</Heading>
          <Text fontSize={"lg"}>
            URelocate — это
            <ChakraRouterLink href={"https://goldic.xyz"} variant={"colored"}>
              {" "}
              мой{" "}
            </ChakraRouterLink>
            пет-проект, который помогает рассчитать вероятность переезда в
            другую страну. Основная идея — учитывать разные факторы, такие как
            образование, знание языка, профессиональный опыт, чтобы получить
            примерный шанс на успешный переезд.
          </Text>
          <Text fontSize={"lg"}>
            Этот проект был создан во время хакатона, где изначально задумывался
            как коммерческое решение. Но, так как это всего лишь пет-проект,
            никакой коммерческой выгоды он не приносит.
          </Text>
        </VStack>
        <VStack spacing={4} align={"flex-start"}>
          <Heading>Как это работает?</Heading>
          <Text fontSize={"lg"}>
            URelocate использует систему коэффициентов, чтобы оценить
            вероятность успешного переезда. Каждый параметр (например, знание
            языка, образование, профессиональный опыт) либо увеличивает, либо
            уменьшает итоговый процент. Коэффициенты настроены вручную и
            актуальны на 2024 год, основываясь на актуальной информации.
            Дополнительно учитываются средние затраты на жизнь в разных странах,
            которые парсятся с сайта{" "}
            <ChakraRouterLink variant="colored" href={"https://numbeo.com"}>
              numbeo.com
            </ChakraRouterLink>
          </Text>
          <Text fontSize={"lg"}>
            Эти данные помогают оценить финансовую сторону переезда, добавляя
            реалистичности итоговой оценке. Код проекта открыт и доступен на{" "}
            <ChakraRouterLink
              variant="colored"
              href={"https://github.com/goldic342/urelocate-v2"}
            >
              GitHub
            </ChakraRouterLink>{" "}
            звезды приветствуются 🙏
          </Text>
        </VStack>
      </VStack>
      <Image
        src="https://media1.tenor.com/m/KtfI_kb0RbkAAAAC/cat-dance.gif"
        alt="cat dancing"
        boxSize={"150px"}
        mt={20}
        onClick={() => alert("why??")}
      />
    </Container>
  );
};

export default AboutPage;
