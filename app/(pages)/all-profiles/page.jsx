"use client"


import ProfileCard from '@/app/components/common/ProfileCard';
import QuickSearch from '@/app/components/common/QuickSearch';
import getAllProfies from '@/app/lib/getAllProfiles';
import { ProfileCardLoader } from '@/app/utils/loaders';
import React, { useEffect, useState } from 'react'

const AllProfiles = () => {

   const [profiles, setProfiles] = useState([]);
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      fetchAllProfiles();
   }, []);

   const fetchAllProfiles = async () => {
      setLoading(true)
      try {
         const profilesData = await getAllProfies();
         setProfiles(profilesData);
         setLoading(false)

      } catch (error) {
         console.error("Error fetching male profiles:", error);
      }
   };
   return (
      <div>
         <QuickSearch />
         <section className='mx-auto max-w-screen-2xl' >
            <div>
               <h3 className=' font-serif mx-auto ms-10 my-4 text-[#726300]'>AllProfiles</h3>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
               {
                  loading ? [1, 2, 3, 4].map((_, ind) => <div className="flex ms-10"><ProfileCardLoader key={ind} /></div>) : (
                     <>
                        {
                           profiles.map((profileData, index) => {
                              return <div className='flex ms-10 '> <ProfileCard key={index} profileData={profileData} /> </div>
                           })
                        }
                     </>
                  )
               }
            </div>
         </section>

      </div>
   )
}

export default AllProfiles
