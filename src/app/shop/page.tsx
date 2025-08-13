import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Pure First-Press Argan Oil",
      size: "30ml",
      description: "Comfort Kit for daily use",
      details: "Perfect for home and travel rituals",
      price: "€65",
      features: [
        "Daily use size",
        "Travel-friendly",
        "QR to method on pack",
        "Batch/lot visible",
        "ES/PT bilingual"
      ],
      bestFor: "Individual daily care",
      image: "/placeholder-product-30ml"
    },
    {
      id: 2,
      name: "Pure First-Press Argan Oil",
      size: "100ml", 
      description: "Back-bar professional size",
      details: "For clinics, spas, and treatments",
      price: "€180",
      features: [
        "Professional size",
        "~3ml per treatment",
        "Protocol card included",
        "Refill available",
        "Training materials"
      ],
      bestFor: "Clinics, spas, professionals",
      image: "/placeholder-product-100ml",
      isProfessional: true
    },
    {
      id: 3,
      name: "Pure First-Press Argan Oil",
      size: "2–5ml",
      description: "Hotel amenity size", 
      details: "Calm after travel",
      price: "Contact for pricing",
      features: [
        "Hotel amenity size",
        "Custom branding options",
        "QR to method",
        "Story card included",
        "Bulk ordering"
      ],
      bestFor: "Hotels, hospitality",
      image: "/placeholder-product-amenity",
      isHospitality: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Aesop Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-8 leading-tight tracking-wide">
              Pure First-Press
              <br />
              <span className="text-gold-rich">Argan Oil</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Single-origin oil with documented origin and batch/lot on every unit
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid - Minimalist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              Choose Your Size
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Each size is carefully crafted for its intended use, maintaining the same purity and quality across all formats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="mb-12">
                  <div className="bg-taupe-light/5 h-64 rounded-sm flex items-center justify-center group-hover:bg-taupe-light/10 transition-colors">
                    <div className="text-center">
                      <div className="w-16 h-24 bg-gold-light/10 rounded mx-auto mb-6 flex items-center justify-center">
                        <span className="text-2xl font-serif text-gold-rich">{product.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="space-y-2 mb-4">
                      {product.isProfessional && (
                        <span className="text-sm text-muted-foreground font-light tracking-wide">PROFESSIONAL</span>
                      )}
                      {product.isHospitality && (
                        <span className="text-sm text-muted-foreground font-light tracking-wide">HOSPITALITY</span>
                      )}
                      <h3 className="text-3xl font-serif text-charcoal leading-tight">{product.size}</h3>
                      <p className="text-lg text-gold-rich font-light leading-relaxed">
                        {product.description}
                      </p>
                      <p className="text-muted-foreground font-light">
                        {product.details}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm text-muted-foreground font-light tracking-wide uppercase">Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground font-light leading-relaxed">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm text-muted-foreground font-light tracking-wide uppercase">Best For</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{product.bestFor}</p>
                  </div>

                  <div className="pt-6 border-t border-taupe-light/20">
                    <p className="text-2xl font-serif text-charcoal mb-6 font-light">
                      {product.price}
                    </p>
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-6 py-3 font-light tracking-wide transition-colors"
                      >
                        {product.price.includes("Contact") ? "Inquire Now" : "Add to Cart"}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-6 py-3 font-light tracking-wide transition-colors"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details - Editorial */}
      <section className="py-24 bg-taupe-light/5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-16 leading-tight text-center">
              Our Promise of Purity
            </h2>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h3 className="text-2xl font-serif text-charcoal mb-8 leading-tight">Single-Origin Oil</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Our argan oil comes from a single, documented source. We know exactly where each batch originates, who harvested it, and when it was first-pressed.
                  </p>
                  <p>
                    This traceability ensures consistency and quality that you can trust, batch after batch.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-charcoal mb-8 leading-tight">First-Press Method</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    We use only the first press of the argan nuts, capturing the purest, most potent expression of the oil. Subsequent presses are sold for other purposes.
                  </p>
                  <p>
                    This commitment to first-press quality ensures maximum efficacy and the light, comfortable finish that sensitive skin loves.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-16 rounded-sm">
              <h3 className="text-2xl font-serif text-charcoal mb-12 leading-tight text-center">Batch & Lot Transparency</h3>
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="w-16 h-16 border border-charcoal/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">#</span>
                  </div>
                  <h4 className="text-lg font-serif text-charcoal mb-4 leading-tight">Visible on Every Unit</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Batch and lot numbers are clearly visible on the base label of every bottle
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 border border-charcoal/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">📱</span>
                  </div>
                  <h4 className="text-lg font-serif text-charcoal mb-4 leading-tight">QR to Method</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Scan the QR code on any unit to access The Kapunka Method instantly
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 border border-charcoal/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">🔍</span>
                  </div>
                  <h4 className="text-lg font-serif text-charcoal mb-4 leading-tight">Full Traceability</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Complete supply chain documentation available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide - Clean Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-16 leading-tight text-center">
              How to Use
            </h2>

            <div className="space-y-16">
              <div className="pb-16 border-b border-taupe-light/20">
                <h3 className="text-2xl font-serif text-charcoal mb-12 leading-tight">For Daily Use (30ml)</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-serif text-charcoal mb-6 leading-tight">Morning Ritual</h4>
                    <ol className="space-y-3 text-muted-foreground font-light">
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">1</span>
                        <span>Cleanse face and pat dry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">2</span>
                        <span>Use 3 drops of oil</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">3</span>
                        <span>Follow The Kapunka Method</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">4</span>
                        <span>Allow to absorb before makeup</span>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-charcoal mb-6 leading-tight">Evening Ritual</h4>
                    <ol className="space-y-3 text-muted-foreground font-light">
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">1</span>
                        <span>Cleanse face and pat dry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">2</span>
                        <span>Use 5 drops of oil</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">3</span>
                        <span>Follow The Kapunka Method</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-rich mr-3 mt-1">4</span>
                        <span>Let absorb overnight</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="pb-16 border-b border-taupe-light/20">
                <h3 className="text-2xl font-serif text-charcoal mb-8 leading-tight">For Professional Use (100ml)</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    The 100ml back-bar size is designed for professional use in clinics, spas, and treatment rooms. Each bottle provides approximately 33 treatments.
                  </p>
                  <div className="bg-taupe-light/5 p-8 rounded-sm">
                    <h4 className="text-lg font-serif text-charcoal mb-4 leading-tight">Treatment Guidelines:</h4>
                    <ul className="space-y-2">
                      <li>• Use approximately 3ml per treatment</li>
                      <li>• Incorporate into facial massages and after-care</li>
                      <li>• Follow provided protocol cards</li>
                      <li>• Offer retail 30ml size for home use</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-charcoal mb-8 leading-tight">For Hospitality (2–5ml)</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                  <p>
                    Our amenity size brings the comfort of Kapunka to hotel guests, providing a moment of calm after travel.
                  </p>
                  <div className="bg-taupe-light/5 p-8 rounded-sm">
                    <h4 className="text-lg font-serif text-charcoal mb-4 leading-tight">Hotel Partnership Features:</h4>
                    <ul className="space-y-2">
                      <li>• Custom branding options available</li>
                      <li>• Co-branded spa menu integration</li>
                      <li>• Story cards for boutique placement</li>
                      <li>• Staff training available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability - Minimalist */}
      <section className="py-24 bg-taupe-light/5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-16 leading-tight">
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground mb-20 max-w-3xl mx-auto leading-relaxed font-light">
              We believe in responsible stewardship of both natural resources and our customers' trust. Every decision we make reflects our commitment to purity, transparency, and sustainability.
            </p>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="w-16 h-16 border border-charcoal/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">♻️</span>
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-6 leading-tight">Glass Packaging</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We use clear glass bottles for our core SKUs to minimize environmental impact and preserve product purity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 border border-charcoal/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">🌱</span>
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-6 leading-tight">Responsible Sourcing</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Our argan oil is sourced through partnerships that support local communities and sustainable harvesting practices.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 border border-charcoal/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">📦</span>
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-6 leading-tight">Refill Program</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Refill options available for professional sizes to reduce waste and support our trade partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Clean */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-12 leading-tight">
              Ready to Experience Pure Care?
            </h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              Choose the size that's right for you and discover the difference that pure first-press argan oil and The Kapunka Method can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-12 py-4 text-lg font-light tracking-wide"
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-12 py-4 text-lg font-light tracking-wide"
              >
                <Link href="/professionals">Find a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}