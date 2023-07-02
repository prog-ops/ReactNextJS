'use client'

import { signIn } from "next-auth/react";
import React from "react";

export const LoginButton: React.FC = () => {
  return (
      <button
          onClick={() => signIn('github')}
          className='mt-4 bg-slate-400 text-white px-6 py-3 rounded-lg'>
        Sign in with GitHub
      </button>
  );
};
