import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import IconWrapper from '../ui/IconWrapper'
import { Nut, RussianRuble, Plane } from 'lucide-react'
import FeatureCard from '../ui/FeatureCard'

const FeaturesSection = () => {
  return (
    <Box>
      <Flex
        maxW="1200px"
        mx="auto"
        flexDirection="column"
        alignItems="center"
        mb={10}
      >
        <Heading size="2xl" mb={4} textAlign={'center'}>
          Как вы мне поможете?
        </Heading>
        <Text maxW={'xl'} textAlign={'center'}>
          Подготовим к собеседованиям, поможем найти подходящую вакансию, а
          также поможем выбрать жилье и ораганизуем логистику.
        </Text>
      </Flex>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        gap={8}
      >
        <FeatureCard
          icon={
            <IconWrapper>
              <Nut size={24} color="#00B5D8" />
            </IconWrapper>
          }
          title="Подготовка к интервью"
          description="Проведем пробные интервью, разберем вопросы и дадим советы, чтобы ты уверенно чувствовал себя на собеседовании."
        />
        <FeatureCard
          icon={
            <IconWrapper>
              <RussianRuble size={24} color="#00B5D8" />
            </IconWrapper>
          }
          title="Адаптация к культуре"
          description="Расскажем о традициях, культуре, рабочей этике и особенностях страны, чтобы адаптация была легче."
        />
        <FeatureCard
          icon={
            <IconWrapper>
              <Plane size={24} color="#00B5D8" />
            </IconWrapper>
          }
          title="Поддержка при переезде"
          description="Поможем с поиском жилья, организацией логистики и адаптацией для всей семьи, чтобы переезд был комфортным."
        />
      </Flex>
    </Box>
  )
}

export default FeaturesSection
