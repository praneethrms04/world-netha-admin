'use client'
import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import FormControl from '@/app/components/ui/FormControl'
import { annualIncomeDataOptions, casteDataOptions, complexionOptions, genderOptions, heightOptions, kujaDosamOptions, maritalOptions, motherTongueOptions, nakshatrasOptions, occupationDataOptions, padamOptions, physicalStatusOptions, placeOfBirthOptions, qualificationDataOptions, raashiOptions, religionOptions, timeOfBirthOptions } from '@/app/utils/options'
import { Button } from '@/app/components/ui/Button'
import getAllProfies from '@/app/lib/getAllProfiles'
import { getCurrentUser } from '@/app/lib/getCurrentUser'
import { getDatabase, ref, set } from 'firebase/database'
import app from '@/app/firebaseConfig'
import { toast } from 'react-toastify'

const PersonalInfo = () => {

  const [userData, setUserData] = useState({})
  const [dateOfBirth, setDateOfBirth] = useState(userData.dateOfBirth || "")
  const [profileId, setProfileId] = useState()

  const fetchCurrentuser = async () => {
    const currentUser = await getCurrentUser()
    const { id, userObject } = currentUser
    setUserData(userObject)
    setProfileId(id)
    setDateOfBirth(userObject.dateOfBirth || "")

  }

  useEffect(() => {
    fetchCurrentuser()
  }, [profileId])

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

  const updatePersonalInfo = (values) => {
    const data = {
      dateOfBirth: dateOfBirth,
      ...values,
      images: userData.images,

    }
    const db = getDatabase(app)
    const updatedRef = ref(db, `users/${profileId}`)
    set(updatedRef, { ...data }).then(() => {
      toast.success(' Updated Successfully')
    }).catch((err) => {
      toast.error(`error updating`.err.message)
    })

  }

  return (
    <div>
      <Formik
        // validationSchema={stepOnevalidationSchema}
        initialValues={initialValues}
        validateOnMount={true}
        validateOnChange={true}
        validateOnBlur={true}
        enableReinitialize
        onSubmit={updatePersonalInfo}
      >
        {
          (formikProps) => {
            const { values, errors, touched } = formikProps

            return (
              <Form>
                <div
                  className='flex flex-col gap-y-3'
                //  onSubmit={formikProps.handleSubmit}
                >

                  <h3 className='pb-4'>Personal Information</h3>
                  <div className='w-full flex flex-row gap-x-2 '>
                    <div className='w-1/2' >
                      <FormControl
                        control="input"
                        label="First Name"
                        name="firstName"
                        type='text'
                        star="true"
                        inputStyles='w-full text-black '
                        labelStyles='text-black'

                      />
                    </div>
                    <div className='w-1/2'>
                      <FormControl
                        control="input"
                        label="Surname"
                        name="surname"
                        type='text'
                        star="true"
                        inputStyles='w-full text-black '
                        labelStyles='text-black'
                      />
                    </div>
                  </div>
                  <div>
                    <div >
                      <FormControl
                        control="input"
                        label="Email"
                        name="email"
                        type='email'
                        star="true"
                        disabled={true}
                        inputStyles='w-full text-black '
                        labelStyles='text-black'
                      />
                    </div>
                  </div>

                  <div >
                    <div className='flex items-center  gap-x-4'>
                      <FormControl control="radio" label="Gender" name="gender" star={true} options={genderOptions} />
                    </div>
                  </div>
                  <div >
                    <div className='flex items-center  gap-x-4'>
                      <FormControl control="radio" label="Marital Status" name="maritalStatus" star={true} options={maritalOptions} />
                    </div>
                  </div>
                  <div className='w-full flex flex-row gap-4 items-center'>
                    <div className='w-1/3'>
                      <label className="flex flex-col">
                        <div className='font-semibold'>
                          Date of Birth <span className='text-red-600 font-semibold'>*</span>
                        </div>
                        <input
                          className="input-field border border-slate-400 py-[7px] px-2 rounded-md"
                          type="date"
                          placeholder="Select date of birth"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className='w-1/3'>
                      <FormControl
                        control="select"
                        label="Time of Birth "
                        name="timeOfBirth"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={timeOfBirthOptions}
                      />
                    </div>
                    <div className='w-1/3' >
                      <FormControl
                        control="select"
                        label="Place of Birth"
                        name="placeOfBirth"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={placeOfBirthOptions}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row gap-4 items-center">
                    <div className='w-1/3'>
                      <FormControl
                        control="select"
                        label="Height "
                        name="height"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={heightOptions}
                      />
                    </div>

                    <div className='w-1/3' >
                      <FormControl
                        control="select"
                        label="Nakshatram"
                        name="nakshatram"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={nakshatrasOptions}
                      />
                    </div>
                    <div className='w-1/3' >
                      <FormControl
                        control="select"
                        label="Raashi "
                        name="raashi"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={raashiOptions}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row gap-4 items-center">
                    <div className='w-1/3'>
                      <FormControl
                        control="select"
                        label="Padam"
                        name="padam"
                        placeholder="Select padam"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={padamOptions}
                      />
                    </div>
                    <div className='w-1/3' >
                      <FormControl
                        control="input"
                        label="Gothram"
                        name="gothram"
                        placeholder="Enter Gothram"
                        star="true"
                        inputStyles={`w-full text-black`}
                      />
                    </div>
                  </div>
                  <div className='flex items-center  gap-x-4'>
                    <FormControl
                      control="radio"
                      label="Kuja Dosam"
                      name="kujaDosam"
                      star="true"
                      options={kujaDosamOptions}
                    />
                  </div>
                  <div className='flex items-center  gap-x-4'>
                    <FormControl
                      control="radio"
                      label="Complexion"
                      name="complexion"
                      star="true"
                      options={complexionOptions}
                    />
                  </div>
                  <div className="w-full flex flex-row gap-4 items-center">
                    <div className='w-1/3'>
                      <FormControl
                        control="select"
                        label="Mother Tongue"
                        name="motherTongue"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={motherTongueOptions}
                      />
                    </div>
                    <div className='w-1/3' >
                      <FormControl
                        control="select"
                        label="Religion "
                        name="religion"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={religionOptions}
                      />

                    </div>
                    <div className='w-1/3' >
                      <FormControl
                        control="select"
                        label="Caste "
                        name="caste"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={casteDataOptions}
                      />

                    </div>
                  </div>
                  <div className='flex items-center  gap-x-4'>
                    <FormControl
                      control="radio"
                      label="Physical Status"
                      name="physicalStatus"
                      star="true"
                      options={physicalStatusOptions}
                    />
                  </div>
                  <div className='w-full flex gap-x-4'>
                    <div className='w-1/2'>
                      <FormControl
                        control="select"
                        label="Qualification category "
                        name="qualificationCategory"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={qualificationDataOptions}
                      />
                    </div>
                    <div className='w-1/2'>
                      <FormControl
                        control="textarea"
                        label="Qualification Details"
                        name="qualificationDetails"
                        star="true"
                        inputStyles={`w-full text-black`}
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-x-4">
                    <div className='w-1/2'>
                      <FormControl
                        control="select"
                        label="Occupation category "
                        name="occupationCategory"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={occupationDataOptions}
                      />
                    </div>
                    <div className='w-1/2'>
                      <FormControl
                        control="textarea"
                        label="Occupation Details"
                        name="occupationDetails"
                        star="true"
                        inputStyles={`w-full text-black`}
                      />
                    </div>
                  </div>
                  <div>
                    <FormControl
                      control="select"
                      label="Annual Income "
                      name="annualIncome"
                      star="true"
                      inputStyles={`w-[49%] text-black`}
                      options={annualIncomeDataOptions}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="textarea"
                      label="About Me"
                      name="description"
                      star="true"
                      as="textarea"
                      rows={3}
                      cols={40}
                      inputStyles={`w-full text-black`}
                    />
                  </div>
                </div>
                <div className=' flex space-x-4 my-2'>
                  <Button size="small" className="px-2 rounded-md"> Cancel</Button>
                  <Button type="submit" variant="gray" size="small" className="px-2 rounded-md text-sm" > Save Changes</Button>
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default PersonalInfo
