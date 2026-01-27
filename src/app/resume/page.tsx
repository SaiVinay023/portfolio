import EducationList from '@/components/resume/EducationList'
import ExperienceList from '@/components/resume/ExperienceList'
import ResearchList from '@/components/resume/ResearchList'
import { SkillsList } from '@/components/resume/SkillsList'
import PublicationsList from '@/components/resume/PublicationsList'
import CertificatesList from '@/components/resume/CertificatesList'
import { Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A snapshot of my experience, skills, and achievements
        </p>
        <div className="flex justify-center pt-2">
          <a
            href="/resume.pdf"
            download="SaiVinay_Manda_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </section>

      <div className="grid gap-12">
        <EducationList />
        <ExperienceList />
        <ResearchList />
        <SkillsList />
        <PublicationsList />
        <CertificatesList />
      </div>
    </main>
  )
}
