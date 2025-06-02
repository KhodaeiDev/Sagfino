const TestPhoneNumber = (value: string) => {
  const emailPattern = /^09(0[1-5]|1[0-9]|2[0-2]|3[0-9]|9[0-9])[0-9]{7}$/
  return emailPattern.test(value)
}

const testEmail = (value: string) => {
  const emailPattent = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
  return emailPattent.test(value)
}
const onlyNumberRegex = /^\d+$/

const isNumber = (value: string): boolean => onlyNumberRegex.test(value)

export default { TestPhoneNumber, testEmail, isNumber }
