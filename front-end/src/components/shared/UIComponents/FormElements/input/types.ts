export interface InputProps {
  type: string
  placeholder: string
  className: string
  element: 'text' | 'textarea'
}

export interface InputState {
  value: string
  isValid: boolean
}

export type InputAction = { type: 'CHANGE'; value: string; isValid: boolean }
