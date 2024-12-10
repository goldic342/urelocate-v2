import { Box } from '@chakra-ui/react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

const Root = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main" maxW={'1440px'} mx="auto">
        <Outlet />
        {children}
      </Box>
    </>
  )
}

Root.propTypes = {
  children: PropTypes.node
}

export default Root
