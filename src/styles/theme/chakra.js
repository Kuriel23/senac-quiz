import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  components: {
    Drawer: {
      variants: {
        bgColor: '#100F14'
      }
    }
  },
  colors: {
    gray: {
      700: '#2F2F35',
      850: '#121214',
      900: '#100F14'
    },
    blue: {
      750: '#291277',
      900: '#0D033D'
    },
    purple: {
      500: '#8257E6'
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900'
      }
    }
  }
})
