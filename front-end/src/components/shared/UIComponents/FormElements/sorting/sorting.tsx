import React, { useState, useCallback } from 'react'
import SelectBox from '../selectBox/selectBox'
import { RiSearch2Line } from 'react-icons/ri'
import { TbFilterSearch } from 'react-icons/tb'

type SortingProps = {
  openModalFiltering: () => void
}

const Sorting: React.FC<SortingProps> = ({ openModalFiltering }) => {
  const [options, setOptions] = useState<string[]>([
    ' منطقه ',
    'نوع ملک',
    'قیمت',
    '  متراژ ',
  ])

  const handleSelect = useCallback((index: number, value: string) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[index] = value
      return newOptions
    })
  }, [])

  const selectBoxData = [
    {
      label: 'منطقه',
      items: ['منطقه 1', 'منطقه 2', 'منطقه 22', 'منطقه 16', 'منطقه 6'],
    },
    {
      label: 'نوع',
      items: ['مسکونی', 'تجاری', 'بازرگانی'],
    },
    {
      label: 'قیمت ',
      items: ['ارزان‌ترین', 'گران‌ترین'],
    },
    {
      label: 'متراژ',
      items: ['بالای 40', 'بالای 60', 'بالای 80', 'بالای 100'],
    },
  ]

  return (
    <>
      <div className="container">
        {/* Desktop */}
        <div className="hidden md:flex xl:flex-row md:flex-col-reverse gap-4 items-center justify-between h-30 mt-22">
          <div className="flex items-center justify-start gap-2">
            {selectBoxData.map((data, index) => (
              <SelectBox
                key={index}
                selectedOption={options[index]}
                onSelect={(option) => handleSelect(index, option)}
                width="w-27"
                responsiveWidth="w-27"
                responsiveHeight="h-12"
              >
                {data.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </SelectBox>
            ))}
            <div
              onClick={openModalFiltering}
              className="flex items-center gap-2 cursor-pointer text-gray-1000 border-blue-400 shadow-blue-400/50 shadow-lg p-3 border w-41.5 h-12 rounded-lg"
            >
              <TbFilterSearch className="text-2xl" />
              <span>فیلتر های بیشتر</span>
            </div>
          </div>
          <div className="w-xl border border-gray-90 h-16 rounded-xl flex items-center justify-between pl-4 pr-4.5">
            <div className="flex items-center gap-3 text-gray-1000">
              <RiSearch2Line className="text-2xl" />
              <input
                placeholder="شهر مورد نظر را اضافه کنید"
                className="outline-0 bg-transparent font-shabnam placeholder:text-gray-1000"
                type="text"
              />
            </div>
            <div className="flex items-center">
              <div className="border border-gray-90 w-21.5 h-10 flex items-center justify-between p-2.5 rounded-lg">
                تهران
                <div className="cursor-pointer w-5 h-5 rounded-full border border-black center">
                  x
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sorting
