import { getAllProducts } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'

export default async function ShopPage() {
  const products = await getAllProducts()

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h1 className="text-5xl font-serif mb-12 text-center">Shop</h1>
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {products.map((product: any) => (
              <div key={product.slug.current} className="space-y-4">
                {product.images && (
                  <img
                    src={urlFor(product.images[0]).width(400).url()}
                    alt={product.images[0].alt || product.name}
                    className="w-full rounded"
                  />
                )}
                <h2 className="text-2xl font-serif">{product.name}</h2>
                <p className="text-muted-foreground">{product.description}</p>
                {product.price !== undefined && (
                  <p className="text-gold-rich">€{product.price}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
