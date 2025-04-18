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

const useScrollFixed = (scrollThreshold = 168) => {
  const [isFixed, setIsFixed] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll) 
    }
  }, [scrollThreshold])

  return isFixed
}


export {
  useSaveToLocalStorage,
  useGetFromLocalStorage,
  useRemoveFromLocalStorage,
  useScrollFixed,
}
