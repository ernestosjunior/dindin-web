export const generateDate = (str: string) => {
  const [d, m, y] = str.split('/')
  return new Date(Number(y), Number(m), Number(d))
}
