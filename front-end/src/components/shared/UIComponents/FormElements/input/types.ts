export type ValidationItem = {
  value: string
  min?: number
  max?: number
}

export type InputProps = {
  type: string
  placeholder: string
  className: string
  element: 'text' | 'textarea'
  validations: ValidationItem[]
}

export type InputState = {
  value: string
  isValid: boolean
  validations: ValidationItem[]
}

export type InputAction = {
  type: 'CHANGE'
  value: string
  isValid: boolean
  validations: ValidationItem[]
}
