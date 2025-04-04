import React, { memo } from 'react'
import {
  NavBar,
  NavBarMobail,
} from '../shared/UIComponents/Layout/HeaderComponents/navBar/navBar'

type AdRegistrationContainerProps = {
  children: React.ReactNode
}

const AdRegistrationContainer: React.FC<AdRegistrationContainerProps> = memo(
  ({ children }) => {
    return (
      <>
        <div className="hidden lg:flex">
          <NavBar />
        </div>
        <div className="flex lg:hidden">
          <NavBarMobail />
        </div>
        <div className=" flex  bg-white w-full  h-185 rounded-2xl my-10 ">
          <div className=" hidden md:w-1/3 md:flex  ">
            <img
              className="w-full h-full rounded-r-2xl "
              src="/img/AdRegistrationPhoto.png"
              alt=""
            />
          </div>
          <div className=" w-full md:w-2/3  py-15  px-2 lg:px-10  xl:px-20.5 ">
            {children}
          </div>
        </div>
      </>
    )
  }
)
export default AdRegistrationContainer
