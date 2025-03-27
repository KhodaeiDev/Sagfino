export type ValidationItem = {
  value: string
  min?: number
  max?: number
}

export type InputProps = {
  id: string
  type: string
  placeholder: string
  className: string
  element: 'text' | 'textarea'
  validations: ValidationItem[]
  onInputHandler: (id: string, value: string, isValid: boolean) => void
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
