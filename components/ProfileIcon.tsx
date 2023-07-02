"use client"

import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";

export const ProfileIcon: React.FC = () => {
  const {data: session, status} = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/contact');
  };

  const handleSignIn = async () => {
    await signIn('github');
    router.push('/contact');
  };

  if (status === 'authenticated') {
    return (
        <div className='flex gap-5'>
          <Image
              src={session?.user?.image || ''}
              width={40}
              height={40}
              className='rounded-full'
              alt='Image of profile'/>
          <div className='text-amber-300 mt-2'>{session?.user?.name}</div>
          <button onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
    );
  }

  return (
      <button onClick={handleSignIn}>Sign In</button>
  );
};
