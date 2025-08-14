import Image from 'next/image'

interface AboutSectionProps {
  title: string
  text: string
  image?: string
}

export default function AboutSection({ title, text, image }: AboutSectionProps) {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center w-full">
      <div>
        <h2 className="text-3xl font-serif mb-4">{title}</h2>
        <p className="text-muted-foreground whitespace-pre-line">{text}</p>
      </div>
      {image && (
        <div className="relative w-full h-64">
          <Image src={image} alt={title} fill className="object-cover rounded" />
        </div>
      )}
    </section>
  )
}
