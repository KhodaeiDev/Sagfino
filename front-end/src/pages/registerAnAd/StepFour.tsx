import React, { useCallback, useState } from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import SelectBox from '../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import Btn from '../../components/AdRegistration/btn'
import { Step } from '../../components/AdRegistration/ProgressBar'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'


const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'completed' },
  { id: 4, status: 'active' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepFourAdRE: React.FC = () => {
  const selectBoxData = [
    {
      label: '  پارکینگ ',
      items: ['ندارد', 'دارد'],
    },
    {
      label: ' نوع سرویس بهداشتی',
      items: ['هردو', 'ایرانی', 'فرنگی'],
    },
    {
      label: ' انباری',
      items: ['ندارد', 'دارد'],
    },
    {
      label: ' آسانسور',
      items: ['ندارد', 'دارد'],
    },
  ]
  const [options, setOptions] = useState<string[]>([' پارکینگ  ', 'نوع سرویس',"انباری","آسانسور"])

  const handleSelect = useCallback((index: number, value: string) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[index] = value
      return newOptions
    })
  }, [])

  document.title = 'مرحله ی چهارم-ثبت آگهی'

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
                <div className=" flex flex-col  xl:flex-row items-center gap-4 justify-between mt-5 ">
                  <div className=" w-full flex-wrap  flex-col xl:flex-row   flex items-center gap-x-4 gap-y-5 xl:gap-y-30 justify-between">
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
                          responsiveWidth="w-65"
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
              </div>
              <div className=" flex   items-center justify-center  gap-x-3 mt-10 xl:mt-25 ">
                <Btn
                  title="قبلی "
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepThree"
                />
                <Btn title="ادامه " link="/registerAnAd/StepFive" />
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

export default StepFourAdRE
