import { ErrorMessage, Field } from 'formik'
import React, { useState } from 'react'
import DateViewer from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';


const DatePicker = (props) => {

   const { label, name, star, inputStyles, ...rest } = props
   // Custom validation function to check if the selected date is before 18 years ago
   const validateDate = (value) => {
      const ageLimit = 18;
      const today = new Date();
      const cutoffDate = new Date().setFullYear(today.getFullYear() - ageLimit);

      // Check if the selected date is before the cutoff date
      if (value > cutoffDate) {
         toast.error(`Must be at least ${ageLimit} years old`)
      }
   };

   return (
      <div>
         <label htmlFor={name} className={`${inputStyles} font-bold `}> {label}  {star && <span className='text-red-600'>*</span>} </label>
         <Field
            name={name}
            validate={validateDate} >
            {
               ({ form, field }) => {
                  const { setFieldValue } = form
                  const { value } = field
                  return (
                     <DateViewer
                        id={name}
                        {...field}
                        {...rest}
                        showIcon
                        showMonthDropdown
                        showYearDropdown
                        dateFormat="dd/MM/yyyy"
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown
                        placeholderText="Select a date"
                        selected={value}
                        className='border py-3 border-slate-400 rounded-sm w-full'
                        onChange={val => setFieldValue(name, val)}
                     />
                  )
               }
            }
         </Field>
         {/* <ErrorMessage
            name={name}
            render={(msg) => {
               return <div className='text-red-400'>{msg}</div>;
            }}
         /> */}
      </div>
   )
}

export default DatePicker
