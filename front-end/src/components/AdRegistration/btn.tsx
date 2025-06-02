import React, { memo } from 'react'
import { NavLink } from 'react-router'

interface BtnProps {
  title: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  link?: string
  disabled: boolean
}

const Btn: React.FC<BtnProps> = memo(
  ({
    title,
    bgColor = 'bg-primary',
    textColor = 'text-white',
    borderColor = 'border-primary',
    link = '',
    disabled,
  }) => {
    return (
      <NavLink
        to={disabled ? '#' : link}
        className={`transition-all duration-300 ${bgColor} border ${borderColor} rounded-lg px-3 lg:px-15 py-2 ${textColor} font-shabnam ${
          disabled
            ? 'opacity-40 !cursor-not-allowed '
            : 'hover:opacity-80 !cursor-pointer'
        }`}
        onClick={(event) => disabled && event.preventDefault()}
      >
        {title}
      </NavLink>
    )
  }
)


export default Btn
