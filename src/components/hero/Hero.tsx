import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
}

export default function Hero({ title, subtitle, backgroundImage, ctaText, ctaLink }: HeroProps) {
  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 p-4">
        <h1 className="text-4xl font-serif mb-2">{title}</h1>
        {subtitle && <p className="text-lg mb-4">{subtitle}</p>}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-gold-rich text-white px-4 py-2 rounded"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface HeroProps {
  image: string
  heading: string
  subheading: string
}

export default function Hero({ image, heading, subheading }: HeroProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div
      className="relative w-full h-[60vh] md:h-[70vh] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className={`relative z-10 text-center text-white p-4 max-w-2xl transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-serif mb-4">{heading}</h1>
        <p className="text-lg md:text-2xl mb-8">{subheading}</p>
        <Link
          href="/shop"
          className="inline-block bg-gold-rich hover:bg-gold-light text-white px-6 py-3 uppercase tracking-wide"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  )
}

main
