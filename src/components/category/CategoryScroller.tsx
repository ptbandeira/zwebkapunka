import Image from 'next/image'
import Link from 'next/link'

interface Category {
  title: string
  image: string
  link: string
}

interface CategoryScrollerProps {
  categories: Category[]
}

export default function CategoryScroller({ categories }: CategoryScrollerProps) {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex space-x-4">
        {categories.map((cat, index) => (
          <Link key={index} href={cat.link} className="flex-shrink-0 w-48">
            <div className="relative h-32 w-full mb-2">
              {cat.image && (
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover rounded"
                />
              )}
            </div>
            <p className="text-center text-sm font-medium">{cat.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
