import Links from '@/components/links'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Certif from '@/components/sections/certif'
import PROJECTS from '@/data/projects'

export default function MainPage() {
  return (
    <div className="font-base">
      {/* Home Section */}
      <section id="home" className="scroll-mt-24">
        <h1 className="font-heading text-2xl sm:text-4xl">
          Hi! My name is Fakhrie Nabil
        </h1>
        <p className="mt-2 text-lg sm:text-xl">
          Junior Web Developer & Data Scientist @Bandung, West Java
        </p>
        <p className="mt-2 text-lg sm:text-xl">
          Fresh graduate in Information Systems with a love for Web Development
          and Data Science. I enjoy turning ideas into real projects and data into
          decisions.
        </p>
        <Links />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 mt-20">
        <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>
        <div className="mb-10 text-base sm:text-lg">
          <p>
            I&apos;m an Information Systems graduate from UNIKOM with a GPA of 3.9,
            my academic journey and hands-on projects have given me experience in building web applications, 
            managing large-scale data, and applying machine learning for practical solutions.
          </p>
          <br />
          <p>
            Beyond technical skills, I also enjoy collaborating in teams, learning from challenges, and 
            contributing to projects that create meaningful impact. I&apos;m eager to keep growing and 
            exploring how technology and data can shape better solutions for the future.
          </p>
        </div>
        <Skills />
        <Experience />
        <Certif />
      </section>

      {/* Work Section */}
      <section id="work" className="scroll-mt-24 mt-20">
        <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Project</h1>
        <div className="flex flex-col gap-5">
          {PROJECTS.map((project, id) => (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <img
                className="rounded-base border-border shadow-shadow h-auto w-full border-2"
                src={`${project.previewImage}`}
                alt={project.name}
              />
              <div className="text-main-foreground font-base mt-5">
                <h2 className="font-heading text-xl sm:text-2xl">
                  {project.name}
                </h2>
                <p className="mt-2">{project.description}</p>
                {(project.liveLink || project.repoUrl) && (
                  <div className="mt-8 grid grid-cols-2 gap-5">
                    {project.liveLink && !project.repoUrl && (
                      <a
                        className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY col-span-2 cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                        href={project.liveLink}
                        target="_blank"
                      >
                        {project.liveLabel || 'Visit'}
                      </a>
                    )}
                    {project.repoUrl && !project.liveLink && (
                      <a
                        className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY col-span-2 cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                        href={project.repoUrl}
                        target="_blank"
                      >
                        {project.repoLabel || 'Github'}
                      </a>
                    )}
                    {project.liveLink && project.repoUrl && (
                      <>
                        <a
                          className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                          href={project.liveLink}
                          target="_blank"
                        >
                          {project.liveLabel || 'Visit'}
                        </a>
                        <a
                          className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                          href={project.repoUrl}
                          target="_blank"
                        >
                          {project.repoLabel || 'Github'}
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
