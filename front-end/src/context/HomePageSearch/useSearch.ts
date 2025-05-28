import { useContext } from 'react'
import { SearchContext } from './SearchContext'
import { SearchContextProps } from './SearchContext'


export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext)
  if (!context) {
    console.error('useSearch must be used within a SearchProvider')
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
