import React, { useState } from 'react'
import { AdvertisementData } from './AdRegistration'
import { AdvertisementContext } from './AdRegistrationContext'

const getInitialData = (): AdvertisementData => {
  return {
    title: localStorage.getItem('title') || '',
    description: localStorage.getItem('description') || '',
    address: localStorage.getItem('address') || '',
    area: localStorage.getItem('area')
      ? Number(localStorage.getItem('area'))
      : 0,
    floor: localStorage.getItem('floor')
      ? Number(localStorage.getItem('floor'))
      : 0,
    number_of_floors: localStorage.getItem('number_of_floors')
      ? Number(localStorage.getItem('number_of_floors'))
      : 0,
    rooms: localStorage.getItem('rooms')
      ? Number(localStorage.getItem('rooms'))
      : 0,
    city: localStorage.getItem('city') || '',
    type_of_wc: localStorage.getItem('type_of_wc') || 'farangi',
    elevator: localStorage.getItem('elevator')
      ? Number(localStorage.getItem('elevator'))
      : 0,
    parking: localStorage.getItem('parking')
      ? Number(localStorage.getItem('parking'))
      : 0,
    transaction_type: localStorage.getItem('transaction_type') || 'sell',
    property_type: localStorage.getItem('property_type') || 'residential',
    sell_price: localStorage.getItem('sell_price')
      ? Number(localStorage.getItem('sell_price'))
      : null,
    rent_price: localStorage.getItem('rent_price')
      ? Number(localStorage.getItem('rent_price'))
      : null,
    mortgage_price: localStorage.getItem('mortgage_price')
      ? Number(localStorage.getItem('mortgage_price'))
      : null,
    images: localStorage.getItem('images')
      ? JSON.parse(localStorage.getItem('images')!)
      : [],
  }
}

export const AdvertisementDataProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [advertisementData, setAdvertisementData] = useState<AdvertisementData>(
    getInitialData()
  )

  return (
    <AdvertisementContext.Provider
      value={{ advertisementData, setAdvertisementData }}
    >
      {children}
    </AdvertisementContext.Provider>
  )
}
