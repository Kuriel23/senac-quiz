import { Flex } from '@chakra-ui/react'

export function Container ({ children, ...rest }) {
  return (
    <Flex as='main' w='100%' flexDir='column' {...rest}>
      {children}
    </Flex>
  )
}

export function Section ({ children, ...rest }) {
  return (
    <Flex as='section' w='100%' flexDir='column' {...rest}>
      {children}
    </Flex>
  )
}

export function Centralize ({ children, ...rest }) {
  return (
    <Flex
      w='100%'
      maxW={1240}
      px={{ base: '9', lg: '32' }}
      m='0 auto'
      justify={{ sm: 'center' }}
      {...rest}
    >
      {children}
    </Flex>
  )
}

export function Content ({ children, ...rest }) {
  return (
    <Flex pt='24' pb='28' align='center' justify='space-between' {...rest}>
      {children}
    </Flex>
  )
}
