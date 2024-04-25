"use client"
import { Form, Formik } from 'formik'
import React from 'react'
import FormControl from '../ui/FormControl'
import { Button } from '../ui/Button'

const SendInterest = ({ onRequestClose }) => {
   return (
      <div>
         <Formik>
            {
               (formikProps) => {
                  return (
                     <Form>
                        <div className='flex flex-col gap-y-2'>
                           <h4 className='text-xl'>Send interest</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eiu</p>
                           <div>
                              <FormControl
                                 control="input"
                                 name="note"
                                 placeholder="Enter Your Note (optional)"
                                 inputStyles="w-full"
                                 labelStyle="w-full"
                              />
                           </div>
                           <div className='flex gap-x-3 justify-end'>
                              <Button size="small" className="px-4 py-2 text-sm" onClick={onRequestClose}>Cancel</Button>
                              <Button variant="gray" size="small" className=" px-4 text-sm py-2">Send and view contact details</Button>
                           </div>
                        </div>

                     </Form>
                  )
               }
            }
         </Formik>



      </div>
   )
}

export default SendInterest
