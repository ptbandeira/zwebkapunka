import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-taupe-light">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 border border-taupe-light/30 rounded-full flex items-center justify-center">
                <span className="text-2xl font-serif text-taupe-light">K</span>
              </div>
              <span className="text-2xl font-serif text-taupe-light tracking-wide">Kapunka</span>
            </div>
            <p className="text-taupe-light mb-8 max-w-md leading-relaxed font-light">
              Quiet strength. Pure care. Calm and comfort for sensitive skin with pure first-press argan oil and a simple, disciplined method.
            </p>
            <p className="text-sm text-sage-taupe font-light italic">
              "Simple is not easy. It's a choice."
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-serif text-taupe-light mb-6 tracking-wide uppercase">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/method" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  Professionals
                </Link>
              </li>
              <li>
                <Link href="/origin" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  Origin & Stewardship
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-serif text-taupe-light mb-6 tracking-wide uppercase">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-taupe-light hover:text-gold-light transition-colors font-light">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-taupe/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-sage-taupe font-light">
              <p>© {new Date().getFullYear()} Kapunka. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <Link href="/privacy" className="text-sage-taupe hover:text-gold-light transition-colors font-light">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sage-taupe hover:text-gold-light transition-colors font-light">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-sage-taupe hover:text-gold-light transition-colors font-light">
                Shipping & Returns
              </Link>
              <Link href="/compliance" className="text-sage-taupe hover:text-gold-light transition-colors font-light">
                Compliance
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-sage-taupe/30 text-center">
            <p className="text-sm text-sage-taupe font-light leading-relaxed max-w-3xl mx-auto">
              Kapunka complies with international cosmetics regulations. Our products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}