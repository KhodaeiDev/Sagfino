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
import {
  getingProvinces,
  getingCities,
} from '../../services/axois/request/Advertisements/AdvertisementsRequest'
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
import { AxiosResponse } from 'axios'

const steps: Step[] = [
  { id: 1, status: 'active' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'pending' },
  { id: 5, status: 'pending' },
  { id: 6, status: 'pending' },
]

interface Province {
  id: number
  name: string
}

interface City {
  id: number
  name: string
}

const StepOneAdRE: React.FC = () => {



  document.title = 'مرحله ی اول-ثبت آگهی'
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const [formType] = useState<FormType>('adPosting')
  const [formState, onInputHandler, dispatch] = UseForm(formType)

 
  const { data: provincesData, isLoading } = useQuery({
    queryKey: ['Provinces'],
    queryFn: getingProvinces,
    staleTime: 5000,
    refetchOnMount: false,
  })

  const provinces: Province[] = Array.isArray(provincesData?.data)
    ? provincesData.data
    : []

  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  )
  const [selectedCity, setSelectedCity] = useState<string>(
    'شهر خود را انتخاب کنید'
  )

  const { data: citiesData, isLoading: isLoadingCities } = useQuery({
    queryKey: ['Cities', selectedProvince?.id],
    queryFn: async (): Promise<AxiosResponse> => {
      if (!selectedProvince?.id)
        return Promise.resolve({ data: [] } as AxiosResponse)
      return await getingCities(selectedProvince.id)
    },
    staleTime: 5000,
    refetchOnMount: false,
    enabled: !!selectedProvince,
  })

  const cities: City[] = Array.isArray(citiesData?.data) ? citiesData.data : []

  const handleProvinceSelect = (name: string, id: number) => {
    const province = provinces.find((p) => p.id === id)
    setSelectedProvince(province ? { ...province, name } : null)
    setSelectedCity('شهر خود را انتخاب کنید')
  }

  const handleCitySelect = (name: string) => {
    setSelectedCity(name)
  }

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

  const btnDisabled =
    !selectedProvince ||
    selectedCity === 'شهر خود را انتخاب کنید' ||
    !formState.inputs.Address?.isValid
  return (
    <>
      <div className="bg-AdRegistration bg-gray-ED min-h-screen">
        <div className="container">
          <AdRegistrationContainer>
            <div className="flex flex-col w-full">
              <ProgressBar steps={steps} />

              {/* فرم */}
              <div className="flex flex-col">
                <SectionHeaderAdRe title="لطفا موارد زیر را تکمیل کنید" />

                {/* انتخاب استان */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-9 mt-5">
                  <div className="flex flex-col items-start gap-1.5 font-shabnam text-sm">
                    <label className="text-sm lg:text-lg font-shabnamBold">
                      استان
                    </label>
                    <SelectBox
                      options={
                        isLoading
                          ? [{ id: 0, name: 'در حال بارگذاری...' }]
                          : provinces.map((p) => ({ id: p.id, name: p.name }))
                      }
                      selectedOption={
                        selectedProvince
                          ? selectedProvince.name
                          : 'لطفاً استان خود را انتخاب کنید'
                      }
                      onSelect={handleProvinceSelect}
                      width="w-full"
                      responsiveWidth="w-full"
                      responsiveHeight="h-12"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-1.5 font-shabnam   tsxt-[10px] md:text-sm">
                    <label className="text-sm lg:text-lg font-shabnamBold">
                      شهر
                    </label>
                    <SelectBox
                      options={
                        isLoadingCities
                          ? [{ id: 0, name: 'در حال بارگذاری...' }]
                          : cities.length
                          ? cities
                          : [{ id: 0, name: 'لطفاً استان خود را انتخاب کنید' }]
                      }
                      selectedOption={selectedCity}
                      onSelect={handleCitySelect}
                      width="w-full"
                      responsiveWidth="w-full"
                      responsiveHeight="h-12"
                    />
                  </div>
                  <div>
                    <label
                      className="font-shabnamBold mb-3 text-sm lg:text-lg"
                      htmlFor=""
                    >
                      آدرس
                    </label>
                    <div>
                      <Input
                        id="Address"
                        type="text"
                        placeholder=" آدرس  خود را وارد کنید "
                        element="text"
                        className=" w-full h-full   !outline-0 pr-10 lg:pr-8   py-3  text-sm  lg:text-base  bg-white border !border-blue-400 ! !shadow-blue-400/50 shadow flex items-center    rounded-lg mt-2 "
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
                          <IoLocationSharp className="absolute w-6 h-6 md:w-5 md:h-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* دکمه ادامه */}
              <div className="flex items-center justify-center gap-x-3 mt-10 xl:mt-25">
                <Btn
                  disabled={btnDisabled}
                  title={btnDisabled ? 'اطلاعات مورد نیاز را وارد' : 'ادامه '}
                  link="/registerAnAd/StepTwo"
                />
              </div>
            </div>
          </AdRegistrationContainer>
        </div>

        {/* فوتر */}
        <Footer />
        <FooterMobail />
      </div>
    </>
  )
}

export default StepOneAdRE
