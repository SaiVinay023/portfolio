import Image from 'next/image'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { profile } from '@/data/profile'

export const metadata = {
  title: 'About Me | Saivinay Manda',
  description: 'Get to know me beyond the code - my story, values, community work, and what drives me as a developer.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Beyond the Code
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            I'm Saivinay - a full-stack developer, community builder, and lifelong learner from Italy. 
            Here's my story beyond the professional timeline.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 border-b-2 border-blue-500 pb-4 inline-block text-gray-900 dark:text-white">My Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-blue-100 dark:border-gray-700 transform hover:scale-[1.01] transition-transform">
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                My journey into tech wasn't a straight line - and I wouldn't have it any other way. 
                I started with <span className="font-bold text-blue-600 dark:text-blue-400">mechanical engineering</span> in India, got fascinated by <span className="font-bold text-purple-600 dark:text-purple-400">robotics</span>, 
                and eventually found my true calling in <span className="font-bold text-blue-600 dark:text-blue-400">Web development</span>.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-purple-100 dark:border-gray-700 transform hover:scale-[1.01] transition-transform">
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                What drives me? <span className="font-bold text-purple-600 dark:text-purple-400 text-xl block mb-2">Building things that matter.</span> 
                Whether it's founding a robotics club, organizing international projects with AIESEC, or crafting scalable web applications - 
                I love bringing ideas to life and helping others along the way.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-900/50 shadow-xl border border-blue-100 dark:border-gray-700 transform hover:scale-[1.01] transition-transform">
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 italic">
                Now based in <span className="font-bold text-blue-600 dark:text-blue-400">Genova, Italy</span>, I'm focused on full-stack development with a special 
                interest in AI/LLM integration. But at my core, I'm still that curious kid who loves taking things 
                apart to understand how they work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-blue-50/50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">What I Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 hover:translate-y-[-4px] transition-all">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Technology evolves fast. I stay curious, embrace new challenges, and never stop learning.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-purple-500 hover:translate-y-[-4px] transition-all">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From building robotics clubs to international collaborations - I believe in lifting others as I climb.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-indigo-500 hover:translate-y-[-4px] transition-all">
              <div className="text-5xl mb-6">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I don't just write code - I solve real problems with elegant, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 border-b-2 border-purple-500 pb-4 inline-block text-gray-900 dark:text-white">Community & Leadership</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-medium">
            Building technology is important, but building communities is transformative. Here's where I've made an impact:
          </p>
          
          <div className="space-y-10">
            {/* AIESEC */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-8 border-blue-500 hover:shadow-2xl transition-all">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">AIESEC - Team Member</h3>
                  <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-semibold">
                    <span>Nov 2020 - Jan 2021</span>
                    <span>•</span>
                    <span>Genova, Italy</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-500 font-bold">•</span>
                      <span><strong className="text-gray-900 dark:text-white font-bold underline decoration-blue-500/30">Project Management:</strong> Led initiatives including Make Eat, World Largest Lesson, and Schools for Global Goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-500 font-bold">•</span>
                      <span><strong className="text-gray-900 dark:text-white font-bold underline decoration-blue-500/30">Team Building:</strong> Recruited and onboarded new members to expand organizational reach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-500 font-bold">•</span>
                      <span><strong className="text-gray-900 dark:text-white font-bold underline decoration-blue-500/30">International Relations:</strong> Collaborated with committees across 7+ countries globally</span>
                    </li>
                  </ul>
                  <a 
                    href="https://www.aiesec.it/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-bold shadow-sm"
                  >
                    Visit AIESEC <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* NIE Robotics Club */}
            <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-8 border-purple-500 hover:shadow-2xl transition-all">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">NIE Robotics Club - Vice President</h3>
                  <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-semibold">
                    <span>Mar 2017 - Jun 2018</span>
                    <span>•</span>
                    <span>Mysore, India</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-500 font-bold">•</span>
                      <span><strong className="text-gray-900 dark:text-white font-bold underline decoration-purple-500/30 text-xl">Founded the first robotics club</strong> at NIE in 2016</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-500 font-bold">•</span>
                      <span><strong className="text-gray-900 dark:text-white font-bold underline decoration-purple-500/30">Workshops & Training:</strong> Conducted design & prototyping programs for 100+ students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-500 font-bold">•</span>
                      <span><strong className="text-gray-900 dark:text-white font-bold underline decoration-purple-500/30">National Competition:</strong> Organized Roborikishi - a national-level event</span>
                    </li>
                  </ul>
                  <a 
                    href="https://www.facebook.com/RoboticsClubNIE/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-600 hover:text-white transition-all font-bold shadow-sm"
                  >
                    Visit NIE Robotics <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside of Code */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">When I'm Not Coding</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Exploring</h3>
              <p className="text-white/80 text-sm">Cultures & Cuisines</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Reading</h3>
              <p className="text-white/80 text-sm">AI/ML & Sci-Fi</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Tinkering</h3>
              <p className="text-white/80 text-sm">IoT & Hardware</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Gaming</h3>
              <p className="text-white/80 text-sm">Strategy & Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white underline decoration-blue-500 decoration-4 underline-offset-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Whether you want to collaborate on a project, discuss technology, or just chat about life - 
            I'm always open to new connections.
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
  )
}
