import React, { useState } from 'react'
import { AdvertisementData } from './AdRegistration'
import { AdvertisementContext } from './AdRegistrationContext'

const getInitialData = (): AdvertisementData => {
  return {
    title: localStorage.getItem('title-value') || '',
    description: localStorage.getItem('description-value') || '',
    address: localStorage.getItem('Address-value') || '',
    area: localStorage.getItem('Area-value')
      ? Number(localStorage.getItem('Area-value'))
      : 0,
    floor: localStorage.getItem('Floor-value')
      ? Number(localStorage.getItem('Floor-value'))
      : 0,
    number_of_floors: localStorage.getItem('NumberFloors-value')
      ? Number(localStorage.getItem('NumberFloors-value'))
      : 0,
    rooms: localStorage.getItem('Room-value')
      ? Number(localStorage.getItem('Room-value'))
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
    rent_price: localStorage.getItem('Rent-value')
      ? Number(localStorage.getItem('Rent-value'))
      : null,
    mortgage_price: localStorage.getItem('Mortgage-value')
      ? Number(localStorage.getItem('Mortgage-value'))
      : null,
    images: localStorage.getItem('uploadedImages')
      ? JSON.parse(localStorage.getItem('uploadedImages')!)
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
