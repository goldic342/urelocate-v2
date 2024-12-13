import { Select } from '@chakra-ui/react'

const LangLevelSelect = ({ value, onChange, placeholder = '', hasNull }) => {
  return (
    <Select
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    >
      {hasNull && <option value={0}>Не знаю язык</option>}
      <option value={1}>Начинающий</option>
      <option value={2}>Cредний</option>
      <option value={3}>Продвинутый</option>
    </Select>
  )
}

export default LangLevelSelect
