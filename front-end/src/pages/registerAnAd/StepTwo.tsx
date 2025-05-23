import React, { useCallback } from 'react'
import { useState } from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import Btn from '../../components/AdRegistration/btn'
import SelectBox from '../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import { Step } from '../../components/AdRegistration/ProgressBar'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'active' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'pending' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepTwoAdRE: React.FC = () => {
  document.title = 'مرحله ی دوم-ثبت آگهی'
  const selectBoxData = [
    {
      label: ' نوع معامله ',
      items: ['فروش', 'اجاره', 'رهن'],
    },
    {
      label: 'نوع ملک',
      items: ['مسکونی', 'تجاری', 'بازرگانی'],
    },
  ]
  const [options, setOptions] = useState<string[]>([' نوع معامله ', 'نوع ملک '])

  const handleSelect = useCallback((index: number, value: string) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[index] = value
      return newOptions
    })
  }, [])

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container ">
          <AdRegistrationContainer>
            <div className="flex flex-col w-full">
              <ProgressBar steps={steps} />
              {/* form */}
              <div className="flex flex-col">
                <SectionHeaderAdRe title="لطفا موارد زیر را تکمیل کنید" />
                {/* select box */}
                <div className=" flex flex-col xl:flex-row items-center gap-x-4 gap-y-2 justify-between mt-5 ">
                  <div className=" w-full  flex-col xl:flex-row   flex items-center gap-4 justify-between">
                    {selectBoxData.map((data, index) => (
                      <div className=" flex flex-col items-start gap-1.5   font-shabnam text-sm ">
                        <label
                          htmlFor=" "
                          className="  text-sm lg:text-lg font-shabnamBold "
                        >
                          {data.label}
                        </label>{' '}
                        <SelectBox
                          key={index}
                          selectedOption={options[index]}
                          onSelect={(option) => handleSelect(index, option)}
                          width="w-72.5 "
                          responsiveWidth="w-72"
                          responsiveHeight="h-12"
                        >
                          {data.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </SelectBox>
                      </div>
                    ))}
                  </div>
                </div>
                {/* input */}
                <div className=" flex flex-col xl:flex-row items-center gap-4 justify-between mt-5 xl:mt-30 ">
                  {/* custom input */}
                  <div>
                    <label
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg"
                      htmlFor=""
                    >
                      رهن
                    </label>
                    <div className=" p-2 text-base  border-blue-400 shadow-blue-400/50 shadow-lg   flex items-center  w-72.5 h-12  border  rounded-lg mt-2 ">
                      <input
                        placeholder=" مثلا 50 ملیون تومان "
                        className=" placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg "
                      htmlFor=""
                    >
                      اجاره
                    </label>
                    <div className=" p-2  text-base  flex items-center w-72.5 h-12  border shadow-lg   border-blue-400 shadow-blue-400/50  rounded-lg mt-2 ">
                      <input
                        placeholder="مثلا 20 ملیون تومان "
                        className=" placeholder:text-gray-1000 border-0 outline-0 bg-transparent "
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex   items-center justify-center  gap-x-3 mt-10 xl:mt-25 ">
                <Btn
                  title="قبلی "
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepOneAdRE"
                />
                <Btn title="ادامه " link="/registerAnAd/StepThree" />
              </div>
            </div>
          </AdRegistrationContainer>
        </div>
        {/* // Footer */}
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default StepTwoAdRE
