'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface AboutSectionProps {
  image: string
  title: string
  body: string
  parallax?: boolean
}

export default function AboutSection({ image, title, body, parallax = false }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(textRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [-50, 50] : [0, 0])

  return (
    <section ref={containerRef} className="flex flex-col md:flex-row items-center gap-8">
      <motion.div className="w-full md:w-1/2 overflow-hidden" style={parallax ? { y } : undefined}>
        <Image src={image} alt={title} width={800} height={600} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 20 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl font-serif mb-4">{title}</h2>
        <p className="text-muted-foreground">{body}</p>
      </motion.div>
    </section>
  )
}
