import React from 'react'

type AdRegistrationContainerProps = {
  children: React.ReactNode
}

const AdRegistrationContainer: React.FC<AdRegistrationContainerProps> = ({
  children,
}) => {
  return (
    <>
      <div className=" flex  bg-white w-full h-screen rounded-2xl ">
        <div className=" w-1/3  ">
          <img
            className="w-full h-full rounded-r-2xl "
            src="/img/AdRegistrationPhoto.png"
            alt=""
          />
        </div> 
        <div className=" w-2/3 center ">{children}</div>
      </div>
    </>
  )
}

export default AdRegistrationContainer
