"use client"
import HeroCard from '@/app/components/profile/HeroCard'
import ProfieleDetails from '@/app/components/profile/PersonalDetails'
import SuggestedCcard from '@/app/components/profile/SuggestedCard'
import { profiles } from '@/app/constants'
import React from 'react'

const Profile = () => {
   return (
      <>
         <div className='grid grid-cols-1 gap-5  my-3'>
            {
               profiles && profiles.filter((profile) => profile.gender === "Male").slice(0, 1).map((profileData, index) => {
                  return <div className='flex ms-10 '> <HeroCard key={index} profileData={profileData} /> </div>
               })
            }
         </div>
         <div className='w-full flex flex-row gap-x-5'>
            <div className='w-2/3'>
               <div>
                  {
                     profiles && profiles.filter((profile) => profile.gender === "Male").slice(0, 1).map((profileData, index) => {
                        return <div className='flex ms-10 '> <ProfieleDetails key={index} profileData={profileData} /> </div>
                     })
                  }
               </div>
            </div>
            <div className="w-1/3">
               <div className='grid grid-cols-1 gap-y-4'>
                  {
                     profiles && profiles.filter((profile) => profile.gender === "Male").slice(0, 5).map((profileData, index) => {
                        return <div className='flex ms-10 '> <SuggestedCcard key={index} profileData={profileData} /> </div>
                     })
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default Profile
