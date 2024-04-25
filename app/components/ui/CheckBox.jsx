"use client"
import React from "react";

const CheckBox = (props) => {
   const { label, name, className, ...attributes } = props;
   return (
      <div className='mx-2'>
         <label htmlFor={label}>
            <input
               type='checkbox'
               id={name}
               name={name}
               {...attributes}
               className={
                  "h-5 w-5 rounded-md border border-gray-200 bg-white shadow-sm cursor-pointer " +
                  className
               }
            />
         </label>
      </div>
   );
};

export default CheckBox;
