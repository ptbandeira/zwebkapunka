"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/method", label: "The Method" },
    { href: "/shop", label: "Shop" },
    { href: "/professionals", label: "Professionals" },
    { href: "/origin", label: "Origin" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-taupe-light/20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 border border-charcoal/20 rounded-full flex items-center justify-center">
              <span className="text-xl font-serif text-charcoal">K</span>
            </div>
            <span className="text-xl font-serif text-charcoal tracking-wide">Kapunka</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-gold-rich transition-colors font-light tracking-wide text-sm uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="text-charcoal hover:text-gold-rich font-light tracking-wide text-sm uppercase"
            >
              Contact
            </Button>
            <Button 
              variant="outline" 
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-6 py-2 font-light tracking-wide text-sm uppercase"
            >
              Shop
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-charcoal" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 border border-charcoal/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-serif text-charcoal">K</span>
                    </div>
                    <span className="text-xl font-serif text-charcoal tracking-wide">Kapunka</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6 text-charcoal" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block text-lg font-light text-charcoal hover:text-gold-rich transition-colors py-2 tracking-wide"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="space-y-4 pt-8 border-t border-taupe-light/20">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-charcoal hover:text-gold-rich font-light tracking-wide text-sm uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-6 py-3 font-light tracking-wide text-sm uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    Shop
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}