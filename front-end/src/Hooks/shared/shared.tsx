import { useQuery } from '@tanstack/react-query'
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

const useGetFromLocalStorage = (key: string): [string | null] => {
  const [retrievedValue, setRetrievedValue] = useState<string | null>(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : null
  )

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

const usePaginationData = (pageUrl: string | null) => {
  console.log('pageUrl', pageUrl)
  return useQuery({
    queryKey: ['paginationData', pageUrl],
    queryFn: async () => {
      if (!pageUrl) {
        throw new Error('آدرس صفحه معتبر نیست!')
      }

      const response = await fetch(pageUrl)

      if (!response.ok) {
        throw new Error(`خطای سرور: ${response.status}`)
      }

      const data = await response.json()
      console.log('داده‌های دریافت شده:', data)

      return data
    },
    enabled: Boolean(pageUrl),
    staleTime: 300000,
  })
}

export {
  useSaveToLocalStorage,
  useGetFromLocalStorage,
  useRemoveFromLocalStorage,
  useScrollFixed,
  usePaginationData,
}
