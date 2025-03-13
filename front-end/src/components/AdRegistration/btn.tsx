import React from 'react'

interface BtnProps {
  title: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  logicManagement?: () => void
}

const Btn: React.FC<BtnProps> = ({
  title,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  borderColor = 'border-primary',
  logicManagement,
}) => {
  return (
    <div
      onClick={logicManagement}
      className={` cursor-pointer center w-22 h-8 lg:text-base  md:w-45.5 md:h-12 ${bgColor} border ${borderColor}  rounded-lg px-4 py-2 ${textColor} font-shabnam transition-all duration-300 hover:opacity-80`}
    >
      {title}
    </div>
  )
}

export default Btn
