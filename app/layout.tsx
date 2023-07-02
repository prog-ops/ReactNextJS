import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import NextAuthProvider from '@/app/provider/provider';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Github OAuth Sign In Next App',
  description: 'This app features Github OAuth authentication and Product Chart from dummyjson API.',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Content */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-y-auto px-8 py-4">
              {/* Page Content */}
              {children}
            </div>
          </div>
        </div>
      </NextAuthProvider>
      </body>
      </html>
  )
}
