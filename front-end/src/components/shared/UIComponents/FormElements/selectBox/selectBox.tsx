import React, { ReactNode, ReactElement, useCallback } from 'react'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { memo } from 'react'

interface SelectBoxProps {
  children: ReactNode
  selectedOption: string
  onSelect: (option: string) => void
  width?: string
  height?: string
  responsiveWidth?: string
  responsiveHeight?: string
}

const SelectBox: React.FC<SelectBoxProps> = memo(
  ({
    children,
    selectedOption,
    onSelect,
    responsiveWidth = '',
    responsiveHeight = '',
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDropdown = useCallback(() => {
      setIsOpen(!isOpen)
    }, [setIsOpen, isOpen])

    const handleOptionClick = useCallback(
      (option: string) => {
        onSelect(option)
        setIsOpen(false)
      },
      [onSelect, setIsOpen]
    )

    return (
      <div
        className={`relative inline-flex justify-between bg-transparent rounded-lg shadow-lg border px-4 border-blue-400 shadow-blue-400/50 ${responsiveWidth} ${responsiveHeight}`}
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
          className={`absolute z-50 top-full mt-2 right-0 p-3 transition-all overflow-y-auto left-0 bg-white shadow-lg border border-blue-400 shadow-blue-400/50 gap-1.5 text-gray-1000 flex flex-col gap-y-2 font-shabnam xs:text-xs text-base rounded-lg transition-max-height duration-500 overflow-hidden ${
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
                  className: `list-none hover:bg-primary rounded-sm transition-all duration-500 hover:text-white cursor-pointer text-xs lg:text-sm px-4 py-2 ${
                    child.props.children === selectedOption
                      ? 'bg-primary text-white rounded-lg'
                      : ''
                  }`,
                }
              )
            }
            return child
          })}
        </div>
      </div>
    )
  }
)

export default SelectBox
