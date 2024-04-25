'use client'
import { Suspense, useEffect, useState } from "react";
import getAllProfies from "@/app/lib/getAllProfiles"
import { FeatureCardLoader } from "./utils/loaders";
import FeatureCard from "./components/common/FeatureCard";
import { Button } from "./components/ui/Button";
import { succesMaches } from "./constants";
import SuccessMatchCard from "./components/common/SuccessMatchCard";

const Home = () => {
  const [maleProfiles, setMaleProfiles] = useState([]);
  const [femaleProfiles, setFemaleProfiles] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchMaleProfiles();
    fetchFemaleProfiles();

  }, []);

  const fetchMaleProfiles = async () => {
    setLoading(true)
    try {
      const profilesData = await getAllProfies();
      const maleProfilesData = profilesData.filter(
        (profile) => profile.gender === "Male"
      ).slice(0, 4);
      setMaleProfiles(maleProfilesData);
      setLoading(false)

    } catch (error) {
      console.error("Error fetching male profiles:", error);
    }
  };

  const fetchFemaleProfiles = async () => {
    try {
      const profilesData = await getAllProfies();
      const femaleProfilesData = profilesData.filter(
        (profile) => profile.gender === "Female"
      ).slice(0, 4);
      setFemaleProfiles(femaleProfilesData);
    } catch (error) {
      console.error("Error fetching female profiles:", error);
    }
  };
  return (
    <>
      <section className="my-6 px-2">
        <div className='mx-auto max-w-screen-2xl border rounded-md'>
          <div>
            <h4 className=" mx-auto ms-4 mt-2">Selected Males</h4>
            <h3 className=' font-serif mx-auto ms-4 mb-4 text-[#726300]'>Male Featured</h3>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
            {
              loading ? [1, 2, 3, 4].map((_, ind) => <div className="flex ms-10"><FeatureCardLoader key={ind} /></div>) : (
                <>
                  {
                    maleProfiles && maleProfiles.filter((profile) => profile.gender === "Male").slice(0, ).map((profileData, index) => {
                      return <div className='flex ms-4 '> <FeatureCard key={index} profileData={profileData} /> </div>
                    })
                  }
                </>
              )
            }
          </div>
          <div className="my-4 flex justify-center items-center">
            <Button variant="gray"> Manage Profoiles </Button>
          </div>
        </div>
      </section>
      <section className="my-6 px-2">
        <div className='mx-auto max-w-screen-2xl border rounded-md'>
          <div>
            <h4 className=" mx-auto ms-4 mt-2 ">Selected FeMales</h4>
            <h3 className=' font-serif mx-auto ms-4 mb-4 text-[#726300]'>Female Featured</h3>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
            {
              loading ? [1, 2, 3, 4].map((_, ind) => <div className="flex ms-10"><FeatureCardLoader key={ind} /></div>) : (
                <>
                  {
                    femaleProfiles && femaleProfiles.filter((profile) => profile.gender === "Female").slice(0, 4).map((profileData, index) => {
                      return <div className='flex ms-4 '> <FeatureCard key={index} profileData={profileData} /> </div>
                    })
                  }
                </>
              )
            }
          </div>
          <div className="my-4 flex justify-center items-center">
            <Button variant="gray"> Manage Profoiles </Button>
          </div>
        </div>
      </section>
      <section className="my-6 px-2">
        <div className='mx-auto max-w-screen-2xl border rounded-md'>
          <div>
            <h4 className=" mx-auto ms-4 mt-2 ">Success Stories</h4>
            <h3 className=' font-serif mx-auto ms-4 mb-4 text-[#726300]'>Sucess Mathes</h3>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
            {
              succesMaches && succesMaches.map((pair, ind) => {
                return <SuccessMatchCard key={ind} pair={pair} />
              })
            }
          </div>
          <div className="my-4 flex justify-center items-center">
            <Button variant="gray"> Manage Profoiles </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

