
"use client"
import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Button } from './Button';

const MultiStepForm = ({ children, initialValues, onSubmit, }) => {

   const [stepNumber, setStepNumber] = useState(0);
   const [snapshot, setSnapshot] = useState(initialValues);

   const steps = React.Children.toArray(children);
   const step = steps[stepNumber];
   const totalSteps = steps.length;
   const isLastStep = stepNumber === totalSteps - 1;


   const next = values => {
      setSnapshot(values);
      setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
   };

   const previous = values => {
      setSnapshot(values);
      setStepNumber(Math.max(stepNumber - 1, 0));
   };

   const handleSubmit = async (values, actions) => {
      if (step.props.onSubmit) {

         await step.props.onSubmit(values, actions);
      }
      if (isLastStep) {
         return onSubmit(values, actions);
      } else {
         actions.setTouched({});
         next(values);
      }
   };

   return (
      <Formik
         className="relative"
         initialValues={snapshot}
         onSubmit={handleSubmit}
         validationSchema={step.props.validationSchema}
      >

         {formik => (
            <Form>
               <p className='absolute right-5 top-12 '>
                  Step {stepNumber + 1} of {totalSteps}
               </p>
               <div className='relative'>
                  <div className='mb-3'>
                     {step}
                  </div>
                  <div className=' flex justify-end gap-x-6'>
                     {stepNumber > 0 && (
                        <Button variant="gray" className="rounded-md" onClick={() => previous(formik.values)} type="button">
                           Back
                        </Button>
                     )}
                     <div>
                        <Button variant="gray" className="rounded-md" disabled={formik.isSubmitting} type="submit">
                           {isLastStep ? 'Submit' : 'Next'}
                        </Button>
                     </div>
                  </div>
               </div>
            </Form>
         )}
      </Formik>
   )
}

export default MultiStepForm

export const FormStep = ({ stepName = '', children }) => children
