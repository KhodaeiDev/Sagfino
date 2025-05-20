import { useReducer } from 'react'

type InputState = {
  value: string
  isValid: boolean
}

type FormInputState = {
  inputs: Record<string, InputState>
  isFormValid: boolean
  errorMessage?: string | null
  validationMessageSuccess?: string | null 
  validationMessageError?: string | null
}


type Action =
  | { type: 'INPUT_CHANGE'; value: string; isValid: boolean; inputID: string }
  | { type: 'SET_ERROR'; value: string }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'SET_VALIDATION_MESSAGE_SUCCESS'; value: string }
  | { type: 'SET_VALIDATION_MESSAGE_ERROR'; value: string }


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
          validationMessageSuccess: null,
          validationMessageError: null,
        }
      }

      case 'SET_ERROR': {
        return { ...state, errorMessage: action.value }
      }

      case 'CLEAR_ERRORS': {
        return { ...state, errorMessage: null }
      }

      case 'SET_VALIDATION_MESSAGE_SUCCESS': {
        return { ...state, validationMessageSuccess: action.value }
      }

      case 'SET_VALIDATION_MESSAGE_ERROR': {
        return { ...state, validationMessageError: action.value }
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
      validationMessageSuccess: null,
      validationMessageError: null,
    })

    const onInputHandler = (
      inputID: string,
      value: string,
      isValid: boolean
    ) => {
      dispatch({ type: 'INPUT_CHANGE', value, isValid, inputID })
      dispatch({ type: 'CLEAR_ERRORS' })

      if (isValid) {
        dispatch({
          type: 'SET_VALIDATION_MESSAGE_SUCCESS',
          value: '✅ اطلاعات معتبر است.',
        })
      } else {
        dispatch({
          type: 'SET_VALIDATION_MESSAGE_ERROR',
          value: '⚠️ اطلاعات نامعتبر است، لطفاً اصلاح کنید.',
        })
      }
    }

    return [formState, onInputHandler, dispatch] as const
  }

  export default UseForm
  

