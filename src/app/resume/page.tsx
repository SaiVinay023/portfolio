import EducationList from '@/components/resume/EducationList'
import ExperienceList from '@/components/resume/ExperienceList'
import ResearchList from '@/components/resume/ResearchList'
import {SkillsList} from '@/components/resume/SkillsList'
import PublicationsList from '@/components/resume/PublicationsList'
import CertificatesList from '@/components/resume/CertificatesList'

export default function ResumePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p>A snapshot of my experience, skills, and achievements</p>
      </section>

      <EducationList />
      <ExperienceList />
      <ResearchList />
      <SkillsList />
      <PublicationsList />
      <CertificatesList />
    </main>
  )
}
