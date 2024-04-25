
import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Select = (props) => {
   const { name, label, star, inputStyles, options, ...rest } = props
   return (
      <div>
         <label htmlFor={name} className="block font-semibold  ">
            {label} {star && <span className='text-red-600'>*</span>}
         </label>
         <Field
            name={name}
            id={name}
            {...rest}
            as="select"
            key={name}
            className={`px-3 py-2 bg-white text-gray border border-slate-400 rounded-md text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${inputStyles}`}
         >
            {
               options.map(option => {
                  return (
                     <>
                        <option className='' key={option.key} value={option.key}>{option.value}</option>
                     </>
                  )
               })
            }
         </Field>
         <ErrorMessage
            name={name}
            render={(msg) => {
               return <div className='text-red-400'>{msg}</div>;
            }}
         />
      </div>
   )
}

export default Select
