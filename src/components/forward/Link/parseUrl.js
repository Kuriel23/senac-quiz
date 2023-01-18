export function parseUrl (url) {
  if (!url) {
    return undefined
  }

  return (typeof url === 'object' ? url.href : url) || undefined
}
