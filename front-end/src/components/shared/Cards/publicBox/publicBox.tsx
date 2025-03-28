const PublicBox: React.FC = () => {
  return (
    <>
      <div className=" bg-boxHelp  border  border-gray-D9  rounded-lg">
        <img
          className=" w-full h-36.25 lg:h-59.75 rounded-t-lg"
          src="/img/Rectangle 52.jpg"
          alt="img"
        />
        <div className="text-gray-1000 px-5.5 pb-5 pt-3 xl:px-20 xl:pb-8 xl:pt-4 center flex-col">
          <h3 className=" font-shabnamBold text-base lg:text-xl ">۲۷.۳۳۹</h3>
          <span className=" font-shabnam text-base lg:text-base">
            تجاری و اداری
          </span>
        </div>
      </div>
    </>
  )
}

export default PublicBox
