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
import { getingCities } from '../../services/axois/request/public/publicRequest'
import Input from '../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  requiredValidator,
} from '../../validators/rules'
import UseForm from '../../Hooks/useForm'
import { FormType } from '../../Hooks/useformType'
import { IoLocationSharp } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'

const steps: Step[] = [
  { id: 1, status: 'active' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'pending' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepOneAdRE: React.FC = () => {
  document.title = 'مرحله ی اول-ثبت آگهی'

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['Cities'],
    queryFn: getingCities,
    staleTime: 5000,
    refetchOnMount: false,
  })

  const cities =
    data?.data?.map((city: { id: number; name: string }) => city.name) || []
  const selectBoxData = [
    {
      label: ' شهر ',
      items: cities,
    },
    {
      label: 'منطقه',
      items: ['منطقه 1', 'منطقه 2', 'منطقه 22', 'منطقه 16', 'منطقه 6'],
    },
  ]
  const [options, setOptions] = useState<string[]>([' شهر ', 'منطقه '])
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [formType, setFormType] = useState<FormType>('adPosting')

  const [formState, onInputHandler, dispatch] = UseForm(formType)

  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true)
    }
  }

  const handleInputChange = useCallback(
    (inputID: string, value: string, isValid: boolean) => {
      dispatch({ type: 'CLEAR_ERRORS' })
      onInputHandler(inputID, value, isValid)
    },
    [onInputHandler, dispatch]
  )
  const handleSelect = useCallback((index: number, value: string) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[index] = value
      return newOptions
    })
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

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
                <div className="  grid grid-cols-2 gap-x-4 gap-y-9 mt-5 ">
                  {selectBoxData && selectBoxData.length > 0 ? (
                    selectBoxData.map((data, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start gap-1.5 font-shabnam text-sm"
                      >
                        <label
                          htmlFor=" "
                          className="text-sm lg:text-lg font-shabnamBold"
                        >
                          {data.label}
                        </label>
                        <SelectBox
                          key={index}
                          selectedOption={options[index]}
                          onSelect={(option) => handleSelect(index, option)}
                          width="w-full"
                          responsiveWidth="w-full"
                          responsiveHeight="h-12"
                        >
                          {Array.isArray(data.items) &&
                          data.items.length > 0 ? (
                            data.items.map((item) => <li key={item}>{item}</li>)
                          ) : (
                            <li>در حال دریافت اطلاعات...</li>
                          )}
                        </SelectBox>
                      </div>
                    ))
                  ) : (
                    <p>اطلاعات موجود نیست</p>
                  )}

                  {/* input */}
                  {/* custom input */}
                  <div>
                    <label
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg"
                      htmlFor=""
                    >
                      آدرس
                    </label>
                    <div className=" ">
                      <Input
                        id="Address"
                        type="text"
                        placeholder=" آدرس  خود را وارد کنید "
                        element="text"
                        className=" w-full h-full   !outline-0    py-3  text-xs lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                        validations={[
                          requiredValidator(),
                          minValidator(15),
                          maxValidator(250),
                        ]}
                        onInputHandler={handleInputChange}
                        onFocus={handleFocus}
                        errorMessage={formState.inputs.name?.errorMessage}
                        isFocused={isFocused}
                        validationMessageSuccess={` آدرس  وارد شده معتبر است`}
                        validationMessageError={`   آدرس   وارد شده معتبر نیست`}
                        icon={
                          <IoLocationSharp className="absolute w-3.5 h-3.5 md:w-6 md:h-6  right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex   items-center justify-center  gap-x-3 mt-10 xl:mt-25 ">
                <Btn title="ادامه " link="/registerAnAd/StepTwo" />
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

export default StepOneAdRE
