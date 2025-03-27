import React, { useEffect, useReducer } from 'react'
import validator from '../../../../../validators/validator'
import { InputProps, InputState, InputAction } from './types'

const inputReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      }
    }
    default: {
      return state
    }
  }
}

const Input: React.FC<InputProps> = (props) => {
  const [mainInput, dipatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    validations: props.validations || [],
  })

  const { value, isValid } = mainInput

  const { id, onInputHandler } = props

  useEffect(() => {
    onInputHandler(id, value, isValid)
  }, [value])

  const onchangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dipatch({
      type: 'CHANGE',
      value: event.target.value,
      validations: props.validations,
      isValid: false,
    })
  }

  const element =
    props.element === 'text' ? (
      <input
        placeholder={props.placeholder}
        type={props.type}
        className={`${props.className} focus:ring-2 ${
          mainInput.isValid
            ? '!border-green-500 focus:ring-green-500 '
            : '  !border-primary   focus:ring-primary'
        } `}
        onChange={onchangeHandler}
        value={mainInput.value}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className}  ${
          mainInput.isValid ? '!border-green-400' : ' !border-red-600 '
        } `}
        value={mainInput.value}
        onChange={onchangeHandler}
      ></textarea>
    )

  return element
}

export default Input
