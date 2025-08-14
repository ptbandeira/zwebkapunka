          </div>

          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <button className="relative" aria-label="Wishlist">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-rich text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart (Sheet trigger) */}
            <MiniCart />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
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
                {/* Cart trigger inside mobile menu */}
                <MiniCart />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
