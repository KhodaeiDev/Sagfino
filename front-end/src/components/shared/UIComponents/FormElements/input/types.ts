import React, { ReactNode } from 'react'

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
  onFocus: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  errorMessage?: string | null
  icon: ReactNode
  validationMessageError?: string | null
  validationMessageSuccess?: string | null
  isFocused?: boolean
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
