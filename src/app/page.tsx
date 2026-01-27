import ProfileHeader from '@/components/ProfileHeader'
import AboutIntro from '@/components/profile/AboutIntro'
import Highlights from '@/components/profile/Highlights'
import Hero from '@/components/Hero'
import StackCloud from '@/components/StackCloud'
import ProjectGrid from '@/components/ProjectGrid'

export default function HomePage() {
  return (
    <section className="space-y-12">
      <ProfileHeader />
      <AboutIntro />
      <Hero />
      <Highlights />
      <StackCloud />
      {/*<ProjectGrid /> */}
    </section>
  )
}

// Note: The metadata for the page is defined in 'src/app/layout.tsx'