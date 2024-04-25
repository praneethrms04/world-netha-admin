import Image from 'next/image'
import React from 'react'

const SuccessMatchCard = ({ pair }) => {
   const { imgUrl, maleName, femaleName, date } = pair
   return (
      <article className="group shadow-md shadow-indigo-300 rounded-md px-4 py-2">
         <Image
            alt=""
            width={150}
            height={100}
            loading='lazy'
            src={imgUrl}
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
         />

         <div className="py-2">
            <p className="font-semibold text-lg">{femaleName} & {maleName} </p>
            <p className="text-base line-clamp-3 ">
               Married on {date}
            </p>
         </div>
      </article>
   )
}

export default SuccessMatchCard
