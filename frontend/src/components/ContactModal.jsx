import { useState } from "react";
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
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { ContactAPI } from "../api/contact";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", telegram: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя не должно быть пустым";
    }

    if (!formData.telegram.trim()) {
      newErrors.telegram = "Telegram не должен быть пустым";
    } else if (!/^@[\w\d_]+$/.test(formData.telegram)) {
      newErrors.telegram = "Введите корректный Telegram (@username)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const success = await new ContactAPI().contactMessage(
        formData.name,
        formData.telegram,
      );

      if (success) {
        toast({
          title: "Сообщение отправлено!",
          description: "Мы свяжемся с вами в ближайшее время.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        setFormData({ name: "", telegram: "" });
        onClose();
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Попробуйте позже.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Свяжитесь с нами</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired mb={4} isInvalid={errors.name}>
            <FormLabel>Имя</FormLabel>
            <Input
              placeholder="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={errors.telegram}>
            <FormLabel>Telegram</FormLabel>
            <Input
              placeholder="@username"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.telegram}</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            onClick={handleSubmit}
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
          >
            Отправить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
