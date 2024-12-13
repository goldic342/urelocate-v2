import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage
} from '@chakra-ui/react'
import IconTypedSelect from './ui/Inputs/IconTypedSelect'
import LangLevelSelect from './ui/Inputs/LangLevelSelect'
import HInputsWrapper from './ui/Inputs/HInputsWrapper'
import { useState } from 'react'
import SimpleNumberInput from './ui/Inputs/SimpleNumberInput'

const validateForm = (formData) => {
  const errors = {}

  if (!formData.fromCountry) {
    errors.fromCountry = 'Страна обязательна'
  }

  if (!formData.toCountry) {
    errors.toCountry = 'Страна обязательна'
  }

  if (formData.fromCountry === formData.toCountry) {
    errors.toCountry = 'Страна назначения должна отличаться от текущей страны'
  }

  if (formData.englishLevel < 1) {
    errors.englishLevel = 'Уровень владения английским языком обязателен'
  }

  if (!formData.techStackScope) {
    errors.techStackScope = 'Область программирования обязательна'
  }
  if (
    !formData.techStackTools ||
    formData.techStackTools.length === 0 ||
    formData.techStackTools[0] === ''
  ) {
    errors.techStackTools = 'Выберите хотя бы один инструмент tech стека'
  }

  if (formData.savings < 100) {
    errors.savings = 'Сбережения должны составлять не менее 100$'
  }

  if (formData.adults < 1 || formData.adults > 10) {
    errors.adults = 'Количество взрослых должно быть от 1 до 10'
  }

  if (formData.childs < 0 || formData.childs > 10) {
    errors.childs = 'Количество детей должно быть от 0 до 10'
  }

  return errors
}

const Form = ({ formValues }) => {
  const [formData, setFormData] = useState({
    fromCountry: '',
    toCountry: '',
    englishLevel: 1,
    localLevel: 1,
    techStackScope: '',
    techStackTools: [''],
    expirienceLevel: 1,
    savings: 0,
    adults: 1,
    childs: 0
  })

  const [errors, setErrors] = useState({})

  const setFieldValue = (value, field_name) => {
    const newData = { ...formData }
    newData[field_name] = value
    setFormData(newData)

    if (errors[field_name]) {
      const newErrors = { ...errors }
      delete newErrors[field_name]
      setErrors(newErrors)
    }
  }

  const handleSubmit = () => {
    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    console.log('Form submitted', formData)
  }

  return (
    <Flex justify={'center'} align={'center'} direction={'column'}>
      <Flex direction={'column'} gap={7} maxW={'2xl'}>
        <HInputsWrapper
          items={[
            {
              label: 'Где вы живете?',
              element: (
                <FormControl isInvalid={!!errors.fromCountry}>
                  <IconTypedSelect
                    value={formData.fromCountry}
                    onChange={(e) => setFieldValue(e, 'fromCountry')}
                    items={formValues.countries.map((name) => ({ name }))}
                  />
                  <FormErrorMessage>{errors.fromCountry}</FormErrorMessage>
                </FormControl>
              )
            },
            {
              label: 'Куда хотите переехать',
              element: (
                <FormControl isInvalid={!!errors.toCountry}>
                  <IconTypedSelect
                    value={formData.toCountry}
                    onChange={(e) => setFieldValue(e, 'toCountry')}
                    items={formValues.countries.map((name) => ({ name }))}
                  />
                  <FormErrorMessage>{errors.toCountry}</FormErrorMessage>
                </FormControl>
              )
            }
          ]}
        />
        <HInputsWrapper
          items={[
            {
              label: 'Уровень знаний английского языка',
              element: (
                <FormControl isInvalid={!!errors.englishLevel}>
                  <LangLevelSelect
                    value={formData.englishLevel}
                    onChange={(e) =>
                      setFieldValue(e.target.value, 'englishLevel')
                    }
                  />
                  <FormErrorMessage>{errors.englishLevel}</FormErrorMessage>
                </FormControl>
              )
            },
            {
              label: 'Уровень знаний местного языка',
              element: (
                <FormControl isInvalid={!!errors.localLevel}>
                  <LangLevelSelect
                    hasNull
                    value={formData.localLevel}
                    onChange={(e) =>
                      setFieldValue(e.target.value, 'localLevel')
                    }
                  />
                  <FormErrorMessage>{errors.localLevel}</FormErrorMessage>
                </FormControl>
              )
            }
          ]}
        />
        <FormControl isInvalid={!!errors.expirienceLevel}>
          <FormLabel>Ваша текущая должность</FormLabel>
          <Select
            value={formData.expirienceLevel}
            onChange={(e) => setFieldValue(e.target.value, 'expirienceLevel')}
          >
            <option value={1}>Junior</option>
            <option value={2}>Middle</option>
            <option value={3}>Senior</option>
            <option value={4}>Lead/Архитектор</option>
          </Select>
          <FormErrorMessage>{errors.expirienceLevel}</FormErrorMessage>
        </FormControl>
        <HInputsWrapper
          items={[
            {
              label: 'Область программирования',
              element: (
                <FormControl isInvalid={!!errors.techStackScope}>
                  <Select
                    value={formData.techStackScope}
                    onChange={(e) => {
                      setFieldValue(e.target.value, 'techStackScope')
                    }}
                  >
                    <option value={''} disabled></option>
                    {Object.keys(formValues.techStack).map((name) => (
                      <option value={name} key={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.techStackScope}</FormErrorMessage>
                </FormControl>
              )
            },
            {
              label: 'Ваш стек',
              element: (
                <FormControl isInvalid={!!errors.techStackTools}>
                  <IconTypedSelect
                    items={
                      formData.techStackScope
                        ? formValues.techStack[formData.techStackScope]
                        : []
                    }
                    value={formData.techStackTools}
                    onChange={(e) => {
                      const newData = { ...formData }
                      newData['techStackTools'].push(e)
                      setFormData(newData)
                    }}
                  />
                  <FormErrorMessage>{errors.techStackTools}</FormErrorMessage>
                </FormControl>
              )
            }
          ]}
        />
        <FormControl isInvalid={!!errors.savings}>
          <FormLabel>Ваши сбережения</FormLabel>
          <SimpleNumberInput
            value={formData.savings}
            onChange={(e) => setFieldValue(e, 'savings')}
            min={100}
            max={1000000}
            step={100}
          />
          <FormErrorMessage>{errors.savings}</FormErrorMessage>
        </FormControl>
        <HInputsWrapper
          items={[
            {
              label: 'Количество взрослых',
              element: (
                <FormControl isInvalid={!!errors.adults}>
                  <SimpleNumberInput
                    min={1}
                    max={10}
                    step={1}
                    value={formData.adults}
                    onChange={(e) => setFieldValue(e, 'adults')}
                  />
                  <FormErrorMessage>{errors.adults}</FormErrorMessage>
                </FormControl>
              )
            },
            {
              label: 'Количество детей',
              element: (
                <FormControl isInvalid={!!errors.childs}>
                  <SimpleNumberInput
                    min={0}
                    max={10}
                    step={1}
                    value={formData.childs}
                    onChange={(e) => setFieldValue(e, 'childs')}
                  />
                  <FormErrorMessage>{errors.childs}</FormErrorMessage>
                </FormControl>
              )
            }
          ]}
        />
      </Flex>
      <Button mt={10} onClick={handleSubmit} colorScheme="blue">
        Узнать результаты
      </Button>
    </Flex>
  )
}

export default Form
