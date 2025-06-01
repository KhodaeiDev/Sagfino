import React, { useReducer, useEffect, useCallback } from 'react'
import { InputProps, InputState, InputAction } from './types'
import validator from '../../../../../validators/validator'
import { memo } from 'react'


const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
        errorMessage: action.errorMessage || null, 
      }
    case 'SET_ERROR':
      return {
        ...state,
        errorMessage: action.errorMessage, 
      }
    default:
      return state
  }
}



const Input: React.FC<InputProps> = memo((props) => {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    validations: props.validations || [],
    errorMessage: null,
  })

  const { value, isValid } = mainInput
  const { id, onInputHandler, onFocus, errorMessage } = props
  console.log(errorMessage)

  useEffect(() => {
    onInputHandler(id, value, isValid)
  }, [id, value, isValid])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({
        type: 'CHANGE',
        value: event.target.value,
        validations: props.validations,
        isValid: false,
        errorMessage: null,
      })
    },
    [props.validations]
  )

  const element =
    props.element === 'text' ? (
      <>
        <div className="relative !w-full">
          <input
            id={id}
            type={props.type}
            placeholder={props.placeholder}
            className={`${props.className} w-full focus:ring-2 ${
              errorMessage
                ? 'border-primary focus:ring-primary'
                : isValid
                ? 'border-green-500 focus:ring-green-500'
                : 'border-gray-300 focus:ring-primary'
            } `}
            value={value}
            onChange={handleChange}
            onFocus={onFocus}
          />
          {props.icon}
        </div>
        <div className="w-full flex items-start justify-start font-shabnam mt-2">
          {errorMessage ? (
            <span className="text-primary">{errorMessage}</span>
          ) : props.isFocused ? (
            isValid ? (
              <span className="text-green-500">
                {props.validationMessageSuccess}
              </span>
            ) : (
              <span className="text-primary">
                {props.validationMessageError}
              </span>
            )
          ) : null}
        </div>
      </>
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
})


export default Input
