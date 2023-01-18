export function reduceString (str, maxLength = 15) {
  return `${str.slice(0, maxLength)}${str.length > maxLength ? '...' : ''}`
}
