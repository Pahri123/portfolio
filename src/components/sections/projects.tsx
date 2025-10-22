'use client'

import { motion } from 'framer-motion'
import PROJECTS from '@/data/projects'

export default function Projects() {
  const projectVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const projectItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="work" className="pt-20 mb-5 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading mb-8 text-xl sm:text-2xl text-center"
        >
          Featured Projects
        </motion.h1>
        
        <motion.div
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8 md:gap-5"
        >
          {PROJECTS.map((project, id) => (
            <motion.div
              key={id}
              variants={projectItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="border-border shadow-shadow rounded-base bg-main border-2 p-3 sm:p-5"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
