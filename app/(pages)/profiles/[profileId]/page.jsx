import getAllProfies from '@/app/lib/getAllProfiles';
import getProfile from '@/app/lib/getProfile';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import WholeProfile from '../components/WholeProfile';

const UserPage = async ({ params: { profileId } }) => {

  const profileData = await getProfile(profileId);
  const profile = await profileData


  if (!profile) return notFound()

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <WholeProfile profileData={profile} />
      </Suspense>
    </>
  )

};

export default UserPage

export const generateStaticParams = async () => {
  const userData = getAllProfies();
  const users = await userData;

  return users.map((user) => ({
    profileId: user.id.toString(),
  }));
};


