
"use client"
import { dateToAge } from '@/app/utils/helpers/dateToAge'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/Button'
import * as assets from "@/public/assets/index"
import ReactModal from 'react-modal'
import PhotoGallary from './PhotoGallary'
import SendInterest from './SendInterest'
import Protected from "@/app/hooks/useProtected"
import { cmToFeetAndInches } from '@/app/utils/helpers/cmToFeet'
import { useRouter } from 'next/navigation'

const HeroCard = (props) => {

   const router = useRouter()

   const { profileData } = props
   const [showGallary, setShowGallary] = useState(false);
   const [showInterest, setShowInterest] = useState(false);

   const onRequestClose = () => {
      setShowInterest((prev) => !prev)
   }

   const gotoEdit = () => {

      localStorage.setItem('user', JSON.stringify(profileData))
      router.push("/edit/photos")


   }


   const handleShowInterest = () => {
      const token = localStorage.getItem("token")
      if (token) {
         setShowInterest((prev) => !prev)
      } else {
         alert("please login to send interest")
      }
   }

   return (
      <div className='shadow-sm rounded-lg px-4 py-4 border bg-[#F2F2F280]  shadow-[#b8b28d] w-full'  >
         <div className=" w-full flex flex-row gap-3 rounded-lg py-4 px-4">
            <div className='w-[40%] relative'>
               <Image
                  alt={profileData?.name}
                  src={profileData?.images ? profileData?.images[0] : assets.user}
                  width={150}
                  height={150}
                  className="h-52 w-[25rem] rounded-md object-contain"
               />
               <Button variant="white" size="small" className="absolute bottom-4 right-[27%]" onClick={() => setShowGallary((prev) => !prev)}>View Photos</Button>
            </div>
            <div className='w-[60%]'>
               <div className='mb-2 flex items-center justify-between'>
                  <p className="font-semibold text-lg capitalize">{profileData?.firstName} {profileData?.surname} </p>
                  {/* <Button size="small" className="text-sm font-normal px-4 py-2 border-[#726300]" onClick={gotoEdit} >
            
                     <Image src={assets.save} width={15} height={15} alt='save' /> <span>Edit</span>
                  </Button> */}
               </div>
               <div className="mt-2">
                  <div className='flex flex-col gap-y-2'>
                     <div>
                        <h3 className='text-[#726300]' >Profile Highlights</h3>
                     </div>
                     <div className='w-full flex flex-row items-center gap-x-3'>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Age</p>
                           {/* <p className='font-bold'>{dateToAge(profileData.dateOfBirth)} Years</p> */}
                        </div>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Qualification</p>
                           <p className='font-bold capitalize'>{profileData.qualificationCategory} </p>
                        </div>

                     </div>
                     <div className='w-full flex flex-row items-center gap-x-3'>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Height</p>
                           <p className='font-bold capitalize'>{profileData.height}</p>
                        </div>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Religion / Community</p>
                           <p className='font-bold capitalize'>{profileData.religion} </p>
                        </div>
                     </div>
                     <div className='w-full flex flex-row items-center gap-x-3'>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Mother Tongue</p>
                           <p className='font-bold capitalize'>{profileData.motherTongue}</p>
                        </div>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Martial Status </p>
                           <p className='font-bold capitalize'>{profileData.maritalStatus} </p>
                        </div>
                     </div>
                     <div className='w-full flex flex-row items-center gap-x-3'>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>State</p>
                           <p className='font-bold capitalize'>{profileData.state?.name}</p>
                        </div>
                        <div className='w-1/2 flex items-center gap-x-4'>
                           <p>Salary </p>
                           <p className='font-bold capitalize'>{profileData.annualIncome} </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
         <ReactModal
            isOpen={showGallary}
            onRequestClose={() => setShowGallary(false)}
            style={customStyles}

         >
            <PhotoGallary images={profileData?.images} />
         </ReactModal>


      </div>
   )
}

export default HeroCard

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "750px",
      height: "550px",
      bottom: 'auto',
      border: '1px solid #726300',
      borderRadius: "15px",
      // backgroundColor:"#C4E4FF",
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
   },
};
