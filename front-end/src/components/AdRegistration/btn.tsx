import React from 'react'
import { NavLink } from 'react-router'

interface BtnProps {
  title: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  link?: string
}

const Btn: React.FC<BtnProps> = ({
  title,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  borderColor = 'border-primary',
  link = '',
}) => {
  console.log(link)
  return (
    <NavLink
      to={link}
      className={` cursor-pointer center w-35 h-8  text-nowrap text-xs lg:text-base  md:w-45.5 md:h-12 ${bgColor} border ${borderColor}  rounded-lg px-4 py-2 ${textColor} font-shabnam transition-all duration-300 hover:opacity-80`}
    >
      {title}
    </NavLink>
  )
}

export default Btn
