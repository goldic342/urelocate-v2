import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/ui/Root'
import HomePage from './pages/HomePage'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import FormPage from './pages/FormPage'
import { formLoader } from './api/loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/form',
        element: <FormPage />,
        loader: formLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
)
