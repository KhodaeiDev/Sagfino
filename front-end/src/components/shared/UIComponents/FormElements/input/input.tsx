import React, { useReducer, useEffect } from 'react'
import { InputProps, InputState, InputAction } from './types'
import validator from '../../../../../validators/validator'

const inputReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      }
    default:
      return state
  }
}

const Input: React.FC<InputProps> = (props) => {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    validations: props.validations || [],
  })

  const { value, isValid } = mainInput
  const { id, onInputHandler, onFocus } = props

  useEffect(() => {
    onInputHandler(id, value, isValid)
  }, [id, value, isValid])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
      validations: props.validations,
      isValid: false,
    })
  }

  const element =
    props.element === 'text' ? (
      <input
        id={id}
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className}  focus:ring-2 ${
          isValid ? ' focus:!ring-green-500' : '   focus:!ring-primary '
        }`}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
      />
    ) : (
      <textarea
        id={id}
        placeholder={props.placeholder}
        className={`${props.className} ${
          isValid ? '!border-green-500' : '!border-primary'
        }`}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
      ></textarea>
    )

  return element
}

export default Input
