import React from 'react'

export interface AdvertisementData {
  title: string
  description: string
  address: string
  area: number
  floor: number
  number_of_floors: number
  rooms: number
  city: string
  type_of_wc: string
  elevator: number
  parking: number
  transaction_type: string
  property_type: string
  sell_price: number | null
  rent_price: number | null
  mortgage_price: number | null
  images: File[] 
}



export interface AdvertisementContextType {
  advertisementData: AdvertisementData
  setAdvertisementData: React.Dispatch<React.SetStateAction<AdvertisementData>>
}
