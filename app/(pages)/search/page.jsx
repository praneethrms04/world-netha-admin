"use client"

import FormControl from '@/app/components/ui/FormControl'
import { profiles } from '@/app/constants'
import getAllProfies from '@/app/lib/getAllProfiles'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import { annualIncomeDataOptions, qualificationDataOptions } from '@/app/utils/options'
import { Form, Formik } from 'formik'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SearchCard from '@/app/components/common/SearchCard';

const Search = () => {

  const searchParams = useSearchParams()
  const gender = searchParams.get('gender')
  const ageFrom = searchParams.get('agefrom')
  const ageTo = searchParams.get('ageto')


  const [showHeight, setShowHeight] = useState(false);
  const [showIncome, setShowIncome] = useState(false);
  const [showQualification, setShowQualification] = useState(false);

  const [profiles, setProfiles] = useState([]);
  const [femaleProfiles, setFemaleProfiles] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setLoading(true)
    try {
      const profilesData = await getAllProfies();
      const maleProfilesData = profilesData.filter((profile) => {

        return (profile.partnerAgeFrom === parseInt(ageFrom) && profile.gender.toLowerCase() === gender && profile.partnerAgeTo === parseInt(ageTo)) || (profile.partnerAgeFrom === parseInt(ageFrom) && profile.gender.toLowerCase() === gender) || (profile.partnerAgeFrom === parseInt(ageTo) && profile.gender.toLowerCase() === gender) || (profile.partnerAgeFrom === parseInt(ageFrom) && profile.partnerAgeTo === parseInt(ageTo)) || profile.gender.toLowerCase() === gender

      })
      setLoading(false)

    } catch (error) {
      console.error("Error fetching male profiles:", error);
    }
  };



  return (
    <div>
      <div className=' max-w-screen-2xl mx-auto px-4 md:px-8 py-4'>
        <div className='w-full flex flex-row gap-x-6'>
          {/* <div className='w-1/3'>
            <h3>Advanced Searched / Features </h3>
            <div className='flex flex-col gap-y-3'>
              <div className='border border-slate-400 rounded-md'>
                <div className='px-3 py-3'>
                  <div className='w-full flex flex-row '>
                    <h4 className='w-1/2'>HEIGHT (in cms)</h4>
                    <h4 className='w-1/2 flex justify-end cursor-pointer' onClick={() => setShowHeight((prev) => !prev)}>{showHeight ? <FaAngleUp /> : <FaAngleDown />}</h4>
                  </div>
                  <div className='my-2'>
                    {
                      showHeight && (
                        <Formik>
                          {
                            (formikProps) => {
                              return (
                                <Form>
                                  <div className='flex flex-row gap-x-3 items-center'>
                                    <FormControl
                                      control="input"
                                      name="ageFrom"
                                      placeholder="age"
                                    />
                                    <div>
                                      <span>to </span>
                                    </div>
                                    <FormControl
                                      control="input"
                                      name="ageFrom"
                                      placeholder="age"
                                    />
                                  </div>
                                </Form>
                              )
                            }
                          }

                        </Formik>
                      )
                    }
                  </div>
                  <div>

                  </div>
                </div>

              </div>
              <div className='border border-slate-400 rounded-md'>
                <div className='px-3 py-3'>
                  <div className='flex justify-between'>
                    <h4>INCOME </h4>
                    <h4 onClick={() => setShowIncome((prev) => !prev)}>{showHeight ? <FaAngleUp /> : <FaAngleDown />}</h4>
                  </div>
                  {
                    showIncome && (
                      <Formik>
                        {
                          (formikProps) => {
                            return (
                              <Form>
                                <div className=' '>
                                  <FormControl
                                    control="select"
                                    name="annualIncome"
                                    inputStyles={`w-full text-black`}
                                    options={annualIncomeDataOptions}
                                  />
                                </div>
                              </Form>
                            )
                          }
                        }

                      </Formik>
                    )
                  }
                  <div>
                  </div>
                </div>
              </div>
              <div className='border border-slate-400 rounded-md'>
                <div className='px-3 py-3'>
                  <div className='flex justify-between'>
                    <h4>QUALIFICATION</h4>
                    <h4 className='cursor-pointer' onClick={() => setShowQualification((prev) => !prev)}>{showHeight ? <FaAngleUp /> : <FaAngleDown />}</h4>
                  </div>
                  {
                    showQualification && (
                      <Formik>
                        {
                          (formikProps) => {
                            return (
                              <Form>
                                <div className=''>
                                  <FormControl
                                    control="select"
                                    name="partnerEducationCategory"
                                    inputStyles={`w-full text-black`}
                                    options={qualificationDataOptions}
                                  />
                                </div>
                              </Form>
                            )
                          }
                        }
                      </Formik>
                    )
                  }
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className='w-full'>
            <h3>Your search results</h3>
            <div className='grid grid-cols-1 gap-5  my-3'>
              {
                !loading ? (
                  <>      {
                    profiles.length > 0 ? (
                      profiles.map((profileData, index) => (
                        <div className='flex ms-10' key={index}>
                          <SearchCard profileData={profileData} />
                        </div>
                      ))
                    ) : (
                      <div>
                        <p>{profiles.length === 0 && "No such profile found"}</p>
                      </div>
                    )
                  }</>
                ) : <> loading... </>
              }


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
