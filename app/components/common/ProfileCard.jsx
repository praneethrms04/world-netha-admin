
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as assets from "@/public/assets/index"

const ProfileCard = (props) => {
   const { profileData } = props
   console.log(profileData)


   return (
      <div className='shadow-sm rounded-lg px-4 shadow-indigo-500'  >
         <a href="#" className=" gap-3 rounded-lg py-4 px-4">
            <div>
               <Image
                  alt={profileData?.firstName}
                  src={profileData?.images ? profileData?.images[0] : assets.user}
                  width={150}
                  height={150}
                  className="h-56 w-full rounded-md object-cover"
               />
            </div>
            <div>
               <div className="mt-2">
                  <dl>
                     <div>
                        <p className="font-semibold text-lg capitalize">{profileData?.firstName}</p>
                     </div>
                     <div >
                        <p className=' line-clamp-3 capitalize'>{profileData?.description}</p>
                     </div>
                  </dl>
                  <div className="mt-2 flex flex-wrap lg:flex-none items-center gap-x-6">
                     <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div className="mt-1.5 sm:mt-0">
                           <h4 className='capitalize'>{profileData?.motherTongue}</h4>
                           <h4 className='w-28 truncate hover:w-full cursor-default' >{profileData?.occupationCategory} </h4>
                        </div>
                     </div>
                     <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div className="mt-1.5 sm:mt-0">
                           <h4>{profileData?.caste}</h4>
                           <h4>{profileData?.state?.name} </h4>
                        </div>
                     </div>
                     <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div className="mt-1.5 sm:mt-0">
                           <h4 >18 years</h4>
                           <h4 >{profileData?.religion} </h4>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='py-2'>
                  <Link href={`/profiles/${profileData?.id}`} className='text-[#726300] underline'>Full details</Link>
               </div>
            </div>

         </a>
      </div>
   )
}

export default ProfileCard
