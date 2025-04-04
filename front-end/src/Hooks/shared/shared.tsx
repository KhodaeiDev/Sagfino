import { useState, useEffect, useCallback } from 'react'

const useSaveToLocalStorage = (
  key: string,
  initialValue: string | null
): readonly [(value: string | null) => void] => {
  const [storedValue, setStoredValue] = useState(initialValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

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
  const removeItem = useCallback(() => {
    localStorage.removeItem(key)
  }, [key])
  return removeItem
}

export {
  useSaveToLocalStorage,
  useGetFromLocalStorage,
  useRemoveFromLocalStorage,
}
