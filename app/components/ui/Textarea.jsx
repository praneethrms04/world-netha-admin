import React from "react";
import { ErrorMessage, Field } from "formik";

const Textarea = (props) => {
   const {
      label,
      name,
      errors,
      touched,
      labelStyles,
      star,
      inputStyles,
      ...rest
   } = props;
   return (
      <div>
         <label htmlFor={label} className={`${labelStyles} font-bold`}>
            {label} {star && <span className='text-red-600'>*</span>}
         </label>
         <Field
            name={name}
            id={name}
            {...rest}
            className={`px-3 py-2 bg-white text-gray border ${errors && touched && errors[name] && touched[name]
               ? "border-red-500 "
               : "border-slate-400"
               }  rounded-md text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${inputStyles}`}
         />
         <ErrorMessage
            name={name}
            render={(msg) => {
               return <div className='text-red-400'>{msg}</div>;
            }}
         />
      </div>
   );
};

export default Textarea;
