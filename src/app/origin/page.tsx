import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function OriginPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-taupe-light/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 tracking-wide">
            Origin & Stewardship
          </h1>
          <p className="text-xl md:text-2xl text-gold-rich mb-8 max-w-3xl mx-auto">
            Traceability and respect from source to skin
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in complete transparency about where our products come from, how they're made, and our commitment to responsible practices.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-6">
              Our Promise of Transparency
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Kapunka, transparency isn't just a marketing term—it's fundamental to who we are. We document every step of our journey from the argan groves to your hands, ensuring you can trust the purity and integrity of our products.
            </p>
            <Separator className="max-w-2xl mx-auto bg-gold-light" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-taupe-light bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">🌳</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">Sourced with Respect</h3>
                <p className="text-muted-foreground">
                  We partner directly with argan cooperatives that support local communities and sustainable harvesting practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-taupe-light bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">🔍</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">Fully Traceable</h3>
                <p className="text-muted-foreground">
                  Every batch can be traced back to its origin, with complete documentation available upon request.
                </p>
              </CardContent>
            </Card>

            <Card className="border-taupe-light bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-serif text-charcoal">🤝</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">Responsible Stewardship</h3>
                <p className="text-muted-foreground">
                  We honor the natural resources and communities that make our products possible through ethical practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sourcing Story */}
      <section className="py-20 bg-taupe-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-12 text-center">
              From Grove to Bottle
            </h2>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-serif text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-serif text-foreground">Sustainable Harvesting</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Our argan oil begins in the argan groves where local communities, primarily women's cooperatives, harvest the nuts using traditional methods that have been passed down through generations.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    The harvesting is done by hand, respecting the natural cycles of the trees and ensuring the long-term health of the argan forests. We work only with cooperatives that practice sustainable agriculture and provide fair wages to their members.
                  </p>
                  <div className="bg-taupe-light/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Did you know?</strong> Argan trees are native to Morocco and are protected by UNESCO as a Biosphere Reserve. Our sourcing partners help preserve this unique ecosystem.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl font-serif text-charcoal">🌰</span>
                      </div>
                      <p className="text-muted-foreground">Argan nut harvesting</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl font-serif text-charcoal">🔧</span>
                      </div>
                      <p className="text-muted-foreground">Traditional extraction process</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-serif text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-serif text-foreground">First-Press Extraction</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    The argan nuts are cracked open by hand to reveal the kernels, which are then ground into a paste using traditional stone mills. This paste is carefully pressed to extract the precious oil.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    We use only the first press of the kernels—the purest and most potent expression of argan oil. Subsequent presses are sold for other purposes, ensuring that our customers receive only the highest quality oil.
                  </p>
                  <div className="bg-taupe-light/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Quality control:</strong> Each batch is tested for purity, fatty acid composition, and sensory characteristics before being approved for Kapunka.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-serif text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-serif text-foreground">Small-Batch Filling</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    The pure argan oil is transported to our facility where it is filled into our signature glass bottles in small, controlled batches. This ensures freshness and allows us to maintain meticulous quality control.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Each bottle is filled by hand, inspected for quality, and then labeled with its unique batch and lot numbers. This attention to detail ensures that every product that leaves our facility meets our exacting standards.
                  </p>
                  <div className="bg-taupe-light/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Packaging choice:</strong> We use clear glass bottles to showcase the pure, golden color of our oil while protecting it from light degradation. The matte caps and minimal labels reflect our commitment to quiet simplicity.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl font-serif text-charcoal">📦</span>
                      </div>
                      <p className="text-muted-foreground">Small-batch bottling</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-taupe-light/20 h-80 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl font-serif text-charcoal">📋</span>
                      </div>
                      <p className="text-muted-foreground">Documentation & traceability</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold-rich rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-serif text-white">4</span>
                    </div>
                    <h3 className="text-2xl font-serif text-foreground">Complete Documentation</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Every batch of Kapunka argan oil comes with complete documentation, from the specific cooperative and harvest date to the extraction and filling details. This documentation is stored securely and can be accessed upon request.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    We maintain detailed records for each batch, including quality control test results, and make this information available to our partners and customers who wish to understand the full journey of their product.
                  </p>
                  <div className="bg-taupe-light/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Transparency in action:</strong> Scan the QR code on any Kapunka product to learn about its specific batch and access The Kapunka Method.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch & Lot Transparency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-12 text-center">
              Batch & Lot Transparency
            </h2>

            <div className="bg-taupe-light/10 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Understanding Your Product</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What is a Batch Number?</h4>
                  <p className="text-muted-foreground mb-4">
                    A batch number identifies a group of products produced at the same time under the same conditions. It allows us to trace all products from that specific production run.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Production date</li>
                    <li>• Source cooperative</li>
                    <li>• Harvest season</li>
                    <li>• Extraction method</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What is a Lot Number?</h4>
                  <p className="text-muted-foreground mb-4">
                    A lot number provides additional specific information about a particular group of products within a batch, often related to filling and packaging.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Filling date</li>
                    <li>• Packaging details</li>
                    <li>• Quality control results</li>
                    <li>• Distribution information</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-taupe-light bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">🔍</span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">Find Your Numbers</h3>
                  <p className="text-muted-foreground mb-4">
                    Batch and lot numbers are clearly visible on the base label of every Kapunka bottle.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Simply turn your bottle upside down to find this important information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-taupe-light bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">📱</span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">QR Code Access</h3>
                  <p className="text-muted-foreground mb-4">
                    Scan the QR code on any product to access detailed information about that specific batch.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Includes origin story, quality reports, and usage guide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-taupe-light bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-serif text-charcoal">📞</span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">Full Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete batch documentation is available upon request for partners and customers.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contact us with your batch number for detailed information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-taupe-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-12 text-center">
              Quality Assurance
            </h2>

            <div className="space-y-8">
              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">Testing & Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">In-House Testing</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Purity analysis</li>
                        <li>• Fatty acid profile</li>
                        <li>• Sensory evaluation</li>
                        <li>• Stability testing</li>
                        <li>• Microbiological testing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Third-Party Certification</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• CPSR (Cosmetic Product Safety Report)</li>
                        <li>• PIF (Product Information File)</li>
                        <li>• CPNP (Cosmetic Products Notification Portal)</li>
                        <li>• Organic certification (where applicable)</li>
                        <li>• Fair trade verification</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-taupe-light bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">Compliance & Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    We maintain full compliance with international cosmetics regulations while staying true to our commitment to pure, simple formulations. Our safety documentation is always current and available for review.
                  </p>
                  <div className="bg-taupe-light/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Our Compliance Commitment:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Cosmetics language only (no medical claims)</li>
                      <li>• Full ingredient disclosure (INCI)</li>
                      <li>• Safety assessments for all products</li>
                      <li>• Regular regulatory updates</li>
                      <li>• Clear usage instructions and warnings</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-12 text-center">
              Environmental Stewardship
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-6">Packaging Choices</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We choose our packaging materials carefully to balance product protection, user experience, and environmental impact.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-gold-rich mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Glass Bottles</strong>
                      <p className="text-muted-foreground text-sm">Infinitely recyclable and preserves product purity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-rich mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Minimal Labels</strong>
                      <p className="text-muted-foreground text-sm">Reduced material use while maintaining essential information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-rich mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Recycled Materials</strong>
                      <p className="text-muted-foreground text-sm">Shipping boxes and promotional materials use recycled content</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-6">Responsible Sourcing</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our partnerships with argan cooperatives support both environmental conservation and community development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-gold-rich mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Forest Preservation</strong>
                      <p className="text-muted-foreground text-sm">Supporting UNESCO Biosphere Reserve protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-rich mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Women's Empowerment</strong>
                      <p className="text-muted-foreground text-sm">Partnering with women-led cooperatives</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-rich mr-3 mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Fair Trade Practices</strong>
                      <p className="text-muted-foreground text-sm">Ensuring fair compensation for harvesters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-taupe-light bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground">Our Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-serif text-gold-rich mb-2">0%</div>
                    <p className="text-sm text-muted-foreground">Animal testing</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-gold-rich mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Recyclable packaging</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-gold-rich mb-2">∞</div>
                    <p className="text-sm text-muted-foreground">Refill options available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-taupe-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-foreground mb-6">
              Learn More About Your Product
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about our sourcing, quality control, or environmental practices? We're here to provide complete transparency about our products and processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold-rich hover:bg-gold-light text-white">
                Request Documentation
              </Button>
              <Button variant="outline" size="lg" className="border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}