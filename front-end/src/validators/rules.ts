type BaseValidatorType = {
  value: string
}

type MinValidatorType = BaseValidatorType & {
  min: number
}

type MaxValidatorType = BaseValidatorType & {
  max: number
}

const requiredValue: string = 'REQUIRED_VALUE'
const minValue: string = 'MIN_VALUE'
const maxValue: string = 'MAX_VALUE'
const phoneNumber: string = 'PHONE'
const onlyNumber: string = 'ONLY-NUMBER'
const persianText: string = 'PERSIAN_TEXT'

export const requiredValidator = (): BaseValidatorType => ({
  value: requiredValue,
})

export const minValidator = (min: number = 0): MinValidatorType => ({
  value: minValue,
  min,
})

export const maxValidator = (max: number = 15): MaxValidatorType => ({
  value: maxValue,
  max,
})

export const phoneValidator = () => ({
  value: phoneNumber,
})

export const onlyNumberValidator = () => ({
  value: onlyNumber,
})

export const persianValidator = () => ({
  value: persianText,
})

export default {
  requiredValue,
  minValue,
  maxValue,
  phoneNumber,
  onlyNumber,
  persianText,
}
