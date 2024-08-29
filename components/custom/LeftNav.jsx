'use client'

import React from 'react';
import {
  Inbox,
  File,
  Send,
  ArchiveX,
  Trash2,
  Archive,
  Users2,
  AlertCircle,
  MessagesSquare,
  ShoppingCart
} from 'lucide-react';
import Image from 'next/image';
import { sidebarLogo } from '../svg';
import { useRouter } from 'next/navigation';


const iconSize = 20;


const NavIcon = ({ Icon, isActive = false }) => (
  <div className={`p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 ${isActive ? 'bg-gray-200 dark:bg-gray-800' : ''}`}>
    <Icon size={iconSize} className="text-gray-600 dark:text-gray-300" />
  </div>
);

export function LeftNavBar() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#1F1F1F] border-r dark:border-[#343A40]">

      <div className='h-[62px] text-black'>
        <Image src={sidebarLogo} alt='logo' />
      </div>

      <div className="flex-grow h-full border justify-center items-center">
        <button onClick={() => { router.push('/home') }}>
          <NavIcon Icon={Inbox} />
        </button>

        <button onClick={() => { router.push('/search') }}>
          <NavIcon Icon={File} />
        </button>

        <button onClick={() => { router.push('/send') }}>
          <NavIcon Icon={Send} />
        </button>

        <button onClick={() => { router.push('/send') }}>
          <NavIcon Icon={ArchiveX} link={''} />
        </button>

        <button onClick={() => { router.push('/dashboard') }}>

          <NavIcon Icon={Trash2} />
        </button>

        <button onClick={() => { router.push('/dashboard') }}>

          <NavIcon Icon={Archive} />
        </button>

        <button onClick={() => { router.push('/dashboard') }}>

          <NavIcon Icon={Archive} />
        </button>
      </div>

    </div>
  );
}