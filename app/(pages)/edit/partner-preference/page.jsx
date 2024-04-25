'use client'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import citiesData from "../../../../app/utils/options/state_cities.json"
import FormControl from '@/app/components/ui/FormControl'
import { casteDataOptions, citizenshipDataOptions, complexionOptions, kujaDosamOptions, motherTongueOptions, nakshatrasOptions, occupationDataOptions, physicalStatusOptions, qualificationDataOptions, raashiOptions, religionOptions, stateDataOptions } from '@/app/utils/options'
import { Button } from '@/app/components/ui/Button'
import { getCurrentUser } from '@/app/lib/getCurrentUser'
import { getDatabase, ref, set } from 'firebase/database'
import app from '@/app/firebaseConfig'
import { toast } from 'react-toastify'


const PartnerPreference = () => {

   const [partnerCitiesOptions, setPartnerCitiesOption] = useState([])
   const [partnerState, setPartnerState] = useState('')
   const [partnerOptions, setPartnerOptions] = useState([])
   const [profileId, setProfileId] = useState()
   const [userData, setUserData] = useState({})
   const [dateOfBirth, setDateOfBirth] = useState(userData.dateOfBirth || "")

   const partnerSelectstate = (e) => {
      setPartnerState(e.target.value)
      getPartnerCityOptions(e.target.value)
   }
   const getPartnerCityOptions = (state) => {
      const res = citiesData.filter(cities => cities.State.toLocaleLowerCase() === state)
      const citiesObj = res.map((city) => {
         return {
            value: city.City,
            key: city.City.toLocaleLowerCase()
         }
      })
      setPartnerCitiesOption(citiesObj)
      document.getElementById('partnerState')
   }

   const fetchCurrentuser = async () => {
      const currentUser = await getCurrentUser()
      const { id, userObject } = currentUser
      setUserData(userObject)
      setProfileId(id)
      setPartnerState(userObject.partnerState || "")
      setDateOfBirth(userObject.dateOfBirth || "")
      setPartnerOptions([{ key: userObject?.partnerCity, value: userObject?.partnerCity }])

   }

   useEffect(() => {
      fetchCurrentuser()
   }, [])

   const initialValues = {
      firstName: userData.firstName || "",
      surname: userData.surname || "",
      email: userData.email || "",
      gender: userData.gender || "",
      maritalStatus: userData.maritalStatus || "",
      timeOfBirth: userData.timeOfBirth || "",
      placeOfBirth: userData.placeOfBirth || "",
      height: userData.height || "",
      nakshatram: userData.nakshatram || "",
      raashi: userData.raashi || "",
      gothram: userData.gothram || "",
      kujaDosam: userData.kujaDosam || "",
      complexion: userData.complexion || "",
      padam: userData.padam || "",
      // step 3
      motherTongue: userData.motherTongue || '',
      religion: userData.religion || "",
      caste: userData.caste || "",
      qualificationCategory: userData.qualificationCategory || "",
      qualificationDetails: userData.qualificationDetails || "",
      occupationCategory: userData.occupationCategory || "",
      occupationDetails: userData.occupationDetails || "",
      annualIncome: userData.annualIncome || "",
      physicalStatus: userData.physicalStatus || "",
      //step 4
      description: userData.description || "",
      // step 5
      fatherName: userData.fatherName || "",
      fatherOccupatiion: userData.fatherOccupatiion || "",
      motherName: userData.motherName || "",
      motherOccupatiion: userData.motherOccupatiion || "",
      noOfBrothers: userData.noOfBrothers || "",
      noOfSisters: userData.noOfSisters || "",
      // step 6
      citizenship: userData.citizenship || "",
      state: userData.state || "",
      city: userData.city || "",
      address: userData.address || "",
      contactNo: userData.contactNo || "",
      alternatephone: userData.alternatephone || "",
      familyDescriotion: userData.familyDescriotion || "",
      //step 7
      partnerQualificationCategory: userData.partnerQualificationCategory || "",
      partnerQualificationDetails: userData.partnerQualificationDetails || "",
      partnerOccupationCategory: userData.partnerOccupationCategory || "",
      partnerOccupationDetails: userData.partnerOccupationDetails || "",
      partnerCitizenship: userData.partnerCitizenship || "",
      partnerState: userData.partnerState || "",
      partnerCity: userData.partnerCity || "",
      //step 8
      partnerAgeFrom: userData.partnerAgeFrom || "",
      partnerAgeTo: userData.partnerAgeTo || "",
      partnerHeightFrom: userData.partnerHeightFrom || "",
      partnerHeightTo: userData.partnerHeightTo || "",
      partnerNakshatram: userData.partnerNakshatram || "",
      partnerRaashi: userData.partnerRaashi || "",
      partnerGothram: userData.partnerGothram || "",
      partnerMotherTongue: userData.partnerMotherTongue || '',
      partnerReligion: userData.partnerReligion || "",
      partnerCaste: userData.partnerCaste || "",
      partnerKujaDosam: userData.partnerKujaDosam || "",
      partnerComplexion: userData.partnerComplexion || "",
      partnerPhysicalStatus: userData.partnerPhysicalStatus || "",
      //step 9
      parterDescription: userData.parterDescription || "",
   };

   const updatePartnerPreference = (values) => {
      const data = {
         ...values,
         images: userData.images
      }
      const db = getDatabase(app)
      const updatedRef = ref(db, `users/${profileId}`)
      set(updatedRef, { ...data }).then(() => {
         toast.success("profile updated successfully")
      }).catch((error) => {
         toast.error(`error ${error.message}  `)
      })

   }


   return (
      <div>
         <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={updatePartnerPreference}
         >
            {
               (formikProps) => {
                  const { values } = formikProps
                  return (
                     <div>
                        <Form>
                           <div
                              className='flex flex-col gap-y-3'
                           //  onSubmit={formikProps.handleSubmit}
                           >
                              <h3 className='pb-2'>Partner Preferences</h3>
                              <div className='w-full flex gap-x-3'>
                                 <div className=' w-1/2'>
                                    <FormControl
                                       control="select"
                                       label="Education category "
                                       name="partnerQualificationCategory"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={qualificationDataOptions}
                                    />
                                 </div>
                                 <div className=' w-1/2'>
                                    <FormControl
                                       control="input"
                                       label="Education Details"
                                       name="partnerQualificationDetails"
                                       type='text'
                                       star="true"
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                 </div>
                              </div>
                              <div className='w-full flex gap-x-3'>
                                 <div className=' w-1/2'>
                                    <FormControl
                                       control="select"
                                       label="Occupation category "
                                       name="partnerOccupationCategory"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={occupationDataOptions}
                                    />
                                 </div>
                                 <div className=' w-1/2'>
                                    <FormControl
                                       control="input"
                                       label="Occupation Details"
                                       name="partnerOccupationDetails"
                                       type='text'
                                       star="true"
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                 </div>
                              </div>
                              <div className='w-full flex gap-x-3 '>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="Citizen of"
                                       name="partnerCitizenship"
                                       star="true"
                                       disabled
                                       inputStyles={`w-full text-black`}
                                       options={citizenshipDataOptions}
                                    />
                                 </div>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="State "
                                       name="partnerState"
                                       disabled
                                       star="true"
                                       value={partnerState}
                                       inputStyles={`w-full text-black`}
                                       onChange={partnerSelectstate}
                                       options={stateDataOptions}
                                    />
                                 </div>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="City"
                                       name="partnerCity"
                                       star="true"
                                       disabled
                                       inputStyles={`w-full text-black`}
                                       options={partnerOptions || partnerCitiesOptions || []}
                                    />
                                 </div>
                              </div>
                              <div className="flex flex-col gap-x-4">
                                 <div className='flex gap-x-2' >
                                    <FormControl
                                       control="input"
                                       label="Age From"
                                       name="partnerAgeFrom"
                                       type='number'
                                       star="true"
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                    <FormControl
                                       control="input"
                                       label="Age To"
                                       name="partnerAgeTo"
                                       type='number'
                                       star="true"
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                 </div>
                                 <div className='flex gap-x-2' >
                                    <FormControl
                                       control="input"
                                       label="Height From"
                                       name="partnerHeightFrom"
                                       type='number'
                                       star="true"
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                    <FormControl
                                       control="input"
                                       label="Height To"
                                       name="partnerHeightTo"
                                       type='number'
                                       star="true"
                                       inputStyles='w-full text-black '
                                       labelStyles='text-black'
                                    />
                                 </div>
                              </div>
                              <div className='flex gap-x-3 w-full'>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="Nakshatram"
                                       name="partnerNakshatram"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={nakshatrasOptions}
                                    />
                                 </div>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="Raashi "
                                       name="partnerRaashi"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={raashiOptions}
                                    />
                                 </div>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="input"
                                       label="Gothram"
                                       name="partnerGothram"
                                       placeholder="Enter Gothram"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                    />
                                 </div>
                              </div>
                              <div className='flex gap-x-3 w-full'>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="Mother Tongue"
                                       name="partnerMotherTongue"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={motherTongueOptions}
                                    />
                                 </div>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="Religion "
                                       name="partnerReligion"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={religionOptions}
                                    />
                                 </div>
                                 <div className='w-1/3' >
                                    <FormControl
                                       control="select"
                                       label="Caste "
                                       name="partnerCaste"
                                       star="true"
                                       inputStyles={`w-full text-black`}
                                       options={casteDataOptions}
                                    />
                                 </div>
                              </div>
                              <div className='flex items-center  gap-x-4'>
                                 <FormControl
                                    control="radio"
                                    label="Kuja Dosam "
                                    name="partnerKujaDosam"
                                    star="true"
                                    inputStyles={`w-full text-black`}
                                    options={kujaDosamOptions}
                                 />
                              </div>
                              <div className='flex items-center  gap-x-4'>
                                 <FormControl
                                    control="radio"
                                    label="Complexion "
                                    name="partnerComplexion"
                                    star="true"
                                    inputStyles={`w-full text-black`}
                                    options={complexionOptions}
                                 />

                              </div>
                              <div className='flex items-center  gap-x-4'>
                                 <FormControl
                                    control="radio"
                                    label="Physical Status "
                                    name="partnerPhysicalStatus"
                                    star="true"
                                    inputStyles={`w-full text-black`}
                                    options={physicalStatusOptions}
                                 />
                              </div>
                              <div>
                                 <FormControl
                                    control="textarea"
                                    label="About Partner"
                                    name="parterDescription"
                                    star="true"
                                    as="textarea"
                                    placeholder="write about your partner"
                                    rows={3}
                                    cols={40}
                                    inputStyles={`w-full text-black`}
                                 />
                              </div>
                              <div className=' flex space-x-4 my-2'>
                                 <Button size="small" className="px-2 rounded-md"> Cancel</Button>
                                 <Button variant="gray" size="small" className="px-2 rounded-md text-sm" > Save Changes</Button>
                              </div>
                           </div>
                        </Form>
                     </div>

                  )
               }
            }
         </Formik>
      </div>
   )
}

export default PartnerPreference
