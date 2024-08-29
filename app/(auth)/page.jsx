import SignUpCard from '@/components/custom/SignUpCard'
import MailPage from '@/components/mail/page'
import { headerLogo } from '@/components/svg'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='bg-[#000000] h-screen items-center justify-center'>
      <div className='border-b-[1px] border-[#25262B] h-[64px] flex items-center justify-center'>
        <Image src={headerLogo} alt='logo' />
      </div>

      <div className='flex h-[90vh] justify-center items-center'>
        <SignUpCard />
      </div>
    </main>
  )
}

export default page