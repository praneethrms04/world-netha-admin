'use client'
import Link from 'next/link'
import { usePathname, } from 'next/navigation';
import Protected from '@/app/hooks/useProtected';
import React from 'react'

const UserLayout = ({ children, }) => {

   const pathname = usePathname()

   const links = [
      {
         id: 1,
         link: "/edit/photos",
         name: "Edit photos"
      },
      {
         id: 2,
         link: "/edit/personal-information",
         name: "Personal information",
      },
      {
         id: 3,
         link: "/edit/family-information",
         name: "Family information",
      },
      {
         id: 4,
         link: "/edit/partner-preference",
         name: "Partner preference",
      },
   ];

   return (
      <div >
         <div className='w-full flex flex-col space-x-3 '>
            <div className='w-full my-4'>
               <div className='flex gap-x-10 items-center  px-4 py-4 border h-full rounded-md shadow-lg '>
                  {links.map((route) => {
                     return (
                        <Link key={route.id} href={route.link} className={pathname === route.link ? 'text-black font-semibold bg-indigo-400 px-3 py-1 rounded-sm ' : 'text-gray-900'}>
                           {route.name}
                        </Link>)
                  }
                  )}
               </div>
            </div>
            <div className='w-full border shadow-lg px-4 py-4 my-4 '>
               {children}
            </div>
         </div>
      </div>

   );
};

export default UserLayout;
