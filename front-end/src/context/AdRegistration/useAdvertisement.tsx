import { useContext } from 'react'
import { AdvertisementContext } from './AdRegistrationContext'

export const useAdvertisement = () => {
  const context = useContext(AdvertisementContext)
  if (!context) {
    throw new Error(
      'useAdvertisement must be used within an AdvertisementDataProvider'
    )
  }
  return context
}
