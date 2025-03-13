import React, { ReactNode, ReactElement } from 'react'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface SelectBoxProps {
  children: ReactNode
  selectedOption: string
  onSelect: (option: string) => void
  width?: string
  height?: string
}

const SelectBox: React.FC<SelectBoxProps> = ({
  children,
  selectedOption,
  onSelect,
  width = 'w-40',
  height = 'h-12',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <>
      <div
        className={`relative inline-flex justify-between bg-transparent rounded-lg shadow-lg border px-4 border-blue-400 shadow-blue-400/50 ${width} ${height}`}
      >
        <div
          className="flex gap-1.5 items-center justify-between w-full cursor-pointer"
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
        <div
          className={`absolute z-50 top-full mt-2 right-0 left-0 bg-white shadow-lg border border-blue-400 shadow-blue-400/50 flex-col px-0 py-0 gap-1.5 text-gray-1000 font-shabnam xs:text-xs text-base rounded-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? 'opacity-100 max-h-64'
              : 'opacity-0 max-h-0 pointer-events-none'
          }`}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<{ children: string }>(child)) {
              return React.cloneElement(
                child as ReactElement<unknown> as ReactElement<{
                  onClick: () => void
                  className: string
                }>,
                {
                  onClick: () => handleOptionClick(child.props.children),
                  className: `cursor-pointer text-xs lg:text-lg px-4 py-2 ${
                    child.props.children === selectedOption
                      ? 'bg-red-300 text-black opacity-75'
                      : ''
                  }`,
                }
              )
            }
            return child
          })}
        </div>
      </div>
    </>
  )
}

export default SelectBox
