"use client"
import { Field, ErrorMessage } from 'formik'
import React from 'react'

const CheckBoxGroup = (props) => {
   console.log(props)
   const { name, label, options, ...rest } = props


   return (
      <div className='flex gap-4'>
         <div>
            <label>{label}</label>
            <Field name={name}  {...rest}>
               {
                  ({ field }) => {
                     console.log(field)
                     return options.map((option) => {
                        return (
                           <React.Fragment key={option.key}>
                              <input
                                 type="checkbox"
                                 id={option.value}
                                 {...field}
                                 value={option.value}
                                 checked={field.value.includes(option.value)}
                              />
                              <label htmlFor={option.value}>{option.value} </label>
                           </React.Fragment>
                        )
                     })
                  }
               }

            </Field>
         </div>
         <ErrorMessage
            name={name}
            render={(msg) => {
               return <div className='text-red-400'>{msg}</div>;
            }}
         />

      </div>


   )
}

export default CheckBoxGroup
