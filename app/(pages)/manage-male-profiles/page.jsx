'use client'
import React, { useState, useEffect } from 'react';

import { Field, Form, Formik } from 'formik';
import { getCurrentUser } from '@/app/lib/getCurrentUser';
import { getDatabase, set, ref } from 'firebase/database';
import app from '@/app/firebaseConfig';
import { toast } from 'react-toastify';
import getAllProfies from '@/app/lib/getAllProfiles';
import { Button } from '@/app/components/ui/Button';

const Priority = () => {

   const [maleProfiles, setMaleProfiles] = useState([]);
   const [femaleProfiles, setFemaleProfiles] = useState([]);
   const [loading, setLoading] = useState(true)


   useEffect(() => {

      fetchMaleProfiles();

   }, []);

   const fetchMaleProfiles = async () => {
      setLoading(true)
      try {
         const profilesData = await getAllProfies();
         const maleProfilesData = profilesData.filter(
            (profile) => profile.gender === "Male"
         ).slice(0, 4);
         setMaleProfiles(maleProfilesData);
         setLoading(false)

      } catch (error) {
         console.error("Error fetching male profiles:", error);
      }
   };



   const [userData, setUserData] = useState({})
   const [selectAdminProirity, setSelectedAdminProirity] = useState(userData?.adminPriority)


   const updateAdminPriority = async (id) => {
      const usersData = await getAllProfies();
      const userArray = usersData.filter((profile) => profile.id === id);
      const sourceObj = userArray[0];
      const userObject = { ...sourceObj };
      setSelectedAdminProirity(!userObject.adminPriority);
      const selectAdminProirity = !userObject.adminPriority;
      let data = {
         ...userObject,
         adminPriority: selectAdminProirity
      };
      const db = getDatabase(app);
      const updatedRef = ref(db, `users/${id}`);
      // Update the database
      set(updatedRef, { ...data }).then(() => {
         toast.success('Profile updated successfully');
         window.location.reload()
      }).catch((error) => {
         toast.error('Error updating profile', error);
      });
   };


   useEffect(() => { }, [selectAdminProirity])


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
      adminPriority: userData.adminPriority || false,
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


   return (
      <div className='px-4 py-8'>
         {
            loading ?
               <div> <h2 className='flex justify-center items-center'>Loading ... </h2> </div>
               :
               <Formik
                  initialValues={initialValues}
                  enableReinitialize

               >
                  {(formikProps) => {
                     const { values } = formikProps
                     return (
                        <Form>
                           <div className="overflow-x-auto h-auto">
                              <table className="min-w-full  border divide-y-2 divide-gray-200 bg-white text-sm">
                                 <thead className="ltr:text-center rtl:text-center">
                                    <tr>
                                       <th className="whitespace-nowrap px-4 py-2  font-medium text-gray-900">adminPriority</th>
                                       <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
                                       <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                       <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Caste</th>
                                       <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Age</th>
                                    </tr>
                                 </thead>

                                 <tbody className="divide-y divide-gray-200  ">
                                    {maleProfiles.map((profile) => {
                                       return (
                                          <tr key={profile?.id} className=''>
                                             <td className="whitespace-nowrap px-4 py-2 ms-10 font-medium text-gray-900">
                                                {profile?.adminPriority ? 'true' : 'false'}
                                             </td>
                                             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{profile?.id}</td>
                                             <td className="whitespace-nowrap px-4 py-2 text-gray-700">{profile?.firstName}</td>
                                             <td className="whitespace-nowrap px-4 py-2 text-gray-700">{profile?.caste}</td>
                                             <td className="whitespace-nowrap px-4 py-2 text-gray-700">{profile?.height}</td>
                                             <Button type="submit" size="small" variant="gray" onClick={() => updateAdminPriority(profile?.id)} >Make Priority</Button>
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                              {/* <div className='my-2'>
                           <Button variant="gray" size="small" className="px-5" type="submit" >Save</Button>
                        </div> */}
                           </div>
                        </Form>
                     );
                  }}
               </Formik>
         }

      </div>
   );
};

export default Priority;
