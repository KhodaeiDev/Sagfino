import { useReducer, useEffect } from 'react'
import { FormType } from './useformType'

type InputState = {
  value: string
  isValid: boolean
  errorMessage?: string | null
}

type FormInputState = {
  inputs: Record<string, InputState>
  isFormValid: boolean
  errorMessage?: string | null
  validationMessageSuccess?: string | null
  validationMessageError?: string | null
}

export type Action =
  | { type: 'SET_ERROR'; value: string }
  | { type: 'INPUT_CHANGE'; inputID: string; value: string; isValid: boolean }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'SET_VALIDATION_MESSAGE_SUCCESS'; value: string }
  | { type: 'SET_VALIDATION_MESSAGE_ERROR'; value: string }
  | {
      type: 'SET_FORM_TYPE'
      value: FormType
      inputs: Record<string, InputState>
    }
  | { type: 'SET_INPUT_ERROR'; inputID: string; value: string }

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
          errorMessage: null,
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

    case 'SET_INPUT_ERROR': {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID]: {
            ...state.inputs[action.inputID],
            errorMessage: action.value,
          },
        },
      }
    }

    case 'SET_ERROR': {
      return { ...state, errorMessage: action.value }
    }

    case 'CLEAR_ERRORS': {
      return {
        ...state,
        errorMessage: null,
        inputs: Object.keys(state.inputs).reduce((acc, key) => {
          acc[key] = { ...state.inputs[key], errorMessage: null }
          return acc
        }, {} as Record<string, InputState>),
      }
    }

    case 'SET_VALIDATION_MESSAGE_SUCCESS': {
      return { ...state, validationMessageSuccess: action.value }
    }

    case 'SET_VALIDATION_MESSAGE_ERROR': {
      return { ...state, validationMessageError: action.value }
    }

    case 'SET_FORM_TYPE': {
      return { ...state, inputs: action.inputs ?? {}, isFormValid: false }
    }

    default:
      return state
  }
}

const UseForm = (formType: FormType) => {
  const getInitialInputs = (): Record<string, InputState> => {
    switch (formType) {
      case 'login':
        return { phone: { value: '', isValid: false, errorMessage: null } }
      case 'register':
        return {
          phone: { value: '', isValid: false, errorMessage: null },
          name: { value: '', isValid: false, errorMessage: null },
          lastName: { value: '', isValid: false, errorMessage: null },
        }
      case 'adPosting':
        return {
          Address: {
            value: '',
            isValid: false,
            errorMessage: null,
          },
          Mortgage: { value: '', isValid: false, errorMessage: null },
          Rent: { value: '', isValid: false, errorMessage: null },
          Sale: { value: '', isValid: false, errorMessage: null },
          Floor: { value: '', isValid: false, errorMessage: null },
          Room: { value: '', isValid: false, errorMessage: null },
          Area: { value: '', isValid: false, errorMessage: null },
          NumberFloors: { value: '', isValid: false, errorMessage: null },
          title: { value: '', isValid: false, errorMessage: null },
          description: { value: '', isValid: false, errorMessage: null },
        }
      case 'rent-search':
        return {
          searchFilter: {
            value: 'تهران',
            isValid: false,
            errorMessage: null,
          },
        }
      case 'realestates-search':
        return {
          searchFilterRealestates: {
            value: 'تهران',
            isValid: false,
            errorMessage: null,
          },
        }
      case 'edit-information':
        return {
          name: {
            value: 'تهران',
            isValid: false,
            errorMessage: null,
          },
          lastName: {
            value: '',
            isValid: false,
            errorMessage: null,
          },
        }
      default:
        return {}
    }
  }

  const [formState, dispatch] = useReducer(formInputReducer, {
    inputs: getInitialInputs(),
    isFormValid: false,
    errorMessage: null,
    validationMessageSuccess: null,
    validationMessageError: null,
  })

  useEffect(() => {
    dispatch({
      type: 'SET_FORM_TYPE',
      value: formType,
      inputs: getInitialInputs(),
    })
  }, [formType])

  const onInputHandler = (inputID: string, value: string, isValid: boolean) => {
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
