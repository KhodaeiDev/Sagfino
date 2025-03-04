import React from 'react'
import SelectBox from '../selectBox/selectBox'
import { RiSearch2Line } from 'react-icons/ri'
import { TbFilterSearch } from 'react-icons/tb'

import { useState } from 'react'

const Sorting: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('نوع ملک')

  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }
  return (
    <>
      <div className=" container ">
        <div className=" flex items-center justify-between h-30 mt-22">
          <div className=" flex items-center justify-start gap-2 ">
            <SelectBox selectedOption={selectedOption} onSelect={handleSelect}>
              <li>مسکونی </li>
              <li>تجاری </li>
              <li>بازرگانی </li>
            </SelectBox>
            <SelectBox selectedOption={selectedOption} onSelect={handleSelect}>
              <li>مسکونی </li>
              <li>تجاری </li>
              <li>بازرگانی </li>
            </SelectBox>
            <SelectBox selectedOption={selectedOption} onSelect={handleSelect}>
              <li>مسکونی </li>
              <li>تجاری </li>
              <li>بازرگانی </li>
            </SelectBox>
            <SelectBox selectedOption={selectedOption} onSelect={handleSelect}>
              <li>مسکونی </li>
              <li>تجاری </li>
              <li>بازرگانی </li>
            </SelectBox>

            <div className=" flex items-center gap-2   cursor-pointer text-gray-1000 border-blue-400  shadow-blue-400/50  shadow-lg p-3 border w-41.5 h-12  rounded-lg">
              <TbFilterSearch className=" text-2xl" />
              <span>فیلتر های بیشتر </span>
            </div>
          </div>
          <div className="w-xl border border-gray-90 h-16 rounded-xl  flex items-center justify-between pl-4 pr-4.5 ">
            <div className=" flex items-center gap-3 text-gray-1000">
              <RiSearch2Line className=" text-2xl  " />
              <input
                placeholder="شهر مورد نظر را اضافه کنید"
                className=" outline-0 bg-transparent  placeholder:text-gray-1000 "
                type="text"
              />
            </div>
            {/* tag city */}
            <div className=" flex items-center ">
              <div className=" border border-gray-90 w-21.5 h-10 flex items-center justify-between p-2.5 rounded-lg">
                تهران
                <div className="  cursor-pointer w-5 h-5 rounded-full border border-black center">
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
