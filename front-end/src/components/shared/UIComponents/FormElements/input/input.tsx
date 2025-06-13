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

  useEffect(() => {
    onInputHandler(id, value, isValid)
  }, [id, value, isValid])

  const formattedValue =
    props.shouldFormat && value
      ? value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : value

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const rawValue = event.target.value.replace(/,/g, '')
      localStorage.setItem(`${props.id}-value`, rawValue)
      dispatch({
        type: 'CHANGE',
        value: rawValue,
        validations: props.validations,
        isValid: validator(rawValue, props.validations),
        errorMessage: null,
      })

      onInputHandler(props.id, rawValue, true)
    },
    [props.validations, props.id, onInputHandler]
  )

  useEffect(() => {
    const storedValue = localStorage.getItem(`${props.id}-value`)

    // بررسی اگر `props.id` برابر `searchFilter` باشد
    const finalValue =
      props.id === 'searchFilter' && (!storedValue || storedValue === '')
        ? 'تهران'
        : storedValue

    if (finalValue) {
      dispatch({
        type: 'CHANGE',
        value: finalValue,
        validations: props.validations || [],
        isValid: validator(finalValue, props.validations),
        errorMessage: null,
      })

      onInputHandler(props.id, finalValue, true)
    }
  }, [props.id])


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
            } px-4`}
            value={formattedValue}
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
        value={formattedValue}
        onChange={handleChange}
        onFocus={onFocus}
      ></textarea>
    )

  return element
})

export default Input
