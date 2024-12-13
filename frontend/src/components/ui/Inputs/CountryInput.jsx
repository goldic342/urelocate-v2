import { Text } from '@chakra-ui/react'
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from '@choc-ui/chakra-autocomplete'

const CountrySelect = ({ countryList }) => {
  // TODO: add icons for countries, need new config on backend
  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput variant="outline" />
      <AutoCompleteList>
        {countryList.map((country) => (
          <AutoCompleteItem
            key={`option-${country}`}
            value={country}
            textTransform="capitalize"
            _selected={{
              bg: 'cyan.100'
            }}
            _focus={{
              bg: 'cyan.100'
            }}
            align="center"
          >
            {/*
            <Avatar size="sm" name={country.name} src={country.icon} />
              */}
            <Text ml="4">{country}</Text>
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  )
}

export default CountrySelect
