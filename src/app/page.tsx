import { getHomepage } from '@/lib/sanity/queries'

export default async function Home() {
  const homepage = await getHomepage()
  
  if (!homepage) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Welcome to Kapunka</h1>
          <p className="text-gray-600">Content is being loaded...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-light mb-4">{homepage.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{homepage.subtitle}</p>
        
        {homepage.heroSection && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light mb-4">{homepage.heroSection.headline}</h2>
            <p className="text-lg mb-8">{homepage.heroSection.description}</p>
            <a 
              href={homepage.heroSection.ctaLink}
              className="inline-block bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              {homepage.heroSection.ctaText}
            </a>
          </div>
        )}
      </section>

      {/* Featured Products */}
      {homepage.featuredProducts && homepage.featuredProducts.length > 0 && (
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {homepage.featuredProducts.map((product) => (
                <div key={product.slug.current} className="text-center group">
                  <div className="mb-4 overflow-hidden">
                    {product.images && product.images[0] && (
                      <img 
                        src={product.images[0].asset.url}
                        alt={product.images[0].alt || product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-light mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price}</p>
                  <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  <a 
                    href={`/shop/${product.slug.current}`}
                    className="inline-block border border-black px-6 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
                  >
                    View Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
