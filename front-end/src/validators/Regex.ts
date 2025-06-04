const persianOnlyRegex = /^[\u0600-\u06FF\s\d]+$/

const TestPhoneNumber = (value: string) => {
  const phonePattern = /^09(0[1-5]|1[0-9]|2[0-2]|3[0-9]|9[0-9])[0-9]{7}$/
  return phonePattern.test(value)
}

const testEmail = (value: string) => {
  const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
  return emailPattern.test(value)
}

const onlyNumberRegex = /^\d+$/

const isNumber = (value: string): boolean => onlyNumberRegex.test(value)
const isPersian = (value: string): boolean => persianOnlyRegex.test(value)

export default { TestPhoneNumber, testEmail, isNumber, isPersian }
