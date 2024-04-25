'use client'
import React from 'react'
import { Button } from './Button'

const FormNavigation = (props) => {
   return (
      <div className='flex'>
         {props.hasPrevious && <Button onClick={props.onBackClick}>Back</Button>}
         <Button type="submit"> {props.isLastStep ? 'Submit' : 'Next'} </Button>
      </div>
   )
}

export default FormNavigation
