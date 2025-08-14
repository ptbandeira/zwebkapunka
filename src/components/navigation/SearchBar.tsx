'use client'

import { useState, useEffect } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [recent, setRecent] = useState<string[]>([])
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('recentSearches') : null
    if (stored) {
      try {
        setRecent(JSON.parse(stored))
      } catch {}
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const term = query.trim()
    if (!term) return
    const updated = [term, ...recent.filter((r) => r !== term)].slice(0, 5)
    setRecent(updated)
    if (typeof window !== 'undefined') {
      localStorage.setItem('recentSearches', JSON.stringify(updated))
    }
    setQuery('')
  }

  return (
    <div className="relative w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 100)}
          className="w-24 md:w-32 focus:w-56 md:focus:w-72 transition-all duration-300 border border-gray-300 rounded-md px-3 py-1 text-sm"
        />
      </form>
      {focused && recent.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow">
          {recent.map((item, idx) => (
            <li
              key={idx}
              className="px-3 py-1 text-sm hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => setQuery(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

