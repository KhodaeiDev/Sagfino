import React, { useState } from 'react'
import { AdvertisementData } from './AdRegistration'
import { AdvertisementContext } from './AdRegistrationContext'

export const AdvertisementDataProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [advertisementData, setAdvertisementData] = useState<AdvertisementData>(
    {
      title: '',
      description: '',
      address: '',
      area: 0,
      floor: 0,
      number_of_floors: 0,
      rooms: 0,
      city: '',
      type_of_wc: 'farangi',
      elevator: 0,
      parking: 0,
      transaction_type: 'sell',
      property_type: 'residential',
      sell_price: undefined,
      rent_price: undefined,
      mortgage_price: undefined,
      images: [],
    }
  )

  return (
    <AdvertisementContext.Provider
      value={{ advertisementData, setAdvertisementData }}
    >
      {children}
    </AdvertisementContext.Provider>
  )
}
