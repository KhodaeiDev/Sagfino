import { useState, useEffect } from 'react'

const useSaveToLocalStorage = (
  key: string,
  initialValue: string | null
): readonly [(value: string | null) => void] => {
  const [storedValue, setStoredValue] = useState(initialValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key])

  return [setStoredValue] as const
}

const useGetFromLocalStorage = (
  key: string
): readonly [value: string | null] => {
  const [retrievedValue, setRetrievedValue] = useState<string | null>(null)

  useEffect(() => {
    const item = localStorage.getItem(key)
    setRetrievedValue(item ? JSON.parse(item) : null)
  }, [key])

  return [retrievedValue]
}

const useRemoveFromLocalStorage = (key: string): (() => void) => {
  const removeItem = () => {
    window.localStorage.removeItem(key)
  }
  return removeItem
}

export {
  useSaveToLocalStorage,
  useGetFromLocalStorage,
  useRemoveFromLocalStorage,
}
