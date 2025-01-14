import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/ui/Root'
import HomePage from './pages/HomePage'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import FormPage from './pages/FormPage'
import { formLoader } from './api/loaders'
import ReportPage from './pages/ReportPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/form',
        element: <FormPage />,
        loader: formLoader
      },
      {
        path: '/report',
        element: <ReportPage />
      },
      {
        path: '/about',
        element: <AboutPage />
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
