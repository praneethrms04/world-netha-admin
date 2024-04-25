"use clinet"

import Image from 'next/image'
import React from 'react'

const ImagePreView = ({ file }) => {
   return (
      <div>
         <Image src={file.preview} width={100} height={100} alt={file.name} className='rounded-md' />
      </div>
   )
}

export default ImagePreView
