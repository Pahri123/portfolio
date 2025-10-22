'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CERTIF from '@/data/certif'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SiCheckmarx } from '@icons-pack/react-simple-icons'

export default function Certif() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        variants={cardVariants}
        className="font-heading mb-8 text-center text-xl sm:text-2xl"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CERTIF.map((cert, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <motion.div
                variants={cardVariants}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="group rounded-base text-main-foreground bg-[#FFF700] border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY relative w-full cursor-pointer overflow-hidden border-2 p-4 text-left transition-all hover:shadow-none sm:p-5"
              >
                <div className="relative z-10">
                  <h3 className="font-heading flex items-center justify-between text-lg sm:text-xl">
                    {cert.name} <SiCheckmarx className="ml-2 text-xl" />
                  </h3>
                  <p className="text-muted-foreground mt-1 mb-3 text-sm">
                    {cert.date}
                  </p>
                  <p className="text-sm leading-relaxed">{cert.description}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
                  <span className="rounded border border-white px-4 py-2 text-sm font-semibold text-white">
                    View Certificate
                  </span>
                </div>
              </motion.div>
            </DialogTrigger>

            {/* Dialog content shows the PDF preview from Google Drive */}
            <DialogContent className="w-full sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>{cert.name}</DialogTitle>
                <DialogDescription>
                  Preview of the certification document.
                </DialogDescription>
              </DialogHeader>

              <div className="h-[600px] w-full">
                <iframe
                  src={cert.pdfUrl || ''}
                  className="h-full w-full rounded-md border-none"
                  allow="autoplay"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </motion.div>
  )
}
