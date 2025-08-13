'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-light tracking-wide">
              Kapunka
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                Home
              </Link>
              <Link href="/method" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                Method
              </Link>
              <Link href="/shop" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                Shop
              </Link>
              <Link href="/professionals" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                Professionals
              </Link>
              <Link href="/origin" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">
                Origin
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide">
                Home
              </Link>
              <Link href="/method" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide">
                Method
              </Link>
              <Link href="/shop" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide">
                Shop
              </Link>
              <Link href="/professionals" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide">
                Professionals
              </Link>
              <Link href="/origin" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide">
                Origin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
