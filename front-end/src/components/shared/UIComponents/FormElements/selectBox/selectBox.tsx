import React, { useState, useCallback } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { memo } from 'react'

interface SelectBoxProps {
  options: { id: number; name: string }[]
  selectedOption: string
  onSelect: (name: string, id: number) => void
  width?: string
  responsiveWidth?: string
  responsiveHeight?: string
  children?: React.ReactNode
}

const SelectBox: React.FC<SelectBoxProps> = memo(
  ({
    options,
    selectedOption,
    onSelect,
    responsiveWidth = '',
    responsiveHeight = '',
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDropdown = useCallback(() => {
      setIsOpen((prev) => !prev) 
    }, [])

    const handleOptionClick = useCallback(
      (name: string, id: number) => {
        if (id !== 0) {
          onSelect(name, id)
          setIsOpen(false)
        }
      },
      [onSelect]
    )

    return (
      <div
        className={`relative inline-flex bg-transparent rounded-lg border px-4 border-blue-400 shadow-blue-400/50 ${responsiveWidth} ${responsiveHeight}`}
      >
        <div
          className="flex items-center justify-between w-full cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="text-gray-1000 text-sm">{selectedOption}</div>
          <span
            className={`transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <IoIosArrowDown className="text-lg text-gray-1000" />
          </span>
        </div>

        {isOpen && (
          <div className="absolute z-50 flex flex-col gap-y-2 top-full min-h-auto max-h-50 overflow-y-auto left-0 right-0 mt-2 p-3 bg-white shadow-lg border border-blue-400 rounded-lg">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={
                  option.id !== 0
                    ? () => handleOptionClick(option.name, option.id)
                    : undefined
                }
                className={`list-none rounded-sm transition-all duration-500 cursor-pointer px-4 py-2 
                  hover:bg-primary hover:text-white 
                  ${
                    option.id === 0 ? 'text-gray-400 pointer-events-none' : ''
                  }  
                  ${
                    option.name === selectedOption
                      ? 'bg-primary text-white'
                      : ''
                  }`}
              >
                {option.name}
              </li>
            ))}
          </div>
        )}
      </div>
    )
  }
)

export default SelectBox

