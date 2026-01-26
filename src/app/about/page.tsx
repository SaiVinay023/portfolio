'use client'

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
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Beyond the Code
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm Saivinay - a full-stack developer, community builder, and lifelong learner from Genova, Italy. 
            Here's my story beyond the professional timeline.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              My journey into tech wasn't a straight line - and I wouldn't have it any other way. 
              I started with <strong>mechanical engineering</strong> in India, got fascinated by <strong>robotics</strong>, 
              and eventually found my true calling in <strong>web development</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What drives me? <strong>Building things that matter.</strong> Whether it's founding a robotics club, 
              organizing international projects with AIESEC, or crafting scalable web applications - I love 
              bringing ideas to life and helping others along the way.
            </p>
            <p className="text-lg leading-relaxed">
              Now based in <strong>Genova, Italy</strong>, I'm focused on full-stack development with a special 
              interest in AI/LLM integration. But at my core, I'm still that curious kid who loves taking things 
              apart to understand how they work.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What I Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Technology evolves fast. I stay curious, embrace new challenges, and never stop learning.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From building robotics clubs to international collaborations - I believe in lifting others as I climb.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I don't just write code - I solve real problems with elegant, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Community & Leadership</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Building technology is important, but building communities is transformative. Here's where I've made an impact:
          </p>
          
          <div className="space-y-8">
            {/* AIESEC */}
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">AIESEC - Team Member</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">Nov 2020 - Jan 2021 • Genova, Italy</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Project Management:</strong> Led initiatives including Make Eat, World Largest Lesson, and Schools for Global Goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Team Building:</strong> Recruited and onboarded new members to expand organizational reach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>International Relations:</strong> Collaborated with committees across Turkey, Germany, Spain, Poland, Romania, India, and Sri Lanka</span>
                    </li>
                  </ul>
                  <a 
                    href="https://www.aiesec.it/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:underline"
                  >
                    Visit AIESEC <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* NIE Robotics Club */}
            <div className="border-l-4 border-purple-500 pl-6 py-4">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">NIE Robotics Club - Vice President & Technical Head</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">Mar 2017 - Jun 2018 • Mysore, India</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Founded the first robotics club</strong> at NIE in 2016, establishing a culture of hands-on learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Workshops & Training:</strong> Conducted robot design, prototyping, and building workshops (3-day and 7-day programs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>National Competition:</strong> Organized Roborikishi - a national-level robotics competition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Mentorship:</strong> Trained 100+ students in robotics fundamentals and practical applications</span>
                    </li>
                  </ul>
                  <a 
                    href="https://www.facebook.com/RoboticsClubNIE/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-purple-600 hover:underline"
                  >
                    Visit NIE Robotics Club <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside of Code */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">When I'm Not Coding</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl font-bold mb-2">Exploring New Places</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From India to Italy - I love experiencing new cultures, trying local cuisine, and meeting people from different backgrounds.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2">Continuous Reading</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently diving deep into AI/ML, system design, and occasionally sci-fi novels. Always have a book or article queued up.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2">Tinkering with Hardware</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Old habits die hard! Still enjoy building small robotics projects and IoT devices in my spare time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-xl font-bold mb-2">Gaming & Tech</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Casual gamer and tech enthusiast. Love exploring new tools, frameworks, and occasionally getting lost in strategy games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Whether you want to collaborate on a project, discuss technology, or just chat about life - 
            I'm always open to new connections.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="mailto:saivinay023@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/saivinaymanda" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/SaiVinay023" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
