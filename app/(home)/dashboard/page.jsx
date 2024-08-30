'use client'
import { LeftNavBar } from '@/components/custom/LeftNav';
import MailPage from '@/components/mail/page';
import { mailLogo } from '@/components/svg';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect } from 'react';

const Dashboard = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token'); // Extract token from URL query params
    if (token) {
      localStorage.setItem('token', token); 
    }
  }, [searchParams]); // Trigger whenever searchParams changes

  return (
    <div className='bg-black h-[91vh] flex justify-center items-center'>
      <Image src={mailLogo} alt='logo' width={100} height={100} /> {/* Ensure width and height are specified */}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
