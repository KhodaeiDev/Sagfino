import { useReducer } from 'react'

type InputState = {
  value: string
  isValid: boolean
}

type FormInputState = {
  inputs: Record<string, InputState>
  isFormValid: boolean
  errorMessage?: string | null
}

type Action =
  | { type: 'INPUT_CHANGE'; value: string; isValid: boolean; inputID: string }
  | { type: 'SET_ERROR'; value: string }
  | { type: 'CLEAR_ERRORS' }

const formInputReducer = (
  state: FormInputState,
  action: Action
): FormInputState => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      const updatedInputs = {
        ...state.inputs,
        [action.inputID]: {
          value: action.value || '',
          isValid: action.isValid,
        },
      }

      const isFormValid = Object.values(updatedInputs).every(
        (input) => input.isValid
      )

      return {
        ...state,
        inputs: updatedInputs,
        isFormValid,
        errorMessage: null,
      }
    }

    case 'SET_ERROR': {
      return { ...state, errorMessage: action.value }
    }

    case 'CLEAR_ERRORS': {
      return { ...state, errorMessage: null }
    }

    default:
      return state
  }
}

const UseForm = (
  initInputs: Record<string, InputState>,
  initFormIsValid: boolean
) => {
  const [formState, dispatch] = useReducer(formInputReducer, {
    inputs: initInputs,
    isFormValid: initFormIsValid,
    errorMessage: null,
  })

  const onInputHandler = (inputID: string, value: string, isValid: boolean) => {
    dispatch({ type: 'INPUT_CHANGE', value, isValid, inputID })
    dispatch({ type: 'CLEAR_ERRORS' })
  }

  return [formState, onInputHandler, dispatch] as const
}

export default UseForm
