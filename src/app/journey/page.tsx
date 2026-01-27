import Timeline from '@/components/Journey/Timeline';
import { journeyData } from '@/data/journeyData';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'My Journey | Full Stack Developer',
  description: 'From exploration to mastery - my path to becoming a full-stack developer with a unique multidisciplinary background.',
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer with a Unique Edge
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            After exploring mechanical engineering and robotics, I discovered my true passion: 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> building scalable web applications</span>. 
            My diverse technical background gives me a systems-thinking approach that sets me apart.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
              <span className="font-semibold text-blue-800 dark:text-blue-200">React</span>
            </div>
            <div className="px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full">
              <span className="font-semibold text-green-800 dark:text-green-200">Node.js</span>
            </div>
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full">
              <span className="font-semibold text-purple-800 dark:text-purple-200">TypeScript</span>
            </div>
            <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900 rounded-full">
              <span className="font-semibold text-orange-800 dark:text-orange-200">AI/LLM Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Full Stack Section */}
      <section className="py-12 px-4 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Full Stack Development?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I spent years exploring different fields—from mechanical systems to robotics—learning 
            what I truly loved: <strong>building software that people use every day</strong>. 
            Now I'm fully committed to full-stack development, bringing a systems-thinking approach 
            from my technical background while focusing exclusively on modern web technologies.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            <strong>Next goal:</strong> Integrating AI/LLMs into production web applications.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline items={journeyData} />

      {/* Call to Action */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-xl mb-8">
            I'm actively seeking full-stack developer roles where I can bring my unique perspective 
            and passion for web development.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="mailto:saivinay023@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all font-bold shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="w-6 h-6" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/saivinaymanda" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all font-bold"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
