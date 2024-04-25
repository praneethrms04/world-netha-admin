'use client'
import * as React from 'react'
import { Button } from '../ui/Button';
import { Form, Formik } from 'formik';
import FormControl from '../ui/FormControl';
import { searchGenderOptions, searchMaritalOptions } from '@/app/utils/options';
import { useRouter } from 'next/navigation';

const QuickSearch = () => {

   const router = useRouter()

   const initialValues = {
      gender: "",
      agefrom: "",
      ageto: "",
   }

   const handleSearchesSubmit = (values) => {
      const queryParams = new URLSearchParams(values).toString();
      router.push(`/search?${queryParams}`)
   }


   return (
      <div className='max-w-screen-2xl mx-auto px-12'>
         <div className='bg-white text-black w-full  rounded-md flex flex-col gap-y-4 py-2'>
            <div>
               <h3 className='text-center'>Search</h3>
               <p className='text-center'>Find your match by values, passions, and dreams. Start searching now.</p>
            </div>
            <Formik
               initialValues={initialValues}
               onSubmit={handleSearchesSubmit}
            >
               {
                  (formikProps) => {
                     return (
                        <Form>
                           <div className='flex justify-between   items-center px-6'>
                              <div >
                                 <FormControl
                                    control="select"
                                    label="I am looking for"
                                    name="gender"
                                    inputStyles="w-[250px] text-black"
                                    labelStyles="w-full text-black"
                                    options={searchGenderOptions}
                                 />
                              </div>
                              <div >
                                 <FormControl
                                    control="input"
                                    label="Age From" sea
                                    name="agefrom"
                                    inputStyles="w-full text-black"
                                    labelStyles="w-full text-black"
                                 />
                              </div>
                              <div >
                                 <FormControl
                                    control="input"
                                    label="Age To"
                                    name="ageto"
                                    inputStyles="w-full text-black"
                                    labelStyles="w-full text-black"
                                 />
                              </div>

                              <div >
                                 <Button variant="gray" className="mt-5" >Search</Button>
                              </div>
                           </div>
                        </Form>
                     )
                  }
               }
            </Formik>
         </div>
      </div>
   )
}

export default QuickSearch


