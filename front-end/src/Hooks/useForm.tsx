import { useReducer } from 'react'

type FormInputState = {
  inputs: {
    phone: {
      value: string
      isValid: boolean
    }
  }
  isFormValid: boolean
}

type Action = {
  type: string
  value: string
  isValid: boolean
  inputID: string
}

const formInputReducer = (
  state: FormInputState,
  action: Action
): FormInputState => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      const updatedInputs = {
        ...state.inputs,
        [action.inputID!]: {
          value: action.value || '',
        },
      }

      const updatedIsFormValid = action.isValid ?? state.isFormValid

      return {
        ...state,
        inputs: updatedInputs,
        isFormValid: updatedIsFormValid,
      }
    }
    default:
      return state
  }
}

const UseForm = (
  initInputs: { phone: { value: string; isValid: boolean } },
  initFormIsValid: boolean
) => {
  const [formState, dispatch] = useReducer(formInputReducer, {
    inputs: initInputs,
    isFormValid: initFormIsValid,
  })

  const onInputHandler = (inputID: string, value: string, isValid: boolean) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value,
      isValid,
      inputID,
    })
  }

  return [formState, onInputHandler] as const
}

export default UseForm
