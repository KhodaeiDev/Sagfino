import React, { createContext } from 'react'
import { ButtonType } from '../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'
import { AdvertisementResponse } from '../../components/shared/UIComponents/Layout/HeaderComponents/headerContent/headerContent'

export interface SearchState {
  transactionType: ButtonType
  city: string
  result: AdvertisementResponse | null
  isLoading: boolean
}

export interface SearchContextProps {
  searchState: SearchState
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>
}

const defaultState: SearchState = {
  transactionType: 'rent',
  city: '',
  result: null,
  isLoading: true,
}

export const SearchContext = createContext<SearchContextProps>({
  searchState: defaultState,
  setSearchState: () => {},
})
