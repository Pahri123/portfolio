'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: 'Data Scientist',
      type: 'Intern',
      company: 'Braincore.id',
      date: 'Mar 2024 - Aug 2024',
      description:
        'Collaborated on developing an Aspect-Based Sentiment Analysis model using SetFit on Indonesian restaurant reviews and created a Tableau dashboard for Jakarta MRT data to generate insights for improving public transportation.',
    },
    {
      title: 'Web Developer & Data Processor',
      type: 'Intern',
      company: 'LLDIKTI Region IV',
      date: 'Feb 2024 - Jun 2024',
      description:
        'Developed a web-based e-archive and data dashboard using Laravel to manage over 35,000 lecturer records while supporting academic data validation across West Java and Banten.',
    },
    {
      title: 'Machine Learning Engineer',
      type: 'Apprenticeship',
      company: 'Braincore x Kerjago',
      date: 'Oct 2023 - Dec 2023',
      description:
        'Led a team project to develop a job portal integrating multi-platform job data with user-based recommendations, featuring efficient data scraping, accurate matching, and deployment on Google Cloud.',
    },
  ]

  return (
    <section id="experience" ref={ref} className="mb-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading mb-8 text-center text-xl sm:text-2xl">
            Experiences
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-main"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-main sm:block md:left-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative grid items-center gap-8 md:grid-cols-2 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-[#1f2022] bg-main sm:block md:left-1/2"></div>

                {/* Content */}
                <div
                  className={`${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      },
                    }}
                    className="border-border shadow-shadow rounded-base bg-secondary text-main-foreground border-2 p-4 sm:p-5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                        <Briefcase size={20} />
                      </div>
                      <div
                        className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                      >
                        <h3 className="text-l font-semibold md:text-xl lg:text-2xl">
                          {exp.title}
                        </h3>
                        <p>{exp.type} @{exp.company}</p>
                      </div>
                    </div>
                    <p className="mb-4">{exp.date}</p>
                    <p className="mb-4">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div
                  className={`hidden md:block ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
