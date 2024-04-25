'use client'
import ImagePreView from '@/app/components/profile/ImagePreView'
import { Button } from '@/app/components/ui/Button'
import { getCurrentUser } from '@/app/lib/getCurrentUser'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IoCloudUploadOutline } from 'react-icons/io5'

const EditPhotos = () => {

  const router = useRouter()
  console.log(router)



  const [files, setFiles] = useState([])
  const [userData, setUserData] = useState({})
  const [images, setImages] = useState([])

  const { acceptedFiles, getRootProps, getInputProps, } = useDropzone({
    disabled: false,
    noDrag: false,
    onDrop: (acceptedFiles) => {
      const formattedFiles = acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)

      }))
      setFiles((prevFiles) => [...prevFiles, ...formattedFiles])
    }

  })

  console.log(userData)


  const thumbs = files.map((file) => {
    return (
      <div className='flex fle-row gap-2 '>
        <ImagePreView file={file} />
      </div>
    )
  })

  const handleMultipleUploads = () => { }


  const fetchCurrentuser = async () => {
    const currentUser = await getCurrentUser()
    const { id, userObject } = currentUser
    setUserData(userObject)
    setImages(userObject.images)

  }

  useEffect(() => {
    fetchCurrentuser()
  }, [])

  return (
    <div className='realative h-[88vh] '>
      <div className='flex flex-col space-y-2 '>
        <h4>Edit Photos</h4>
        <p>(Add at least 3 photos)</p>
        <div className='flex gap-5 flex-wrap'>
          {
            images.map((image, ind) => {
              return (
                <Image
                  key={ind}
                  src={image}
                  alt="image"
                  width={200}
                  height={200}
                  className='rounded-md'
                />
              )
            })
          }

        </div>
        <div
          className='flex flex-col gap-y-3'
        //  onSubmit={formikProps.handleSubmit}
        >
          <h3 className='pb-2'>Upload More Images</h3>
          <div className='w-full'>
            <div {...getRootProps({ className: 'flex justify-center items-center border-2 border-dashed h-28 w-full cursor-pointer' })}>
              <input {...getInputProps()} />
              <div className='flex flex-col justify-center items-center'>
                <IoCloudUploadOutline />
                <p>Drag 'n' drop some files here, or click to select files</p></div>
            </div>
            <aside className='flex flex-row gap-x-4 my-1'>
              {thumbs}
            </aside>
          </div>
          <div className='flex justify-center'>
            <Button size="small" onClick={handleMultipleUploads} className="w-1/5" >Upload </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EditPhotos
