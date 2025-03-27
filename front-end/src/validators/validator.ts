import rules from './rules'

interface Validation {
  value: string
  min?: number
  max?: number
}

const validator = (value: string, validations: Validation[]): boolean => {
  const trimmedValue = value.trim()

  for (const validation of validations) {
    switch (validation.value) {
      case rules.requiredValue:
        if (trimmedValue.length === 0) {
          return false
        }
        break
      case rules.minValue:
        if (
          validation.min !== undefined &&
          trimmedValue.length < validation.min
        ) {
          return false
        }
        break

      case rules.maxValue:
        if (
          validation.max !== undefined &&
          trimmedValue.length > validation.max
        ) {
          return false
        }
        break

      default:
        // Handle other cases if necessary
        break
    }
  }

  return true
}

export default validator
