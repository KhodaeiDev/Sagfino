import React from 'react'

type AdRegistrationContainerProps = {
  children: React.ReactNode
}

const AdRegistrationContainer: React.FC<AdRegistrationContainerProps> = ({
  children,
}) => {
  return (
    <>
      <div className=" flex  bg-white w-full min-h-screen xl:h-screen  rounded-2xl ">
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

export default AdRegistrationContainer
