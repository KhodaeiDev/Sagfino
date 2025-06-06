import React, { useEffect, useState } from 'react'
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
import { useAdvertisement } from '../../context/AdRegistration/useAdvertisement'

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'completed' },
  { id: 4, status: 'active' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepFourAdRE: React.FC = () => {
  document.title = 'مرحله ی چهارم-ثبت آگهی'

  const selectBoxDatas = [
    {
      label: 'پارکینگ',
      id: 'parking',
      items: [
        { id: 1, name: 'دارد' },
        { id: 2, name: 'ندارد' },
      ],
    },
    {
      label: 'نوع سرویس بهداشتی',
      id: 'type_of_wc',
      items: [
        { id: 1, name: 'فرنگی' },
        { id: 2, name: 'ایرانی' },
        { id: 3, name: 'هردو' },
      ],
    },
    {
      label: 'آسانسور',
      id: 'elevator',
      items: [
        { id: 1, name: 'دارد' },
        { id: 2, name: 'ندارد' },
      ],
    },
  ]
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string
  }>({})

  const {  setAdvertisementData } = useAdvertisement()

  const handleSelect = (id: string, item: string) => {
    localStorage.setItem(
      id,
      id === 'type_of_wc'
        ? item === 'هردو'
          ? 'both'
          : item === 'ایرانی'
          ? 'wc'
          : 'farangi'
        : item === 'دارد'
        ? '1'
        : item === 'ندارد'
        ? '0'
        : String(item)
    )

    setAdvertisementData((prev) => ({
      ...prev,
      [id]:
        id === 'type_of_wc'
          ? item === 'هردو'
            ? 'both'
            : item === 'ایرانی'
            ? 'wc'
            : 'farangi'
          : item === 'دارد'
          ? '1'
          : item === 'ندارد'
          ? '0'
          : String(item),
    }))

    setSelectedOptions((prevState) => ({
      ...prevState,
      [id]: item,
    }))
  }

  useEffect(() => {
    const parking = localStorage.getItem('parking')
    const toilet = localStorage.getItem('type_of_wc')
    const elevator = localStorage.getItem('elevator')

    if (parking && toilet && elevator) {
      setSelectedOptions({
        parking: parking ? 'دارد' : 'ندارد',
        type_of_wc:
          toilet === 'wc'
            ? 'ایرانی'
            : toilet === 'farangi'
            ? 'فرنگی'
            : toilet === 'both'
            ? 'هردو'
            : 'نامشخص',
        elevator: elevator ? 'دارد' : 'ندارد',
      })
      setAdvertisementData((prev) => ({
        ...prev,
        parking: Number(parking),
        type_of_wc:
          toilet === 'فرنگی' ? 'farangi' : toilet === 'هردو' ? 'both' : 'wc',
        elevator: Number(elevator),
      }))
    }
  }, [])

  const btnDisabled = !(
    selectedOptions.parking &&
    selectedOptions.type_of_wc &&
    selectedOptions.elevator
  )

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-9 mt-5">
                  {selectBoxDatas.map((boxData) => (
                    <div
                      key={boxData.id}
                      className="flex flex-col items-start gap-1.5 font-shabnam text-sm"
                    >
                      <label className="text-sm lg:text-lg font-shabnamBold">
                        {boxData.label}
                      </label>
                      <SelectBox
                        options={boxData.items}
                        selectedOption={
                          selectedOptions[boxData.id] ||
                          'لطفاً یک گزینه انتخاب کنید'
                        }
                        onSelect={(name) => {
                          handleSelect(boxData.id, name)
                        }}
                        width="w-full"
                        responsiveWidth="w-full"
                        responsiveHeight="h-12"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" flex   items-center justify-center  gap-x-3 mt-10 xl:mt-25 ">
                <Btn
                  title="قبلی "
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepThree"
                  disabled={false}
                />
                <Btn
                  title={
                    btnDisabled ? ' اطلاعات مورد نیاز را وارد کنید' : 'ادامه '
                  }
                  link="/registerAnAd/StepFive"
                  disabled={btnDisabled}
                />
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
