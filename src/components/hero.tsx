"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SiGithub, SiGmail, SiLinkedin } from '@icons-pack/react-simple-icons'
import Image from 'next/image'

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Ganti dengan URL file CV kamu dari Google Drive (direct download)
  const resumeUrl =
    'https://drive.google.com/uc?export=download&id=147MkR0v-H5qcCEqbfggFMZl29-TC6WfL'

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 text-5xl font-bold"
            >
              Hi! My name is Fakhrie
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              Web Developer & Data Scientist @Bandung, West Java
            </motion.h2>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={scrollToWork}
                className="rounded-full bg-main px-8 hover:brightness-90 cursor-pointer"
              >
                View My Projects
              </Button>

              {/* New Resume Button */}
              <a
                href={resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-secondary px-8 hover:brightness-90 cursor-pointer">
                  Get My Resume
                </Button>
              </a>

              {/* Social Links */}
              <div className="mr-auto mt-4 flex w-full flex-wrap items-center gap-5">
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                  target="_blank"
                  href="mailto:nabilfakhrie123@gmail.com"
                >
                  <SiGmail title="" />
                </a>
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                  target="_blank"
                  href="https://github.com/Pahri123"
                >
                  <SiGithub title="" />
                </a>
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                  target="_blank"
                  href="https://www.linkedin.com/in/fakhrie-n/"
                >
                  <SiLinkedin title="" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="order-1 flex justify-center md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-main/20 blur-3xl"></div>
              <div className="relative h-48 w-48 md:h-80 md:w-80">
                <Image
                  src="/avatar.jpg"
                  alt="Fakhrie Nabil"
                  fill
                  className="rounded-full border-4 border-main/30 object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
