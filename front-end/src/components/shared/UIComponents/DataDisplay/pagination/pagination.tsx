const Pagination = () => {
  return (
    <>
      <div className=" flex flex-row-reverse  items-center  justify-between  gap-x-3  mb-6">
        <div className=" center rounded-lg cursor-pointer font-shabnamMedium text-black text-sm border border-gray-E1 w-5.5 h-5.5  md:w-8.25 md:h-8.25 ">
          1
        </div>
        <div className="center font-shabnamMedium cursor-pointer text-sm border border-blue-500 w-5.5 h-5.5 md:w-8.25 md:h-8.25 shadow-sm shadow-blue-500 text-blue-500 rounded-lg">
          2
        </div>

        <div className=" center rounded-lg cursor-pointer font-shabnamMedium text-black text-sm border border-gray-E1 w-5.5 h-5.5  md:w-8.25 md:h-8.25 ">
          3
        </div>
        <div className=" center rounded-lg cursor-pointer font-shabnamMedium text-black text-sm border border-gray-E1 w-5.5 h-5.5  md:w-8.25 md:h-8.25 ">
          4
        </div>
        <div className=" center rounded-lg cursor-pointer font-shabnamMedium text-black text-sm border border-gray-E1 w-5.5 h-5.5  md:w-8.25 md:h-8.25 ">
          5
        </div>
      </div>
    </>
  )
}

export default Pagination
