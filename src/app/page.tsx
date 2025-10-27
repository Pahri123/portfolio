// Links merged into Hero component
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Certif from '@/components/sections/certif'
import Projects from '@/components/sections/projects'
import Hero from '@/components/hero'
import Image from 'next/image'

export default function MainPage() {
  return (
    <div className="font-base">
      <Hero />

      <section
        id="about"
        className="flex min-h-screen items-center justify-center px-4 pt-12 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-7xl">
          <div className="mb-24 grid grid-cols-1 items-center gap-8 sm:grid-cols-12">
            <div className="flex justify-center sm:col-span-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-main/20 blur-3xl"></div>
                <div className="relative w-full max-w-[300px] sm:max-w-md">
                  <Image
                    src="/avatar2.webp"
                    alt="About Fakhrie"
                    width={400}
                    height={400}
                    className="rounded-2xl border border-main/20 shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="text-base sm:col-span-8 sm:text-lg">
              <div className="mb-4">
                <p>
                  I&apos;m an Information Systems graduate from UNIKOM with a
                  GPA of 3.9, my academic journey and hands-on projects have
                  given me experience in building web applications, managing
                  large-scale data, and applying machine learning for practical
                  solutions.
                </p>
              </div>
              <div>
                <p>
                  Beyond technical skills, I also enjoy collaborating in teams,
                  learning from challenges, and contributing to projects that
                  create meaningful impact. I&apos;m eager to keep growing and
                  exploring how technology and data can shape better solutions
                  for the future.
                </p>
              </div>
              <Skills />
            </div>
          </div>

          <Experience />
          <Certif />
        </div>
      </section>

      <Projects />
    </div>
  )
}

// Add metadata export
export const metadata = {
  title: 'Fakhrie Nabil - Portfolio',
  description: 'Web Developer & Data Scientist Portfolio',
}
