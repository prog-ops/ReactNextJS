'use client'

import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export default function Sidebar(): JSX.Element | null {
  const { status } = useSession();

  const router = useRouter();

  const handleMenuItemClick = (route: string) => {
    router.push(route);
  };

  const isActiveRoute = (route: string) => {
    return router.pathname === route;
  };

  if (status === 'authenticated') {
    return (
        <div className="bg-gray-200 w-56 p-4">
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li
                className={`cursor-pointer ${
                    isActiveRoute('/') ? 'text-blue-500' : ''
                } p-2 hover:bg-cyan-900 hover:rounded`}
                onClick={() => handleMenuItemClick('/')}>
              Home
            </li>
            <li
                className={`cursor-pointer ${
                    isActiveRoute('/dashboard') ? 'text-blue-500' : ''
                } p-2 hover:bg-cyan-800 hover:rounded`}
                onClick={() => handleMenuItemClick('/dashboard')}>
              Dashboard
            </li>
            <li
                className={`cursor-pointer ${
                    isActiveRoute('/contact') ? 'text-blue-500' : ''
                } p-2 hover:bg-cyan-700 hover:rounded`}
                onClick={() => handleMenuItemClick('/contact')}>
              Contact
            </li>
          </ul>
        </div>
    );
  }

  return null;
}
