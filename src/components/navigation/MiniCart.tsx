'use client'

import Link from 'next/link'

export default function MiniCart() {
  return (
    <div className="absolute top-16 right-4 z-50 w-64 border border-gray-200 bg-white shadow-lg p-4">
      <p className="text-sm">Your cart is empty.</p>
      <Link href="/cart" className="mt-2 block text-center text-sm text-blue-600 hover:underline">
        View Cart
      </Link>
    </div>
  )
}

