import { Button, Flex, FormControl, FormLabel, Select } from '@chakra-ui/react'
import IconTypedSelect from './ui/Inputs/IconTypedSelect'
import LangLevelSelect from './ui/Inputs/LangLevelSelect'
import HInputsWrapper from './ui/Inputs/HInputsWrapper'
import { useState } from 'react'
import SimpleNumberInput from './ui/Inputs/SimpleNumberInput'

const Form = ({ formValues }) => {
  const [formData, setFormData] = useState({
    fromCountry: '',
    toCountry: '',
    englishLevel: 1,
    localLevel: 1,
    techStackScope: '',
    techStackTools: [''],
    expirienceLevel: 0,
    savings: 0,
    adults: 1,
    childs: 0
  })
  const setFieldValue = (value, field_name) => {
    const newData = { ...formData }
    newData[field_name] = value
    setFormData(newData)
  }

  return (
    <Flex justify={'center'} align={'center'} direction={'column'}>
      <Flex direction={'column'} gap={7} maxW={'2xl'}>
        <HInputsWrapper
          items={[
            {
              label: 'Где вы живете?',
              element: (
                <IconTypedSelect
                  value={formData.fromCountry}
                  onChange={(e) => setFieldValue(e, 'fromCountry')}
                  items={formValues.countries.map((name) => {
                    return {
                      name
                    }
                  })}
                />
              )
            },
            {
              label: 'Куда хотите перехать',
              element: (
                <IconTypedSelect
                  value={formData.toCountry}
                  onChange={(e) => setFieldValue(e, 'toCountry')}
                  items={formValues.countries.map((name) => {
                    return {
                      name
                    }
                  })}
                />
              )
            }
          ]}
        />
        <HInputsWrapper
          items={[
            {
              label: 'Уровень знаний английского язка',
              element: (
                <LangLevelSelect
                  value={formData.englishLevel}
                  onChange={(e) =>
                    setFieldValue(e.target.value, 'englishLevel')
                  }
                />
              )
            },
            {
              label: 'Уровень знаний местоного язка',
              element: (
                <LangLevelSelect
                  hasNull
                  value={formData.localLevel}
                  onChange={(e) => setFieldValue(e.target.value, 'localLevel')}
                />
              )
            }
          ]}
        />
        <FormControl>
          <FormLabel>Ваша текущая должность</FormLabel>
          <Select
            value={formData.expirienceLevel}
            onChange={(e) => setFieldValue(e.target.value, 'expirienceLevel')}
          >
            <option value={1}>Junior</option>
            <option value={2}>Middle</option>
            <option value={3}>Senior</option>
            <option value={4}>Lead/Architect</option>
          </Select>
        </FormControl>
        <HInputsWrapper
          items={[
            {
              label: 'Область програмированния',
              element: (
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
              )
            },
            {
              label: 'Ваш стек',
              element: (
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
              )
            }
          ]}
        />
        <FormControl>
          <FormLabel>Ваши сбережения</FormLabel>
          <SimpleNumberInput
            value={formData.savings}
            onChange={(e) => setFieldValue(e, 'savings')}
            min={100}
            max={1000000}
            step={100}
          />
        </FormControl>
        <HInputsWrapper
          items={[
            {
              label: 'Количество взрослых',
              element: (
                <SimpleNumberInput
                  min={1}
                  max={10}
                  step={1}
                  value={formData.adults}
                  onChange={(e) => setFieldValue(e, 'adults')}
                />
              )
            },
            {
              label: 'Количество детей',
              element: (
                <SimpleNumberInput
                  min={0}
                  max={10}
                  step={1}
                  value={formData.childs}
                  onChange={(e) => setFieldValue(e, 'childs')}
                />
              )
            }
          ]}
        />
      </Flex>
      <Button mt={10}>Узнать результаты</Button>
    </Flex>
  )
}

export default Form
