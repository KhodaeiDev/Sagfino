import React, { useCallback, useEffect, useState } from 'react'
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
import Input from '../../components/shared/UIComponents/FormElements/input/input'
import {
  maxValidator,
  minValidator,
  requiredValidator,
  onlyNumberValidator,
} from '../../validators/rules'
import { MdAttachMoney } from 'react-icons/md'
import UseForm from '../../Hooks/useForm'
import { FormType } from '../../Hooks/useformType'
import { useAdvertisement } from '../../context/AdRegistration/useAdvertisement'

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
  const [dealType, setDealType] = useState('نوع معامله')
  const [propertyType, setPropertyType] = useState('نوع ملک')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [formType] = useState<FormType>('adPosting')
  const [formState, onInputHandler, dispatch] = UseForm(formType)
  const { setAdvertisementData } = useAdvertisement()

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

  const selectBoxData = [
    {
      label: ' نوع معامله ',
      items: [
        { id: 1, name: 'فروش' },
        { id: 2, name: 'اجاره' },
      ],
    },
    {
      label: 'نوع ملک',
      items: [
        { id: 1, name: 'تجاری' },
        { id: 2, name: 'مسکونی' },
      ],
    },
  ]

  const handleDealTypeSelect = useCallback(
    (value: string) => {
      setDealType(value)
      setAdvertisementData((prevData) => ({
        ...prevData,
        transaction_type: value === 'فروش' ? 'sell' : 'rent',
      }))
    },
    [setDealType]
  )

  const handlePropertyTypeSelect = useCallback(
    (value: string) => {
      setPropertyType(value)
      setAdvertisementData((prevData) => ({
        ...prevData,
        property_type: value === 'تجاری' ? 'Commercial' : 'Residential',
      }))
    },
    [setPropertyType]
  )
  useEffect(() => {
    setAdvertisementData((prevData) => ({
      ...prevData,
      sell_price:
        (dealType === 'فروش' && Number(formState.inputs.Sale.value)) || 0,
      rent_price:
        (dealType === 'اجاره' && Number(formState.inputs.Rent.value)) || 0,
      mortgage_price:
        (dealType === 'اجاره' && Number(formState.inputs.Mortgage.value)) || 0,
    }))
  }, [
    formState.inputs.Sale.value,
    formState.inputs.Rent.value,
    formState.inputs.Mortgage.value,
  ])

  const btnDisabled =
    dealType === 'نوع معامله' ||
    propertyType === 'نوع ملک' ||
    (dealType === 'فروش' && !formState.inputs.Sale?.isValid) ||
    (dealType === 'اجاره' &&
      (!formState.inputs.Rent?.isValid || !formState.inputs.Mortgage?.isValid))

  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container">
          <AdRegistrationContainer>
            <div className="flex flex-col w-full">
              <ProgressBar steps={steps} />
              <div className="flex flex-col">
                <SectionHeaderAdRe title="لطفا موارد زیر را تکمیل کنید" />

                {/* انتخاب نوع معامله و نوع ملک */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-9 mt-5">
                  <div className="flex flex-col items-start gap-1.5 font-shabnam text-sm">
                    <label className="text-sm lg:text-lg font-shabnamBold">
                      نوع معامله
                    </label>
                    <SelectBox
                      options={
                        selectBoxData.find(
                          (data) => data.label === ' نوع معامله '
                        )?.items || []
                      }
                      selectedOption={dealType}
                      onSelect={handleDealTypeSelect}
                      width="w-full"
                      responsiveWidth="w-full"
                      responsiveHeight="h-12"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-1.5 font-shabnam text-sm">
                    <label className="text-sm lg:text-lg font-shabnamBold">
                      نوع ملک
                    </label>
                    <SelectBox
                      options={
                        selectBoxData.find((data) => data.label === 'نوع ملک')
                          ?.items || []
                      }
                      selectedOption={propertyType}
                      onSelect={handlePropertyTypeSelect}
                      width="w-full"
                      responsiveWidth="w-full"
                      responsiveHeight="h-12"
                    />
                  </div>

                  {/* custom input */}
                  {dealType === 'فروش' && (
                    <div>
                      <label className="font-shabnamBold mb-3 text-sm lg:text-lg">
                        قیمت فروش
                      </label>
                      <Input
                        id="Sale"
                        type="text"
                        shouldFormat={true}
                        placeholder="مثلاً ۲۰ میلیون تومان (در صورت وارد کردن ۰، توافقی در نظر گرفته می‌شود)"
                        element="text"
                        className=" w-full h-full   !outline-0 pr-10 lg:pr-8 placeholder:text-[9px]   py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                        validations={[
                          requiredValidator(),
                          minValidator(1),
                          maxValidator(15),
                          onlyNumberValidator(),
                        ]}
                        onInputHandler={handleInputChange}
                        onFocus={handleFocus}
                        errorMessage={formState.inputs.SalePrice?.errorMessage}
                        isFocused={isFocused}
                        validationMessageSuccess={` قیمت وارد شده معتبر است`}
                        validationMessageError={` قیمت وارد شده معتبر نیست`}
                        icon={
                          <MdAttachMoney className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        }
                      />
                    </div>
                  )}

                  {dealType === 'اجاره' && (
                    <>
                      <div>
                        <label className="font-shabnamBold mb-3 text-sm lg:text-lg">
                          رهن
                        </label>
                        <Input
                          id="Mortgage"
                          type="text"
                          shouldFormat={true}
                          placeholder="مثلاً ۲۰ میلیون تومان (در صورت وارد کردن ۰، توافقی در نظر گرفته می‌شود)"
                          element="text"
                          className=" w-full h-full   !outline-0 pr-10 lg:pr-8 placeholder:text-[9px]   py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                          validations={[
                            requiredValidator(),
                            minValidator(1),
                            maxValidator(10),
                            onlyNumberValidator(),
                          ]}
                          onInputHandler={handleInputChange}
                          onFocus={handleFocus}
                          errorMessage={formState.inputs.Mortgage?.errorMessage}
                          isFocused={isFocused}
                          validationMessageSuccess={` قیمت وارد شده معتبر است`}
                          validationMessageError={` قیمت وارد شده معتبر نیست`}
                          icon={
                            <MdAttachMoney className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          }
                        />
                      </div>
                      <div>
                        <label className="font-shabnamBold mb-3 text-sm lg:text-lg">
                          اجاره
                        </label>
                        <Input
                          id="Rent"
                          type="text"
                          shouldFormat={true}
                          placeholder="مثلاً ۲۰ میلیون تومان (در صورت وارد کردن ۰، توافقی در نظر گرفته می‌شود)"
                          element="text"
                          className=" w-full h-full   !outline-0 pr-10 lg:pr-8 placeholder:text-[9px]   py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
                          validations={[
                            requiredValidator(),
                            minValidator(1),
                            maxValidator(15),
                            onlyNumberValidator(),
                          ]}
                          onInputHandler={handleInputChange}
                          onFocus={handleFocus}
                          errorMessage={formState.inputs.Rent?.errorMessage}
                          isFocused={isFocused}
                          validationMessageSuccess={` قیمت وارد شده معتبر است`}
                          validationMessageError={` قیمت وارد شده معتبر نیست`}
                          icon={
                            <MdAttachMoney className="absolute w-6 h-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* دکمه‌ها */}
              <div className="flex items-center justify-center gap-x-3 mt-10 xl:mt-25">
                <Btn
                  title="قبلی"
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  borderColor="border-primary"
                  link="/registerAnAd/StepOneAdRE"
                  disabled={false}
                />
                <Btn
                  disabled={btnDisabled}
                  title={
                    btnDisabled ? ' اطلاعات مورد نیاز را وارد کنید' : 'ادامه '
                  }
                  link="/registerAnAd/StepThree"
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

export default StepTwoAdRE
