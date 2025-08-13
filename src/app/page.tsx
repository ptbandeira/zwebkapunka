import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Aesop Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal mb-8 leading-tight tracking-wide">
              Quiet strength
              <br />
              <span className="text-gold-rich">Pure care</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Calm and comfort for sensitive skin with pure first-press argan oil and a simple, disciplined method.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-12 py-4 text-lg font-light tracking-wide"
              >
                <Link href="/method">Discover the Method</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-12 py-4 text-lg font-light tracking-wide"
              >
                <Link href="/shop">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Essence - Editorial Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
                Calm skin finds its strength
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  Kapunka is built around a single, precise idea: quiet strength. We serve people in sensitive moments with pure first-press argan oil and The Kapunka Method — a clear, repeatable way to apply it.
                </p>
                <p>
                  We avoid noise. We keep the language clean and cosmetics-safe. We respect skin and the hands that care for it.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="mt-8 border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-8 py-3"
              >
                <Link href="/origin">Learn More</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-taupe-light/10 h-96 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gold-light/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-serif text-gold-rich">K</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Product imagery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Preview - Clean Grid */}
      <section className="py-24 bg-taupe-light/5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              The Kapunka Method
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Simple is not easy. It's a choice. We teach a disciplined approach to skin care that honors both the product and the person.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "Dose", desc: "3–5 drops in clean hands" },
              { step: "Warm", desc: "rub palms lightly to spread" },
              { step: "Press", desc: "gentle pressure on face and neck" },
              { step: "Glide", desc: "light–medium touch" },
              { step: "Pause", desc: "let the finish settle" }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="mb-6">
                  <div className="w-16 h-16 border border-charcoal/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:border-charcoal transition-colors">
                    <span className="text-xl font-serif text-charcoal">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg font-serif text-charcoal mb-2">{item.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-12 py-4 text-lg font-light tracking-wide"
            >
              <Link href="/method">Explore the Full Method</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Preview - Minimalist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              Pure First-Press Argan Oil
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Single-origin oil with documented origin, batch/lot on every unit, and the purest expression of care for sensitive skin.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { size: "30ml", desc: "Comfort Kit for daily use", use: "Perfect for home and travel" },
              { size: "100ml", desc: "Back-bar professional size", use: "For clinics, spas, and treatments" },
              { size: "2–5ml", desc: "Hotel amenity size", use: "Calm after travel" }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="mb-8">
                  <div className="bg-taupe-light/5 h-48 rounded-sm flex items-center justify-center group-hover:bg-taupe-light/10 transition-colors">
                    <div className="text-center">
                      <div className="w-12 h-20 bg-gold-light/10 rounded mx-auto mb-4 flex items-center justify-center">
                        <span className="text-lg font-serif text-gold-rich">{product.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-3">{product.size}</h3>
                <p className="text-muted-foreground mb-2 font-light">{product.desc}</p>
                <p className="text-sm text-muted-foreground mb-6 font-light">{product.use}</p>
                <Button 
                  variant="outline" 
                  className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none px-6 py-2 w-full group-hover:bg-charcoal group-hover:text-white transition-colors"
                >
                  <Link href={`/shop/${product.size.toLowerCase()}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note - Editorial */}
      <section className="py-24 bg-taupe-light/5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-serif text-charcoal mb-12 leading-relaxed font-light">
              "I teach hands to slow down. Skin answers with calm."
            </blockquote>
            <div className="space-y-2">
              <p className="text-lg text-gold-rich font-light">— Mónica Ruiz, Founder</p>
              <p className="text-muted-foreground font-light">Nurse and Manual Therapist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Clean Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              What We Never Trade
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { title: "Purity & Simplicity", desc: "Single-origin oil; no noisy add-ons" },
              { title: "Craft & Origin", desc: "Hands, glass, linen, stone; daylight at ~45°" },
              { title: "Dignity & Respect", desc: "Gentle wording; sensitive-skin suitability" },
              { title: "Stewardship", desc: "Training, hygiene, and responsible retail partners" },
              { title: "Consistency & Transparency", desc: "Batch/lot; QR to method; stable pricing" }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-serif text-charcoal mb-4 leading-tight">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}