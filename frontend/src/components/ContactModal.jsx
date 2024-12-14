import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', telegram: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    console.log('Form Data:', formData)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Свяжитесь с нами</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired mb={4}>
            <FormLabel>Имя</FormLabel>
            <Input
              placeholder="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Telegram</FormLabel>
            <Input
              placeholder="@urelocate_info"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={handleSubmit}>
            Отправить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ContactModal
