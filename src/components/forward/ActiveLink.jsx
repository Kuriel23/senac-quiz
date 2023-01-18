import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'

export function ActiveLink ({ children, isExternal, ...rest }) {
  const { asPath } = useRouter()

  let isActive = false

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true
  }

  return (
    <NextLink {...rest}>
      {cloneElement(children, {
        color: isActive ? 'white' : 'gray.300',
        isExternal
      })}
    </NextLink>
  )
}
