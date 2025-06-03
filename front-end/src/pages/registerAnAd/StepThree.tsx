import React, { useCallback, useState } from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar from '../../components/AdRegistration/ProgressBar'
import SectionHeaderAdRe from '../../components/AdRegistration/sectionHeader'
import Btn from '../../components/AdRegistration/btn'
import { Step } from '../../components/AdRegistration/ProgressBar'
import {
  Footer,
  FooterMobail,
} from '../../components/shared/UIComponents/Layout/footer/footer'
import Input from '../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  requiredValidator,
  onlyNumberValidator,
} from '../../validators/rules'
import { FormType } from '../../Hooks/useformType'
import UseForm from '../../Hooks/useForm'
import { MdSquareFoot, MdMeetingRoom } from 'react-icons/md'
import { MdLayers } from 'react-icons/md'
import { useAdvertisement } from '../../context/AdRegistration/useAdvertisement'

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'active' },
  { id: 4, status: 'pending' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

const StepThreeAdRE: React.FC = () => {
  document.title = 'مرحله ی سوم-ثبت آگهی'

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [formType] = useState<FormType>('adPosting')
  const [formState, onInputHandler, dispatch] = UseForm(formType)
  const { advertisementData } = useAdvertisement()
  console.log(advertisementData)

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

  const btnDisabled = !(
    formState.inputs.Floor?.isValid &&
    formState.inputs.Room?.isValid &&
    formState.inputs.Area?.isValid &&
    formState.inputs.NumberFloors?.isValid
  )

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container  ">
          <AdRegistrationContainer>
            <div className="flex flex-col w-full">
              <ProgressBar steps={steps} />
              {/* form */}
              <div className="flex flex-col">
                <SectionHeaderAdRe title="لطفا موارد زیر را تکمیل کنید" />
                {/* select box */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-9 mt-5">
                  <div>
                    <label className=" font-shabnamBold  mb-3 text-sm lg:text-lg ">
                      متراژ(متر مربع)
                    </label>

                    <Input
                      id="Area"
                      type="text"
                      shouldFormat={false}
                      placeholder="مساحت ملک خود را بنوسید"
                      element="text"
                      className=" w-full h-full   !outline-0 pr-10     py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                      validations={[
                        requiredValidator(),
                        minValidator(2),
                        maxValidator(6),
                        onlyNumberValidator(),
                      ]}
                      onInputHandler={handleInputChange}
                      onFocus={handleFocus}
                      errorMessage={formState.inputs.SalePrice?.errorMessage}
                      isFocused={isFocused}
                      validationMessageSuccess={` مساحت وارد شده معتبر است`}
                      validationMessageError={` مساحت وارد شده معتبر نیست`}
                      icon={
                        <MdSquareFoot className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      }
                    />
                  </div>
                  <div>
                    <label
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg "
                      htmlFor=""
                    >
                      اتاق
                    </label>
                    <Input
                      id="Room"
                      type="text"
                      shouldFormat={false}
                      placeholder="تعداد اتاق ها را بنوسید"
                      element="text"
                      className=" w-full h-full   !outline-0 pr-10    py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                      validations={[
                        requiredValidator(),
                        minValidator(1),
                        maxValidator(1),
                        onlyNumberValidator(),
                      ]}
                      onInputHandler={handleInputChange}
                      onFocus={handleFocus}
                      errorMessage={formState.inputs.SalePrice?.errorMessage}
                      isFocused={isFocused}
                      validationMessageSuccess={` تعداد اتاق های وارد شده معتبر است`}
                      validationMessageError={` تعداد اتاق های وارد شده معتبر است`}
                      icon={
                        <MdMeetingRoom className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      }
                    />
                  </div>
                  <div>
                    <label
                      className=" font-shabnamBold  mb-3 text-sm lg:text-lg"
                      htmlFor=""
                    >
                      طبقه
                    </label>
                    <Input
                      id="Floor"
                      type="text"
                      shouldFormat={false}
                      placeholder="طبقه واحد خود را وارد کنید"
                      element="text"
                      className=" w-full h-full   !outline-0 pr-10     py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                      validations={[
                        requiredValidator(),
                        minValidator(1),
                        maxValidator(2),
                        onlyNumberValidator(),
                      ]}
                      onInputHandler={handleInputChange}
                      onFocus={handleFocus}
                      errorMessage={formState.inputs.SalePrice?.errorMessage}
                      isFocused={isFocused}
                      validationMessageSuccess={` طبقه واحد وارد شده معتبر است`}
                      validationMessageError={` طبقه واحدوارد شده معتبر نیست`}
                      icon={
                        <MdLayers className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      }
                    />
                  </div>
                  <div>
                    <label className=" font-shabnamBold  mb-3 text-sm lg:text-lg ">
                      تعداد طبقات
                    </label>
                    <Input
                      id="NumberFloors"
                      type="text"
                      shouldFormat={false}
                      placeholder="تعداد کل طبقات ساختمان "
                      element="text"
                      className=" w-full h-full   !outline-0 pr-10   placeholder:t    py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                      validations={[
                        requiredValidator(),
                        minValidator(1),
                        maxValidator(2),
                        onlyNumberValidator(),
                      ]}
                      onInputHandler={handleInputChange}
                      onFocus={handleFocus}
                      errorMessage={formState.inputs.SalePrice?.errorMessage}
                      isFocused={isFocused}
                      validationMessageSuccess={` تعداد کل طبقات وارد شده معتبر است`}
                      validationMessageError={` تعداد کل طبقات وارد شده معتبر نیست`}
                      icon={
                        <MdLayers className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      }
                    />
                  </div>
                </div>
              </div>

              <div className=" flex   items-center justify-center  gap-x-3 mt-15 xl:mt-25 ">
                <Btn
                  title="قبلی "
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepTwo"
                  disabled={false}
                />
                <Btn
                  title={
                    btnDisabled ? ' اطلاعات مورد نیاز را وارد کنید' : 'ادامه '
                  }
                  link="/registerAnAd/StepFour"
                  disabled={btnDisabled}
                />
              </div>
            </div>{' '}
          </AdRegistrationContainer>
        </div>
        {/* // Footer */}
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default StepThreeAdRE
