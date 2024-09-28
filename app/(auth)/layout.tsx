import Footer from '@/components/frontend/site-footer';
import SiteHeader from '@/components/frontend/site-header';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  const session = null;
  return (
    <div className=''>
      <SiteHeader session={session} />
      <div className='h-screen px-6 pt-14 lg:px-8 flex items-center justify-center'>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
