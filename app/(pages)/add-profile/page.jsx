
'use client'
import { Field, Formik } from 'formik'
import React, { useEffect, useState, useCallback } from 'react'
import { getDownloadURL, storage, getStorage, ref as storageRef, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import * as yup from 'yup'
import citiesData from "../../utils/options/state_cities.json"
import { annualIncomeDataOptions, brothersDataOptions, casteDataOptions, citizenshipDataOptions, complexionOptions, genderOptions, heightOptions, kujaDosamOptions, maritalOptions, motherTongueOptions, nakshatrasOptions, occupationDataOptions, padamOptions, physicalStatusOptions, placeOfBirthOptions, qualificationDataOptions, raashiOptions, religionOptions, sistersDataOptions, stateDataOptions, timeOfBirthOptions } from '@/app/utils/options'
import { getDatabase, push, ref, set } from 'firebase/database'
import { useDropzone } from 'react-dropzone'
import { IoCloudUploadOutline } from "react-icons/io5";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import app, { auth } from '@/app/firebaseConfig'
import { toast } from 'react-toastify';
import FormControl from '@/app/components/ui/FormControl';
import MultiStepForm, { FormStep } from '@/app/components/ui/MultiStepForm';
import ImagePreView from '@/app/components/profile/ImagePreView';
import { useRouter } from 'next/navigation';


const AddProfile = () => {

   const router = useRouter()
   const [dateOfBirth, setDateOfBirth] = useState('')
   const [state, setState] = useState('')
   const [partnerState, setPartnerState] = useState('')
   const [citiesOptions, setCitiesOption] = useState([])
   const [partnerCitiesOptions, setPartnerCitiesOption] = useState([])
   const [files, setFiles] = useState([])
   const [imageUrls, setImageUrls] = useState([])
   const [successModal, setSuccessModal] = useState(true)
   const { acceptedFiles, getRootProps, getInputProps, } = useDropzone({
      disabled: false,
      noDrag: false,
      onDrop: (acceptedFiles) => {
         const formattedFiles = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)

         }))
         setFiles((prevFiles) => [...prevFiles, ...formattedFiles])
      }

   })

   const thumbs = files.map((file) => {
      return (
         <div className='flex fle-row gap-2 '>
            <ImagePreView file={file} />
         </div>
      )
   })

   const initialValues = {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      gender: "",
      maritalStatus: "",
      timeOfBirth: "",
      placeOfBirth: "",
      height: "",
      nakshatram: "",
      raashi: "",
      gothram: "",
      kujaDosam: "",
      complexion: "",
      padam: "",
      // step 3
      motherTongue: '',
      religion: "",
      caste: "",
      qualificationCategory: "",
      qualificationDetails: "",
      occupationCategory: "",
      occupationDetails: "",
      annualIncome: "",
      physicalStatus: "",
      //step 4
      description: "",
      // step 5
      fatherName: "",
      fatherOccupatiion: "",
      motherName: "",
      motherOccupatiion: "",
      noOfBrothers: "",
      noOfSisters: "",
      // step 6
      citizenship: "",
      state: "",
      city: "",
      address: "",
      contactNo: "",
      alternatephone: "",
      familyDescriotion: "",
      //step 7
      partnerQualificationCategory: "",
      partnerQualificationDetails: "",
      partnerOccupationCategory: "",
      partnerOccupationDetails: "",
      partnerCitizenship: "",
      partnerState: "",
      partnerCity: "",
      //step 8
      partnerAgeFrom: "",
      partnerAgeTo: "",
      partnerHeightFrom: "",
      partnerHeightTo: "",
      partnerNakshatram: "",
      partnerRaashi: "",
      partnerGothram: "",
      partnerMotherTongue: '',
      partnerReligion: "",
      partnerCaste: "",
      partnerKujaDosam: "",
      partnerComplexion: "",
      partnerPhysicalStatus: "",
      //step 9
      parterDescription: "",

   }


   const handleFormSubmit = async (values) => {
      try {

         const data = {
            ...values,
            state: state,
            partnerState: partnerState,
            dateOfBirth: dateOfBirth,
            images: imageUrls
         };

         // Save user data to the database
         const db = getDatabase(app);
         const newUserRef = push(ref(db, 'users'));
         await set(newUserRef, data);

         // Sign up user with email and password
         const { email, password } = data;
         const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
         const user = userCredentials.user;
         router.push("/all-profiles")
         toast.success("Profile Created Success")

      } catch (error) {
         console.error('Error registering user:', error);
      }
   };



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

   const getCityOptions = (state) => {
      const res = citiesData.filter(cities => cities.State.toLocaleLowerCase() === state)
      const citiesObj = res.map((city) => {
         return {
            label: city.City,
            value: city.City.toLocaleLowerCase()
         }
      })

      document.getElementById('state')
      setCitiesOption(citiesObj)
   }


   const selectstate = (e) => {
      setState(e.target.value)
      getCityOptions(e.target.value)
   }

   const partnerSelectstate = (e) => {
      setPartnerState(e.target.value)
      getPartnerCityOptions(e.target.value)
   }

   useEffect(() => {
      return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
   }, [])


   const handleMultipleUploads = async () => {
      const db = getDatabase(app);
      const imagesRef = ref(db, 'images');
      const imageUrls = [];
      try {
         for (const file of files) {
            const newImageRef = push(imagesRef);
            const imageId = newImageRef.key;
            const storage = getStorage(app);
            const imageStorageRef = storageRef(storage, `images/${imageId}`);
            const snapshot = await uploadBytes(imageStorageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            imageUrls.push(downloadURL);
         }
         await set(imagesRef, { imageUrls });
         setImageUrls(imageUrls)
         toast.success('All images uploaded successfully');
      } catch (error) {
         toast.error('Failed to upload images: ' + error.message);
      }
   };


   return (
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8 '>
         <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Register</h2>
         <div className='flex justify-between'>
            <h4>New Profile Registration</h4>
         </div>
         <MultiStepForm
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
         >
            <FormStep
               stepName='basic-info'
               onSubmit={console.log('Step one submitted')}
            >
               <div className='flex flex-col gap-y-3' >
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
                     <div className='w-1/2' >
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
                  <div className='w-full flex flex-row gap-x-2 '>
                     <div className='w-1/2' >
                        <FormControl
                           control="input"
                           label="Email"
                           name="email"
                           type='email'
                           star="true"
                           inputStyles='w-full text-black '
                           labelStyles='text-black'
                        />
                     </div>
                     <div className='w-1/2'  >
                        <FormControl
                           control="input"
                           label="Password"
                           name="password"
                           type='password'
                           star="true"
                           inputStyles='w-full text-black '
                           labelStyles='text-black'
                        />
                     </div>
                  </div>
                  <div className='w-full flex flex-row gap-x-2 '>
                     <div className='w-1/2 flex items-center  gap-x-4'>
                        <FormControl control="radio" label="Gender" name="gender" star={true} options={genderOptions} />
                     </div>
                     <div className='w-1/2 flex items-center  gap-x-4'>
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
                  <div className='w-full flex items-center  gap-x-4'>
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
                  <div className='w-full'>
                     <FormControl
                        control="select"
                        label="Annual Income "
                        name="annualIncome"
                        star="true"
                        inputStyles={`w-[49%] text-black`}
                        options={annualIncomeDataOptions}
                     />
                  </div>
                  <div className='w-full'>
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
            </FormStep>
            <FormStep
               name="address"
               // validationSchema={stepSixValidationSchema}
               onSubmit={console.log('step2.onSubmit')}
            >
               <div className="flex flex-col gap-y-3">
                  <h3 className='pb-2'>Family Information</h3>
                  <div className='w-full flex flex-row gap-x-3'>
                     <div className='w-1/2'>
                        <FormControl
                           control="input"
                           label="Father Name"
                           name="fatherName"
                           star="true"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                     <div className='w-1/2'>
                        <FormControl
                           control="input"
                           label="Occupation"
                           name="fatherOccupatiion"
                           star="true"
                           inputStyles={`w-full text-black`}
                        />
                     </div>

                  </div>
                  <div className='w-full flex flex-row gap-x-3'>
                     <div className='w-1/2'>
                        <FormControl
                           control="input"
                           label="Mother Name"
                           name="motherName"
                           star="true"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                     <div className='w-1/2'>
                        <FormControl
                           control="input"
                           label="Occupation"
                           name="motherOccupatiion"
                           star="true"
                           inputStyles={`w-full text-black`}
                        />
                     </div>

                  </div>
                  <div className='w-full flex flex-row gap-x-3'>
                     <div className='w-1/2'>
                        <FormControl
                           control="select"
                           label="Number of Brothers "
                           name="noOfBrothers"
                           star="true"
                           inputStyles={`w-full text-black`}
                           options={brothersDataOptions}
                        />
                     </div>
                     <div className='w-1/2'>
                        <FormControl
                           control="select"
                           label="Number of Sisters"
                           name="noOfSisters"
                           star="true"
                           inputStyles={`w-full text-black`}
                           options={sistersDataOptions}
                        />
                     </div>

                  </div>
                  <div className='w-full flex gap-x-3 '>
                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="Citizen of"
                           name="citizenship"
                           star="true"
                           inputStyles={`w-full text-black`}
                           options={citizenshipDataOptions}
                        />
                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="State "
                           name="state"
                           star="true"
                           value={state}
                           inputStyles={`w-full text-black`}
                           onChange={selectstate}
                           options={stateDataOptions}
                        />
                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="City "
                           name="city"
                           star="true"
                           inputStyles={`w-full text-black`}
                           options={citiesOptions || []}
                        />
                     </div>
                  </div>
                  <div className='w-full'>
                     <FormControl
                        control="textarea"
                        label="Complete Address"
                        name="address"
                        star="true"
                        as="textarea"
                        rows={2}
                        cols={40}
                        inputStyles={`w-full text-black`}
                     />
                  </div>
                  <div className='w-full flex flex-row gap-x-3'>
                     <div className='w-1/2'>
                        <FormControl
                           control="input"
                           label="Contact No."
                           name="contactNo"
                           type="text"
                           star="true"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                     <div className='w-1/2'>
                        <FormControl
                           control="input"
                           label="Alternate No.(optional)"
                           name="alternatephone"
                           type="text"
                           inputStyles={`w-full text-black`}
                        />
                     </div>
                  </div>
                  <div className='w-full'>
                     <FormControl
                        control="textarea"
                        label="About Family"
                        name="familyDescriotion"
                        star="true"
                        as="textarea"
                        rows={2}
                        cols={40}
                        inputStyles={`w-full text-black`}
                     />
                  </div>
               </div>
            </FormStep>
            <FormStep
               stepName='basic-info'
               // validationSchema={stepEightValidationSchema}
               onSubmit={console.log('Step one submitted')}
            >
               <div
                  className=' flex flex-col gap-y-3'
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
                           inputStyles={`w-full text-black`}
                           options={citizenshipDataOptions}
                        />
                     </div>
                     <div className='w-1/3' >
                        <FormControl
                           control="select"
                           label="State "
                           name="partnerState"
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
                           label="City "
                           name="partnerCity"
                           star="true"
                           inputStyles={`w-full text-black`}
                           options={partnerCitiesOptions || []}
                        />
                     </div>
                  </div>
                  <div className="w-full flex flex-col gap-x-4">
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
                  <div className='w-full flex gap-x-3 '>
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
                  <div className='w-full flex gap-x-3 '>
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
                  <div className='w-full flex items-center  gap-x-4'>
                     <FormControl
                        control="radio"
                        label="Kuja Dosam "
                        name="partnerKujaDosam"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={kujaDosamOptions}
                     />

                  </div>
                  <div className='w-full flex items-center  gap-x-4'>
                     <FormControl
                        control="radio"
                        label="Complexion "
                        name="partnerComplexion"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={complexionOptions}
                     />

                  </div>
                  <div className='w-full flex items-center  gap-x-4'>
                     <FormControl
                        control="radio"
                        label="Physical Status "
                        name="partnerPhysicalStatus"
                        star="true"
                        inputStyles={`w-full text-black`}
                        options={physicalStatusOptions}
                     />

                  </div>
               </div>
            </FormStep>
            <FormStep
               stepName='basic-info'
               onSubmit={handleMultipleUploads}
            >
               <div
                  className='flex flex-col gap-y-3'
               //  onSubmit={formikProps.handleSubmit}
               >
                  <h3 className='pb-2'>Upload Your Images</h3>
                  <div className='w-full'>
                     <div {...getRootProps({ className: 'flex justify-center items-center border-2 border-dashed h-28 w-full cursor-pointer' })}>
                        <input {...getInputProps()} />
                        <div className='flex flex-col justify-center items-center'>
                           <IoCloudUploadOutline />
                           <p className='text-slate-400 text-sm'>(Add altleast 3 photos)</p>
                           <p>Drag 'n' drop some files here, or click to select files</p></div>
                     </div>
                     <aside className='flex flex-row gap-x-4 my-2'>
                        {thumbs}
                     </aside>
                  </div>

               </div>
            </FormStep>
            <FormStep
               name="address"
               onSubmit={console.log('step2.onSubmit')}
            // validationSchema={stepNineValidationSchema}
            >
               <div className='flex flex-col gap-y-3'>
                  <h3 className='pb-2'>Partner Preferences</h3>
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
               </div>
            </FormStep>
         </MultiStepForm>

      </div>
   )
}

export default AddProfile
