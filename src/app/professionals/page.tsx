import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-taupe-light/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 tracking-wide">
            For Professionals
          </h1>
          <p className="text-xl md:text-2xl text-gold-rich mb-8 max-w-3xl mx-auto">
            Bringing quiet strength to clinical, spa, and hospitality settings
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our network of certified partners who share our commitment to pure care and disciplined methods.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-6">
              Partner with Kapunka
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We designed Kapunka specifically for professional settings where precision, hygiene, and results matter. Our products and methods are tailored for clinics, spas, and hotels that serve clients in sensitive moments.
            </p>
            <Separator className="max-w-2xl mx-auto bg-gold-light" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-taupe-light bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">🏥</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">Clinics</h3>
                <p className="text-muted-foreground mb-4">
                  After-care comfort and retail solutions for medical and aesthetic practices
                </p>
                <Button variant="outline" className="border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-taupe-light bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">💆</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">Spas</h3>
                <p className="text-muted-foreground mb-4">
                  Treatment glide and retail bundles for luxury spa experiences
                </p>
                <Button variant="outline" className="border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-taupe-light bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">🏨</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">Hotels</h3>
                <p className="text-muted-foreground mb-4">
                  Amenity programs and spa partnerships for hospitality excellence
                </p>
                <Button variant="outline" className="border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 bg-taupe-light/10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="clinics" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="clinics" className="font-serif text-lg">Clinics</TabsTrigger>
              <TabsTrigger value="spas" className="font-serif text-lg">Spas</TabsTrigger>
              <TabsTrigger value="hotels" className="font-serif text-lg">Hotels</TabsTrigger>
            </TabsList>

            {/* Clinics Tab */}
            <TabsContent value="clinics" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-serif text-foreground mb-6">Clinics & Medi-spas</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Kapunka is designed for clinical environments where precision and compliance are paramount. Our pure first-press argan oil supports the skin barrier without making medical claims, making it ideal for after-care protocols.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Comforting oil that supports the skin barrier</strong>
                        <p className="text-muted-foreground">Cosmetics-safe language for compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Clinician-controlled timing</strong>
                        <p className="text-muted-foreground">After-treatment use at professional discretion</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Complete hygiene protocols</strong>
                        <p className="text-muted-foreground">Training and certification available</p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gold-rich hover:bg-gold-light text-white">
                    Become a Clinic Partner
                  </Button>
                </div>
                <div>
                  <Card className="border-taupe-light bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-foreground">Clinic Program Includes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Comfort Kit 30ml</span>
                        <Badge variant="secondary">Desk Retail</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Quick-Guide</span>
                        <Badge variant="secondary">Staff Training</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Timing Chart</span>
                        <Badge variant="secondary">Protocol</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Hygiene Rules</span>
                        <Badge variant="secondary">Compliance</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-foreground">Staff Certification</span>
                        <Badge variant="secondary">Quality</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">Clinical Staff Script</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-taupe-light/30 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      <strong>To patients:</strong> "This is Kapunka, a pure first-press argan oil. It supports the skin barrier and leaves a soft, comfortable finish."
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>For home use:</strong> "At home, use 3–5 drops. Warm it between your hands. Press, glide, then pause. Morning and night."
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>Post-treatment:</strong> "After today's procedure, timing is at your clinician's discretion. We'll note what to use and when."
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Additional info:</strong> "There's a QR on the pack with a short how-to. Batch and lot are printed on the base."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Spas Tab */}
            <TabsContent value="spas" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-serif text-foreground mb-6">Spas & Wellness Centers</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our spa program provides clean, reliable back-bar products that glide beautifully during treatments while supporting skin comfort. The Kapunka Method enhances the therapeutic experience for both therapist and client.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Pure argan. Method-led comfort.</strong>
                        <p className="text-muted-foreground">Elevates treatment rituals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">100ml back-bar size</strong>
                        <p className="text-muted-foreground">~3ml per treatment, 33 treatments per bottle</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Protocol cards included</strong>
                        <p className="text-muted-foreground">Consistent application across therapists</p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gold-rich hover:bg-gold-light text-white">
                    Become a Spa Partner
                  </Button>
                </div>
                <div>
                  <Card className="border-taupe-light bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-foreground">Spa Program Includes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Back-Bar 100ml</span>
                        <Badge variant="secondary">Professional Use</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Protocol Cards</span>
                        <Badge variant="secondary">Treatment Guide</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Retail Bundle</span>
                        <Badge variant="secondary">30ml + Treatment</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Therapist Training</span>
                        <Badge variant="secondary">Certification</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-foreground">Refill Program</span>
                        <Badge variant="secondary">Sustainable</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">Treatment Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Facial Treatments</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Massage medium for facial techniques</li>
                        <li>• Final nourishing layer</li>
                        <li>• After-peel or post-extraction comfort</li>
                        <li>• Hand massage during treatment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Body Treatments</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Scalp massage oil</li>
                        <li>• Hand and foot treatment</li>
                        <li>• Cuticle conditioning</li>
                        <li>• Post-treatment ritual</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Hotels Tab */}
            <TabsContent value="hotels" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-serif text-foreground mb-6">Hotels & Hospitality</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our hotel amenity program brings quiet luxury to guest rooms, offering a moment of calm after travel. The QR code integration connects guests to The Kapunka Method, extending the experience beyond their stay.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Calm after travel</strong>
                        <p className="text-muted-foreground">Instant comfort for weary travelers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Amenity 2–5ml with QR</strong>
                        <p className="text-muted-foreground">Connects to digital method guide</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">✓</span>
                      <div>
                        <strong className="text-foreground">Co-branding opportunities</strong>
                        <p className="text-muted-foreground">Spa menu integration available</p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gold-rich hover:bg-gold-light text-white">
                    Become a Hotel Partner
                  </Button>
                </div>
                <div>
                  <Card className="border-taupe-light bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-serif text-foreground">Hotel Program Includes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Amenity 2–5ml</span>
                        <Badge variant="secondary">Guest Rooms</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">QR Method Access</span>
                        <Badge variant="secondary">Digital Experience</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Boutique Tester</span>
                        <Badge variant="secondary">Retail Display</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-taupe-light">
                        <span className="text-foreground">Story Card</span>
                        <Badge variant="secondary">Brand Education</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-foreground">Spa Menu Line</span>
                        <Badge variant="secondary">Co-Branded</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">Hotel Amenity Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-taupe-light/30 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Front of Card</h4>
                        <p className="text-muted-foreground mb-2">
                          <strong>Calm after travel. Scan for how-to.</strong>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Clean, minimal design with hotel branding options
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Back of Card</h4>
                        <p className="text-muted-foreground mb-2">
                          <strong>Pure first-press argan oil.</strong>
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          3–5 drops. Warm. Press. Glide. Pause.
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Comforts and supports the skin barrier.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          QR for the method. ES/PT | EN
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-12 text-center">
              Partnership Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">For Your Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Premium positioning with luxury clientele</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Additional revenue through retail opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Enhanced treatment protocols and guest experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Marketing support and co-branding opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Listing as certified partner on Kapunka website</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">For Your Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Comprehensive training in The Kapunka Method</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Certification program with annual refreshers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Detailed protocol cards and quick-guides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Ongoing support and education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-rich mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">Access to exclusive partner events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20 bg-taupe-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-12 text-center">
              Certification Process
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif text-white">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">Initial Consultation</h3>
                  <p className="text-muted-foreground">
                    We'll discuss your specific needs, whether you're a clinic, spa, or hotel, and determine the best partnership approach for your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif text-white">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">Staff Training</h3>
                  <p className="text-muted-foreground">
                    Your team will receive comprehensive training on The Kapunka Method, product knowledge, and hygiene protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif text-white">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">Practical Assessment</h3>
                  <p className="text-muted-foreground">
                    Team members demonstrate their understanding and technique through practical evaluation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif text-white">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">Certification & Launch</h3>
                  <p className="text-muted-foreground">
                    Upon successful completion, your location becomes a certified Kapunka partner with access to all program benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-foreground mb-6">
              Ready to Join Our Network?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become part of a growing community of professionals who share our commitment to pure care and quiet strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold-rich hover:bg-gold-light text-white">
                Apply for Partnership
              </Button>
              <Button variant="outline" size="lg" className="border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}