"use client"

import { motion } from 'framer-motion'
import SKILLS from '@/data/skills'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      className="mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl"
        variants={headingVariants}
      >
        Technical Skills
      </motion.h2>

      {SKILLS.map((item, id) => (
        <motion.div key={id} variants={itemVariants}>
          <h3 className="mb-3 text-l font-semibold md:text-xl lg:text-2xl">
            {item.field}
          </h3>

          <motion.div className="mb-10 flex flex-wrap gap-5">
            {item.skills.map((skill, id) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <skill.icon className="h-8 w-8" title="" />
                    </TooltipTrigger>
                    <TooltipContent>{skill.skill}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}