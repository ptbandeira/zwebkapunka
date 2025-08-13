import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function MethodPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-taupe-light/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 tracking-wide">
            The Kapunka Method
          </h1>
          <p className="text-xl md:text-2xl text-gold-rich mb-8 max-w-3xl mx-auto">
            A simple, disciplined approach to caring for sensitive skin
          </p>
        </div>
      </section>

      {/* Method Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <blockquote className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-relaxed">
              "Simple is not easy. It's a choice."
            </blockquote>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Kapunka Method is built on precision and respect. Each step is designed to maximize the benefits of pure first-press argan oil while honoring the skin's natural state. We teach hands to slow down, and skin answers with calm.
            </p>
            <Separator className="max-w-2xl mx-auto bg-gold-light" />
          </div>
        </div>
      </section>

      {/* The Five Steps */}
      <section className="py-20 bg-taupe-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Five Steps to Calm
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each step builds upon the last, creating a ritual that transforms daily skin care into a moment of quiet strength.
            </p>
          </div>

          <div className="space-y-20 max-w-6xl mx-auto">
            {/* Step 1: Dose */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-serif text-white">1</span>
                  </div>
                  <h3 className="text-3xl font-serif text-foreground">Dose</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Begin with 3–5 drops of pure first-press argan oil in clean, dry hands. The amount is precise—enough to cover face and neck without waste.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Why it matters:</strong> The right dose ensures optimal coverage while maintaining the light, comfortable finish that sensitive skin needs.
                </p>
                <div className="bg-taupe-light/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pro tip:</strong> Start with 3 drops for daytime, 5 drops for nighttime or when skin needs extra comfort.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-serif text-charcoal">💧</span>
                    </div>
                    <p className="text-muted-foreground">Dose visualization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Warm */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-serif text-charcoal">🤲</span>
                    </div>
                    <p className="text-muted-foreground">Warm visualization</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-serif text-white">2</span>
                  </div>
                  <h3 className="text-3xl font-serif text-foreground">Warm</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Rub palms together lightly for 10–15 seconds until the oil feels warm and spreads evenly across your hands.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Why it matters:</strong> Warming the oil activates its natural properties and prepares it for better absorption into the skin.
                </p>
                <div className="bg-taupe-light/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pro tip:</strong> The warmth should be gentle, not hot. If your hands feel cold, run them under warm water first and dry completely.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Press */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-serif text-white">3</span>
                  </div>
                  <h3 className="text-3xl font-serif text-foreground">Press</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Place your warm, oiled hands gently on your face and neck. Apply light, even pressure for 5–10 seconds.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Why it matters:</strong> Pressing allows the oil to make initial contact with the skin without friction, which is especially important for sensitive or reactive skin.
                </p>
                <div className="bg-taupe-light/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pro tip:</strong> Focus on areas that feel particularly dry or sensitive. Let your hands rest where the skin needs extra comfort.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-serif text-charcoal">👐</span>
                    </div>
                    <p className="text-muted-foreground">Press visualization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Glide */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-serif text-charcoal">✋</span>
                    </div>
                    <p className="text-muted-foreground">Glide visualization</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-serif text-white">4</span>
                  </div>
                  <h3 className="text-3xl font-serif text-foreground">Glide</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Using light to medium pressure, glide your hands upward and outward across face and neck. Avoid rubbing or tugging at the skin.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Why it matters:</strong> Gliding distributes the oil evenly while stimulating circulation. The light touch respects the skin's barrier function.
                </p>
                <div className="bg-taupe-light/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pro tip:</strong> Use upward motions on the neck and outward motions on the cheeks. Always move with the skin, never against it.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5: Pause */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-serif text-white">5</span>
                  </div>
                  <h3 className="text-3xl font-serif text-foreground">Pause</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Let your hands rest lightly on your skin for 10–15 seconds. Take a deep breath and allow the oil to settle.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Why it matters:</strong> The pause allows the oil to fully absorb while giving you a moment of calm. It's where the ritual becomes meditation.
                </p>
                <div className="bg-taupe-light/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pro tip:</strong> Use this moment to check in with your skin. Notice how it feels—softer, calmer, more comfortable.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-serif text-charcoal">🧘</span>
                    </div>
                    <p className="text-muted-foreground">Pause visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Touch & Timing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-12 text-center">
              Touch & Timing
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">When to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Morning and night at home</strong>
                        <p className="text-muted-foreground">As part of your daily skin care ritual</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">After cleansing</strong>
                        <p className="text-muted-foreground">On clean, damp skin for best absorption</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Post-treatment</strong>
                        <p className="text-muted-foreground">Timing at clinician's discretion</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Travel or climate changes</strong>
                        <p className="text-muted-foreground">When skin needs extra comfort</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">Hygiene Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Clean hands</strong>
                        <p className="text-muted-foreground">Always start with freshly washed hands</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">No double-dipping</strong>
                        <p className="text-muted-foreground">Use dropper as intended</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Disinfected tools</strong>
                        <p className="text-muted-foreground">In professional settings</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3">•</span>
                      <div>
                        <strong className="text-foreground">Keep droppers clean</strong>
                        <p className="text-muted-foreground">Avoid contact with skin</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-20 bg-taupe-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-foreground mb-6">
              Training & Certification
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              We offer comprehensive training for professionals who want to bring The Kapunka Method to their practice. Our certification ensures consistency and quality across all partner locations.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-taupe-light bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">1</span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">Introduction</h3>
                  <p className="text-muted-foreground">Brand philosophy and product knowledge</p>
                </CardContent>
              </Card>

              <Card className="border-taupe-light bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">2</span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">Technique</h3>
                  <p className="text-muted-foreground">Hands-on practice with The Method</p>
                </CardContent>
              </Card>

              <Card className="border-taupe-light bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">3</span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">Assessment</h3>
                  <p className="text-muted-foreground">Practical evaluation and certification</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg border border-taupe-light">
              <h3 className="text-2xl font-serif text-foreground mb-4">Certification Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-gold-rich mr-2">✓</span>
                    <span className="text-muted-foreground">Listed as certified partner on website</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-rich mr-2">✓</span>
                    <span className="text-muted-foreground">Access to training materials</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-rich mr-2">✓</span>
                    <span className="text-muted-foreground">Priority support</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-gold-rich mr-2">✓</span>
                    <span className="text-muted-foreground">Marketing assets</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-rich mr-2">✓</span>
                    <span className="text-muted-foreground">Annual refresher training</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-rich mr-2">✓</span>
                    <span className="text-muted-foreground">Co-branding opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-relaxed">
              "I teach hands to slow down. Skin answers with calm."
            </blockquote>
            <p className="text-lg text-gold-rich font-medium mb-8">— Mónica Ruiz, Founder</p>
            <Button size="lg" className="bg-gold-rich hover:bg-gold-light text-white">
              Become a Certified Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}