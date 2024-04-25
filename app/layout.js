'use client'
import { Inter } from "next/font/google";
import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import { usePathname, } from 'next/navigation';
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const notosans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  const pathname = usePathname()

  const links = [
    {
      id: 1,
      link: "/",
      name: "Home"
    },
    {
      id: 2,
      link: "/all-profiles",
      name: "All Profiles",
    },
    {
      id: 3,
      link: "/add-profile",
      name: "Add Profile",
    },
    {
      id: 3,
      link: "/review-profile",
      name: "Review Profile",
    },
    {
      id: 4,
      link: "/notifications",
      name: "Notifications",
    },
  ];
  return (
    <html lang="en">
      <body className={`${notosans.className}`} >
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div >
          <div className='w-full h-full flex flex-row space-x-3 relative  '>
            <div className=' shadow-lg w-2/12 h-screen  '>
              <div className='flex flex-col space-y-3 px-4 py-4 border h-full rounded-md shadow-lg '>
                <h2>World Netha</h2>
                {links.map((route) => {
                  return (
                    <Link key={route.id} href={route.link} className={pathname === route.link ? 'text-black font-semibold ' : 'text-gray-900'}>
                      {route.name}
                    </Link>)
                }
                )}
              </div>
            </div>
            <div className=' px-4 w-10/12  h-screen overflow-auto '>

              {children}
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
