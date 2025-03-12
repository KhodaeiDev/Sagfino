import React from 'react'
import { TiTick } from 'react-icons/ti'

const ProgressBar: React.FC = () => {
  return (
    <>
      <div className="  flex  items-center  justify-center     ">
        <div className="w-5 h-5 flex justify-center items-center lg:w-6.25 lg:h-6.25 bg-primary-tint-6 rounded-full">
          <TiTick className="text-white w-4.5 h-4.5" />
        </div>
        <div className=" h-0.5 bg-primary-tint-6  lg:w-21.5 w-8.5  "></div>
        <div className=" w-5 h-5 center  lg:w-6.25 lg:h-6.25 bg-primary-tint-6 rounded-full ">
          <div className="w-3 h-3 border-1 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
        <div className=" h-0.5 bg-gray-E1  lg:w-21.5 w-8.5 "></div>
        <div className=" w-5 h-5  lg:w-6.25 lg:h-6.25 bg-gray-ED rounded-full "></div>
        <div className=" h-0.5 bg-gray-E1  lg:w-21.5 w-8.5 "></div>
        <div className=" w-5 h-5  lg:w-6.25 lg:h-6.25 bg-gray-ED rounded-full "></div>
        <div className=" h-0.5 bg-gray-E1  lg:w-21.5 w-8.5 "></div>
        <div className=" w-5 h-5  lg:w-6.25 lg:h-6.25 bg-gray-ED rounded-full "></div>
        <div className=" h-0.5 bg-gray-E1  lg:w-21.5 w-8.5 "></div>
        <div className=" w-5 h-5  lg:w-6.25 lg:h-6.25 bg-gray-ED rounded-full "></div>
      </div>
    </>
  )
}

export default ProgressBar
