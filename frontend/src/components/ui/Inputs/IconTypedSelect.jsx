import { Text, Image } from '@chakra-ui/react'
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag
} from '@choc-ui/chakra-autocomplete'

const IconTypedSelect = ({
  value,
  onChange,
  items,
  multiple = false,
  ...props
}) => {
  return (
    <AutoComplete
      openOnFocus
      multiple={multiple}
      value={value}
      onChange={(e) => onChange(e)}
    >
      <AutoCompleteInput variant="outline" {...props}>
        {({ tags }) =>
          tags.map((tag, tid) => (
            <AutoCompleteTag
              key={tid}
              label={tag.label}
              onRemove={tag.onRemove}
            />
          ))
        }
      </AutoCompleteInput>
      <AutoCompleteList>
        {items.map((item) => (
          <AutoCompleteItem
            key={`option-${item.name}`}
            value={item.name}
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
            {item.icon && <Image src={item.icon} w={8} h={8} />}
            <Text ml="4">{item.name}</Text>
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  )
}

export default IconTypedSelect
