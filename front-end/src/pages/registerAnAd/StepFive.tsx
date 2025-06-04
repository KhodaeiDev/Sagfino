import React, { useCallback, useEffect, useState } from 'react'
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
  persianValidator,
} from '../../validators/rules'

import { FormType } from '../../Hooks/useformType'
import UseForm from '../../Hooks/useForm'
import { useAdvertisement } from '../../context/AdRegistration/useAdvertisement'

const steps: Step[] = [
  { id: 1, status: 'completed' },
  { id: 2, status: 'completed' },
  { id: 3, status: 'completed' },
  { id: 4, status: 'completed' },
  { id: 5, status: 'active' },
  { id: 6, status: 'pending' },
]

const StepFiveAdRE: React.FC = () => {
  useEffect(() => {
    document.title = 'مرحله ی پنج-ثبت آگهی'
  }, [])

  const { setAdvertisementData } = useAdvertisement()

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [formType] = useState<FormType>('adPosting')
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

  useEffect(() => {
    setAdvertisementData((prevData) => ({
      ...prevData,
      description: formState.inputs.description.value,
      title: formState.inputs.title.value,
    }))
  }, [formState.inputs.title.value, formState.inputs.description.value])

  const btnDisabled = !(
    formState.inputs.title?.isValid && formState.inputs.description.isValid
  )

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container">
          <AdRegistrationContainer>
            <ProgressBar steps={steps} />
            <div className="flex flex-col">
              <SectionHeaderAdRe title="توضیحات اضافه خود را در این قسمت بنویسید" />
              {/* عنوان */}
              <div className="border border-gray-300 p-4 rounded-lg mt-6 bg-white w-full">
                <label className="text-lg font-shabnamBold">عنوان</label>
                <Input
                  id="title"
                  type="text"
                  shouldFormat={false}
                  placeholder="عنوان ملک خود را بنوسید"
                  element="text"
                  className=" w-full border border-dashed border-gray-400 outline-none focus:border-blue-500 p-2 mt-2  "
                  validations={[
                    requiredValidator(),
                    minValidator(20),
                    maxValidator(50),
                    persianValidator(),
                  ]}
                  onInputHandler={handleInputChange}
                  onFocus={handleFocus}
                  errorMessage={formState.inputs.SalePrice?.errorMessage}
                  isFocused={isFocused}
                  validationMessageSuccess={` عنوان وارد شده معتبر است`}
                  validationMessageError={` عنوان وارد شده معتبر نیست`}
                />
              </div>

              {/* توضیحات */}
              <div className="border border-gray-300 p-4 rounded-lg mt-6 bg-white w-full">
                <label className="text-lg font-shabnamBold">توضیحات</label>
                <Input
                  id="description"
                  type="text"
                  shouldFormat={false}
                  placeholder="توضیحات ملک خود را بنوسید"
                  element="text"
                  className=" w-full border border-dashed border-gray-400 outline-none focus:border-blue-500 p-2 mt-2  "
                  validations={[
                    requiredValidator(),
                    minValidator(12),
                    maxValidator(255),
                    persianValidator(),
                  ]}
                  onInputHandler={handleInputChange}
                  onFocus={handleFocus}
                  errorMessage={formState.inputs.SalePrice?.errorMessage}
                  isFocused={isFocused}
                  validationMessageSuccess={` توضیحات وارد شده معتبر است`}
                  validationMessageError={` توضیحات وارد شده معتبر نیست`}
                />
              </div>

              <div className="flex items-center justify-center gap-x-3 mt-10 lg:mt-25">
                <Btn
                  title="قبلی"
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepFour"
                  disabled={false}
                />
                <Btn
                  disabled={btnDisabled}
                  title={
                    btnDisabled ? ' اطلاعات مورد نیاز را وارد کنید' : 'ادامه '
                  }
                  link="/registerAnAd/StepSix"
                />
              </div>
            </div>
          </AdRegistrationContainer>
        </div>
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default StepFiveAdRE
