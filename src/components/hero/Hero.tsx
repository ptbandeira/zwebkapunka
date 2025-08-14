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
