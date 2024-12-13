import { Box, Flex, FormControl, FormLabel } from '@chakra-ui/react'
import CountrySelect from './ui/Inputs/CountryInput'

const Form = ({ formData }) => {
  console.log(formData)
  return (
    <Flex justify={'center'} align={'center'} gap={20}>
      <Flex direction={'column'}>
        <FormControl>
          <FormLabel>Где вы живете?</FormLabel>
          <CountrySelect countryList={formData.countries} />
        </FormControl>
      </Flex>
      <Flex direction={'column'}>
        <FormControl>
          <FormLabel>Куда хотите перехать</FormLabel>
          <CountrySelect countryList={formData.countries} />
        </FormControl>
      </Flex>
    </Flex>
  )
}

export default Form
