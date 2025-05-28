import React, { useState } from 'react'
import { SearchContext, SearchState } from './SearchContext'

const defaultState: SearchState = {
  transactionType: 'rent',
  city: '',
  result: null,
  isLoading: false,
}

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchState, setSearchState] = useState<SearchState>(defaultState) 

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  )
}
