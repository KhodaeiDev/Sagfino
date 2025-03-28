// import { useState, useEffect } from 'react'

// import CustomSkeletonLoader, {
//   Section,
//   ImageSection,
// } from '../../UIComponents/Feedback/SkeletonLoader/SkeletonLoader'

// const ConsultantBox = () => {
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 2000)
//     return () => clearTimeout(timer)
//   }, [])
 
//   return (
//     <>
//       <div className=" h-81 text-center flex flex-col gap-3.5 py-4 px-5 lg:px-17 lg:pt-4 lg:pb-6 rounded-2xl border border-gray-71">
//         {isLoading ? (
//           <CustomSkeletonLoader
//             width={width}
//             height={height}
//             imageSection={imageSection}
//             textSections={textSections}
//           />
//         ) : (
//           <>
//             <div className="w-full h-20.25 lg:w-full lg:h-35 rounded-full overflow-hidden">
//               <img
//                 className="w-full h-full"
//                 src="/img/Ellipse 6.png"
//                 alt="Consultant Image"
//               />
//             </div>
//             <h6 className="text-base lg:text-xl font-shabnamMedium lg:font-shabnamBold">
//               ماندانا تبریزی
//             </h6>
//             <span className="font-shabnam text-xs text-gray-71 lg:text-lg">
//               املاک ولیعصر
//             </span>
//             <span className="text-sm font-shabnam lg:text-lg text-gray-71">
//               امتیاز ۴ از ۵
//             </span>
//             <div className="cursor-pointer w-full h-8 lg:w-full lg:h-10 border text-primary center border-primary font-shabnamMedium text-sm rounded-lg">
//               نمایش پروفایل
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   )
// }

// export default ConsultantBox
