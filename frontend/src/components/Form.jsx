import { Box, Flex } from '@chakra-ui/react'
import CountrySelect from './ui/Inputs/CountryInput'

const Form = ({ formData }) => {
  console.log(formData)
  return (
    <Flex>
      <CountrySelect countryList={formData.countries} />
      <Box></Box>
      <Box></Box>
      <input type="" name="" value="" />
      <Box></Box>
      <input type="" name="" value="" />
      <Box></Box>
    </Flex>
  )
}

export default Form
