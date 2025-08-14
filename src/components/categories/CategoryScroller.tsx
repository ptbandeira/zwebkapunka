import React from 'react'

interface Category {
  title: string
  image: string
}

interface CategoryScrollerProps {
  categories: Category[]
  className?: string
}

export function CategoryScroller({ categories, className = '' }: CategoryScrollerProps) {
  return (
    <div className={`flex flex-col gap-4 md:flex-row md:space-x-4 md:overflow-x-auto ${className}`}>
      {categories.map((category) => (
        <div
          key={category.title}
          className="relative group flex-shrink-0 w-full md:w-64 h-48 overflow-hidden rounded-lg"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-300 brightness-90 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end">
            <span className="text-white p-4 text-lg font-semibold uppercase tracking-wide">
              {category.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryScroller
