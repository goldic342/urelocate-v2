import { Box } from '@chakra-ui/react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import Footer from './Footer'

const Root = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Box mt={{ base: 14, md: 20, lg: 28 }}>
        <Footer />
      </Box>
    </>
  )
}

Root.propTypes = {
  children: PropTypes.node
}

export default Root
