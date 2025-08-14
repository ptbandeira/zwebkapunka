"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-light mb-4">Kapunka</h2>
            <p className="text-gray-400 mb-4">Quiet strength. Pure care.</p>
            <p className="text-gray-400 text-sm">
              Discover our signature method of quiet strength and pure care through carefully crafted formulations.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-light mb-4 uppercase tracking-wide">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop/skin-care" className="text-gray-400 hover:text-white text-sm">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/shop/hair-care" className="text-gray-400 hover:text-white text-sm">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="/shop/body-care" className="text-gray-400 hover:text-white text-sm">
                  Body Care
                </Link>
              </li>
              <li>
                <Link href="/shop/fragrance" className="text-gray-400 hover:text-white text-sm">
                  Fragrance
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-lg font-light mb-4 uppercase tracking-wide">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/method" className="text-gray-400 hover:text-white text-sm">
                  Our Method
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="text-gray-400 hover:text-white text-sm">
                  For Professionals
                </Link>
              </li>
              <li>
                <Link href="/origin" className="text-gray-400 hover:text-white text-sm">
                  Our Origin
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-light mb-4 uppercase tracking-wide">Join our mailing list</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            {subscribed && <p className="text-green-500 text-sm mt-2">Thanks for subscribing!</p>}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Kapunka. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="flex space-x-4">
              <img src="/visa.svg" alt="Visa" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="/paypal.svg" alt="PayPal" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
