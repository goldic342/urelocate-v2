import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  VStack
} from '@chakra-ui/react'
import IconTypedSelect from './ui/Inputs/IconTypedSelect'
import LangLevelSelect from './ui/Inputs/LangLevelSelect'
import InputsWrapper from './ui/Inputs/HInputsWrapper'
import { useState } from 'react'
import SimpleNumberInput from './ui/Inputs/SimpleNumberInput'
import { useNavigate } from 'react-router-dom'

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
    errors.savings = 'Сбережения должны составлять не менее $100 :('
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
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fromCountry: '',
    toCountry: '',
    englishLevel: 1,
    localLevel: 1,
    techStackScope: '',
    techStackTools: [],
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

    const base64Params = btoa(JSON.stringify(formData))
    navigate(`/report?q=${base64Params}`)
  }

  return (
    <Flex justify={'center'} align={'center'} direction={'column'} w="100%">
      <Flex direction={'column'} gap={{ base: 5, md: 7 }} maxW={'2xl'} w="100%">
        <VStack spacing={{ base: 5, md: 7 }} w="100%">
          <InputsWrapper
            spacing={{ base: 4, md: 20 }}
            direction={{ base: 'column', md: 'row' }}
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

          <InputsWrapper
            spacing={{ base: 4, md: 20 }}
            direction={{ base: 'column', md: 'row' }}
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

          <InputsWrapper
            spacing={{ base: 4, md: 20 }}
            direction={{ base: 'column', md: 'row' }}
            items={[
              {
                label: 'Область программирования',
                element: (
                  <FormControl isInvalid={!!errors.techStackScope}>
                    <Select
                      value={formData.techStackScope}
                      onChange={(e) =>
                        setFieldValue(e.target.value, 'techStackScope')
                      }
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
                      multiple
                      value={formData.techStackTools}
                      onChange={(e) => setFieldValue(e, 'techStackTools')}
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
              onChange={(e) => setFieldValue(parseInt(e), 'savings')}
              min={100}
              max={1000000}
              step={100}
            />
            <FormErrorMessage>{errors.savings}</FormErrorMessage>
          </FormControl>

          <InputsWrapper
            spacing={{ base: 4, md: 20 }}
            direction={{ base: 'column', md: 'row' }}
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
                      onChange={(e) => setFieldValue(parseInt(e), 'adults')}
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
                      onChange={(e) => setFieldValue(parseInt(e), 'childs')}
                    />
                    <FormErrorMessage>{errors.childs}</FormErrorMessage>
                  </FormControl>
                )
              }
            ]}
          />
        </VStack>
      </Flex>
      <Button
        mt={{ base: 6, md: 10 }}
        onClick={handleSubmit}
        variant={'gradient'}
        w={{ base: '100%', md: 'auto' }}
      >
        Узнать результаты
      </Button>
    </Flex>
  )
}

export default Form
