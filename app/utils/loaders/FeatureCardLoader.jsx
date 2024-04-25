import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import React from 'react'

const FeatureCardLoader = () => {
   return (
      <div className='shadow-sm rounded-lg px-4 shadow-indigo-500'  >
         <div  className="flex gap-3 rounded-lg py-4 px-4">
            <div>
               <Skeleton
                  width={250}
                  height={220}
                  className="h-5 w-full rounded-md object-cover"
               />
            </div>
            <div>
               <div className="mt-2">
                  <dl>
                     <div>
                        <p className="font-semibold text-lg capitalize"><Skeleton width={100} /></p>
                     </div>
                     <div >
                        <p className=' line-clamp-3 capitalize'><Skeleton count={3} /></p>
                     </div>
                  </dl>
                  <dl className='flex flex-row space-x-3' >
                     {
                        [1, 2, 3].map((_, ind) => (
                           <div key={ind}>
                              <Skeleton width={50} />
                              <Skeleton width={50} />
                           </div>
                        ))
                     }
                  </dl>
                  <Skeleton />
               </div>
               <div className='py-2'>
                  <Skeleton />
               </div>
            </div>

         </div>
      </div>
   )
}

export default FeatureCardLoader
