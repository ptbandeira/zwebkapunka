'use client'

import Link from 'next/link'
import { useState } from 'react'
import SearchBar from './SearchBar'
import MiniCart from './MiniCart'
import { Menu, X, ShoppingCart, User } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-light tracking-wide">
              Kapunka
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 flex justify-center px-4">
            <SearchBar />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Account">
              <User className="h-6 w-6" />
            </button>
            <button aria-label="Cart" onClick={() => setIsMiniCartOpen(!isMiniCartOpen)}>
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/method"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide"
              >
                Method
              </Link>
              <Link
                href="/shop"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide"
              >
                Shop
              </Link>
              <Link
                href="/professionals"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide"
              >
                Professionals
              </Link>
              <Link
                href="/origin"
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium uppercase tracking-wide"
              >
                Origin
              </Link>
              <div className="mt-4 flex space-x-4 px-3">
                <button aria-label="Account">
                  <User className="h-6 w-6" />
                </button>
                <button aria-label="Cart" onClick={() => setIsMiniCartOpen(!isMiniCartOpen)}>
                  <ShoppingCart className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isMiniCartOpen && <MiniCart />}
    </nav>
  )
}

