
"use client"
import { dateToAge } from '@/app/utils/helpers/dateToAge'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { cmToFeetAndInches } from '@/app/utils/helpers/cmToFeet'


const SuggestedCcard = (props) => {
   const { profileData } = props
   console.log(profileData)
   return (
      <div className='shadow-sm rounded-lg px-4 py-4 border bg-[#F2F2F280]  shadow-[#b8b28d] w-full'  >
         <div className='flex flex-row gap-x-6'>
            <div className='flex items-center justify-center'>
               <Image
                  alt={profileData?.firstName}
                  src={profileData?.images[0]}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-md object-cover"
               />
            </div>
            <div className='flex flex-col gap-y-1'>
               <p className="font-semibold text-lg">{profileData?.name}</p>
               <div className='w-full flex items-center gap-x-3'>
                  {dateToAge(profileData.dateOfBirth)} Years,
                  {cmToFeetAndInches(profileData.height)}
                  {profileData.educationDetails} ,
                  {profileData.motherTongue},
                  {profileData.religion}
               </div>
               <div>
                  <Link href={`/profiles/${profileData?.id}`} className='text-[#726300] underline'>Full details</Link>
               </div>

            </div>
         </div>


      </div>
   )
}

export default SuggestedCcard
