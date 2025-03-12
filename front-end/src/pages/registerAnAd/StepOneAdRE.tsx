import React from 'react'
import AdRegistrationContainer from '../../components/AdRegistration/AdRegistrationContainer'
import ProgressBar from '../../components/AdRegistration/ProgressBar'

const StepOneAdRE: React.FC = () => {
  return (
    <>
      <div className=" bg-gray-ED ">
        <div className="container  py-20 ">
          <AdRegistrationContainer>
            <div className=" flex flex-col w-full ">
              <ProgressBar />
            </div>
          </AdRegistrationContainer>
        </div>
      </div>
    </>
  )
}

export default StepOneAdRE
