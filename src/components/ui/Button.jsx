import { Button as ChakraButton } from '@chakra-ui/react'

export function Button ({ children, ...rest }) {
  return (
    <ChakraButton
      size='lg'
      fontFamily='Montserrat'
      fontWeight='500'
      letterSpacing='widest'
      color='white'
      textTransform='uppercase'
      borderRadius={40}
      borderWidth={1}
      _active={{ color: 'white' }}
      {...rest}
    >
      {children}
    </ChakraButton>
  )
}
