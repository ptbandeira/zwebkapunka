'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Heart, Menu, User, X } from 'lucide-react'
import SearchBar from './SearchBar'
import MiniCart from './MiniCart'
import { useCart } from '@/hooks/use-cart'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { wishlist } = useCart()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-serif">
              Kapunka
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/method" className="uppercase tracking-wide text-sm hover:text-gray-600">
              Method
            </Link>
            <Link href="/shop" className="uppercase tracking-wide text-sm hover:text-gray-600">
              Shop
            </Link>
            <Link href="/professionals" className="uppercase tracking-wide text-sm hover:text-gray-600">
              Professionals
            </Link>
            <Link href="/origin" className="uppercase tracking-wide text-sm hover:text-gray-600">
              Origin
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative" aria-label="Wishlist">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-rich text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <MiniCart />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium uppercase tracking-wide text-gray-900 hover:text-gray-600"
              >
                Home
              </Link>
              <Link
                href="/method"
                className="block px-3 py-2 text-base font-medium uppercase tracking-wide text-gray-900 hover:text-gray-600"
              >
                Method
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-base font-medium uppercase tracking-wide text-gray-900 hover:text-gray-600"
              >
                Shop
              </Link>
              <Link
                href="/professionals"
                className="block px-3 py-2 text-base font-medium uppercase tracking-wide text-gray-900 hover:text-gray-600"
              >
                Professionals
              </Link>
              <Link
                href="/origin"
                className="block px-3 py-2 text-base font-medium uppercase tracking-wide text-gray-900 hover:text-gray-600"
              >
                Origin
              </Link>
              <div className="mt-4 flex space-x-4 px-3">
                <button aria-label="Account">
                  <User className="h-6 w-6" />
                </button>
                <MiniCart />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
