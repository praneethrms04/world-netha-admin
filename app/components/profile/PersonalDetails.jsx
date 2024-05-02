"use client"

"use client"
import { dateToAge } from '@/app/utils/helpers/dateToAge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'
import * as assets from "@/public/assets/index"

const ProfieleDetails = (props) => {
   const { profileData } = props
   console.log(profileData)
   return (
      <div className='shadow-sm rounded-lg px-4 py-4 border bg-[#F2F2F280]  shadow-[#b8b28d] w-full'  >
         <div >
            <div className="mt-2">
               <div className='flex flex-col gap-y-2'>
                  <div>
                     <h3 className='text-[#726300]' >Personal details</h3>
                  </div>
                  <div className="w-full flex flex-row">
                     <div className='w-1/2 flex flex-col gap-y-2'>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Full Name</p>
                           <p className='w-1/2 font-bold'>{profileData.firstName} {profileData.surname}  </p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Email</p>
                           <p className='w-1/2 font-bold'>{profileData.email}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Gender</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.gender}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Marital Status</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.maritalStatus}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Date of Birth</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.dateOfBirth}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Time of Birth</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.timeOfBirth}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Nakshatram</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.nakshatram}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Padam</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.padam}</p>
                        </div>
                     </div>
                     <div className='w-1/2 flex flex-col gap-y-2'>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Raashi</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.raashi}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Gothram</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.gothram}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Kuja Dosham</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.kujaDosam}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Complexion</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.complexion}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Mother Tongue</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.motherTongue}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Religin</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.height}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Caste</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.caste}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Physically challended</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData.physicalStatus}</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col gap-y-2 my-10'>
                  <div>
                     <h3 className='text-[#726300]' >Education Qualification</h3>
                  </div>
                  <div className="w-full flex flex-row">
                     <div className='w-1/2 flex flex-col gap-y-2'>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Qualification Category</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.qualificationCategory}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Qualification Details</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.qualificationDetails}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Occupation Category</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.occupationCategory}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Occupation Details</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.occupationDetails}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Annual Income</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.annualIncome}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='flex flex-col gap-y-2 my-10'>
                  <div>
                     <h3 className='text-[#726300]' >About Me</h3>
                  </div>
                  <div className="w-full flex flex-row">
                     <p>{profileData?.description}</p>
                  </div>
               </div>
               <div className='flex flex-col gap-y-2'>
                  <div>
                     <h3 className='text-[#726300]' >Fanily details</h3>
                  </div>
                  <div className="w-full flex flex-row">
                     <div className='w-1/2 flex flex-col gap-y-2'>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Father's Name</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.fatherName}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Father Occupation</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.fatherOccupatiion}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Mother's Name</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.motherName}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Mother Occupation</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.motherOccupatiion}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Brothers</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.noOfBrothers}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Sisters</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.noOfSisters}</p>
                        </div>

                     </div>
                     <div className='w-1/2 flex flex-col gap-y-2'>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Home Address</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.address}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Native City</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.city?.name}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Native State</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.state.name}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Citizen of</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.citizenship}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Contact No</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.contactNo}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>AlderNate No</p>
                           <p className='w-1/2 font-bold capitalize'>{profileData?.alternatephone === "" ? '-' : profileData?.alternatephone}</p>
                        </div>
                        {/* <div className='flex items-center '>
                           <p className='w-1/2'>Residing Country</p>
                           <p className='w-1/2 font-bold'>{dateToAge(profileData.dateOfBirth)} Years</p>
                        </div> */}
                     </div>
                  </div>
                  <div className='my-4'>
                     <p >{profileData?.familyDescriotion}</p>
                  </div>
               </div>

               <div className='flex flex-col gap-y-2'>
                  <div>
                     <h3 className='text-[#726300]' >Partener preferences</h3>
                  </div>
                  <div className="w-full flex flex-row">
                     <div className='w-1/2 flex flex-col gap-y-2'>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Age Difference</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerAgeFrom} - {profileData?.partnerAgeTo} years </p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Height Difference</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.fatherOccupatiion}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Nakshatram</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerNakshatram}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Raasi</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerRaashi}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Gothram</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerGothram}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Complexion</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerComplexion}</p>
                        </div>
                        <div className='flex items-center'>
                           <p className='w-1/2'>Mother Tongue</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerMotherTongue}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Religion</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerReligion}</p>
                        </div>    <div className='flex items-center '>
                           <p className='w-1/2'>Caste</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerCaste}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Physically challenged</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerPhysicalStatus}</p>
                        </div>

                     </div>
                     <div className='w-1/2 flex flex-col gap-y-2'>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Qualification Category</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerQualificationCategory}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Qualification Details</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerQualificationDetails}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Occupation Category</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerOccupationCategory}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>Occupation Details</p>
                           <p className='w-1/2 font-bold capitalize'> {profileData?.partnerOccupationDetails}</p>
                        </div>
                        {/* <div className='flex items-center '>
                           <p className='w-1/2'>Citizen of</p>
                           <p className='w-1/2 font-bold'>: {profileData?.partnerCitizenship}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>State</p>
                           <p className='w-1/2 font-bold'>: {profileData?.partnerState?.name}</p>
                        </div>
                        <div className='flex items-center '>
                           <p className='w-1/2'>City</p>
                           <p className='w-1/2 font-bold'>: {profileData?.partnerCity?.city}</p>
                        </div> */}

                        {/* <div className='flex items-center '>
                           <p className='w-1/2'>Residing Country</p>
                           <p className='w-1/2 font-bold'>{dateToAge(profileData.dateOfBirth)} Years</p>
                        </div> */}
                     </div>
                  </div>
                  <div className='flex flex-col gap-y-2 my-4 border px-2 py-4 border-[#726300] rounded-md bg-[#f8f5de] shadow-lg'>
                     <h3 className='text-[#726300]'>What I’m looking for in a partner?</h3>
                     <p>{profileData?.parterDescription}</p>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default ProfieleDetails
