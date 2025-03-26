import React, { useReducer } from 'react'
import { InputProps, InputState, InputAction } from './types'

const inputReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
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
  })

  // const { value, isValue } = mainInput

  const onchangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dipatch({
      type: 'CHANGE',
      value: event.target.value,
      isValid: true,
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
