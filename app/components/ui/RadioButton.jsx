"use client"
import { Field, ErrorMessage } from 'formik'
import React from 'react'


const RadioButton = (props) => {

   const { name, label, star, options, ...rest } = props

   return (
      <div >
         <div className='w-full  flex items-center gap-x-8 cursor-pointer'>
            <label className='font-semibold'>{label}{star && <span className='text-red-600'>*</span>}</label>
            <Field name={name}  {...rest} >
               {({ field }) => {
                  return (
                     <div className='flex flex-row gap-x-10 '>
                        {
                           options?.map((option) => {
                              return (
                                 <div key={option.key} className=" border border-slate-500 rounded-full px-3 py-1.5  ">
                                    <div>
                                       <input
                                          type="radio"
                                          className='bg-red-400 border border-indigo-400 px-2 me-2 '
                                          id={option.value}
                                          {...field}
                                          value={option.value}
                                          checked={field.value === option.value}
                                       />
                                       <label htmlFor={option.value} className='cursor-pointer'>{option.value} </label>
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </div>
                  )
               }
               }

            </Field>
         </div>
         <div className='my-1'>
            <ErrorMessage
               name={name}
               render={(msg) => {
                  return <div className='text-red-400'>{msg}</div>;
               }}
            />
         </div>
      </div>


   )
}

export default RadioButton
