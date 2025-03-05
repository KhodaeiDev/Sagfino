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
        {/* desktop */}
        <div className=" hidden md:flex   xl:flex-row md:flex-col-reverse gap-4  items-center justify-between h-30 mt-22">
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
                className=" outline-0 bg-transparent font-shabnam  placeholder:text-gray-1000 "
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
      {/* mobail */}
      <div className="container">
        <div className=" md:hidden flex items-center justify-between gap-1 mt-6 ">
          <h6 className=" text-Gray-35 font-shabnamBold xs:text-sm  text-base">
            {' '}
            املاک اجاره ی
          </h6>

          <div className="  xs:w-50 w-60.5 border border-gray-90 h-10 rounded-lg  flex items-center justify-between xs:pl-1 xs:pr-1  pl-4 pr-4.5 ">
            <div className=" flex items-center gap-3 text-gray-1000">
              <RiSearch2Line className=" text-lg  " />
              <input
                placeholder="شهر مورد نظر را اضافه کنید"
                className=" outline-0 w-full text-sm bg-transparent font-shabnam  placeholder:text-gray-1000 "
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="md:hidden flex items-center justify-between mt-9 ">
          <div>
            <span className="font-shabnam text-sm text-primary">
              ۴۷.۵۰۷ مورد
            </span>
          </div>
          <div className=' flex items-center gap-2' >
            <div className=" flex items-center justify-evenly gap-2   cursor-pointer text-gray-1000 border-blue-400  shadow-blue-400/50  shadow-lg p-3 border w-31.5 h-8  rounded-lg">
              <TbFilterSearch className=" text-lg" />
              <span>فیلتر ها </span>
            </div>
            <SelectBox selectedOption={selectedOption} onSelect={handleSelect}>
              <li>جدیدترین</li>
              <li>قدیمی ترین</li>
              <li>ارزان ترین</li>
              <li>گران ترین</li>
            </SelectBox>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sorting
