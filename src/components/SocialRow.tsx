'use client'

import { Mail, Phone, Globe, MapPin, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { profile } from '@/data/profile'

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900">
    {children}
  </Link>
)

export default function SocialRow() {
  const { email, phone, linkedin, website, location } = { ...profile, location: profile.location || 'Remote' }
  return (
    <div className="flex flex-wrap gap-2">
      <A href={`mailto:${email}`}><Mail size={16} /><span>{email}</span></A>
      <A href={`tel:${phone.replace(/\s/g,'')}`}><Phone size={16} /><span>{phone}</span></A>
      <A href={linkedin}><Linkedin size={16} /><span>LinkedIn</span></A>
      {profile.github ? <A href={profile.github}><Github size={16} /><span>GitHub</span></A> : null}
      <A href={website}><Globe size={16} /><span>Website</span></A>
      <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
        <MapPin size={16} /><span>{location}</span>
      </span>
    </div>
  )
}
