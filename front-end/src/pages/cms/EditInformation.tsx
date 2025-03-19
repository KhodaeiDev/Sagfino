import React from 'react'
import CMSLayout from '../../components/cms/CMSLayout'
import { CgProfile } from 'react-icons/cg'

const EditInformation: React.FC = () => {
  return (
    <>
      <CMSLayout title="ویرایش اطلاعات">
        <div className=" mt-6 pr-35">
          <div className=" w-25.5 h-25.5 border border-gray-AD rounded-lg center  ">
            <CgProfile className=" w-17 h-7/12 text-gray-71 " />
          </div>
        </div>
      </CMSLayout>
    </>
  )
}

export default EditInformation
