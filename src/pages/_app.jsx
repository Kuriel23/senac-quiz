import '../styles/main.css'
import 'react-toastify/dist/ReactToastify.css'

import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

import { chakraTheme } from '../styles/theme'

export default function _App ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>

      <ToastContainer autoClose={3000} />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}
