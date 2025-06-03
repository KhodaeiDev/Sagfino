import { createContext } from "react"
import { AdvertisementContextType } from "./AdRegistration"

export const AdvertisementContext = createContext<AdvertisementContextType | null>(
  null
)