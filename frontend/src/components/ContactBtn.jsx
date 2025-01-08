import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import ContactModal from './ContactModal'

const ContactBtn = ({ children, ...props }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
      <Button {...props} onClick={() => setOpen(true)}>
        {children}
      </Button>
    </>
  )
}

export default ContactBtn
