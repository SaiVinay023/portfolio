'use client'

import Image from 'next/image'
import SocialRow from './SocialRow'
import { profile } from '@/data/profile'

export default function ProfileHeader() {
  return (
    <section className="relative overflow-hidden rounded-2xl border">
      <div className="relative h-40 w-full">
      <Image 
        src="/profile/cover.jpg" 
        alt="" 
        fill 
        className="object-cover object-center" // Change 'center' to 'top' if the heads are cut off
        priority 
      />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="relative -mt-12 h-24 w-24 overflow-hidden rounded-2xl border bg-white">
            <Image src="/profile/profile.jpg" alt={profile.name} fill className="object-cover" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold leading-tight">{profile.name}</h1>
            <p className="opacity-80">{profile.title}</p>
          </div>
        </div>
        <div className="mt-4">
          <SocialRow />
        </div>
      </div>
    </section>
  )
}
