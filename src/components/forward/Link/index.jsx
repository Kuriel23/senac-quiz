import NextLink, { LinkProps } from 'next/link'
import { useMemo, HTMLAttributes } from 'react'

import { parseUrl } from './parseUrl'

export const Link = ({ children, ...props }) => {
  const href = useMemo(
    () => parseUrl(props.as) || parseUrl(props.href),
    [props.as, props.href]
  )

  return (
    <NextLink {...props}>
      <a {...props} href={href}>
        {children}
      </a>
    </NextLink>
  )
}
