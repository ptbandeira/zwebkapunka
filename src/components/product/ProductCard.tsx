import Image from 'next/image'
import Link from 'next/link'
import { Heart, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '@/hooks/use-cart'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const { addItem, addToWishlist, removeFromWishlist, wishlist } = useCart()
  const [added, setAdded] = useState(false)
  const inWishlist = wishlist.some((item) => item.id === product.id)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Card className={`border-taupe-light bg-white hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="relative group">
          {product.image && (
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={192}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <button className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full" aria-label="Toggle wishlist">
            <Heart className="w-5 h-5" />
          </button>
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <Badge variant="secondary" className="bg-gold-rich text-white">
                New
              </Badge>
            )}
            {product.isBestseller && (
              <Badge variant="secondary" className="bg-sage-taupe text-white">
                Bestseller
              </Badge>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl font-serif text-foreground">{product.name}</CardTitle>
          <p className="text-lg text-gold-rich font-medium">{product.price}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3">Features:</h4>
          <ul className="space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <span className="text-gold-rich mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-2">
          <Button onClick={handleAdd} className="w-full bg-gold-rich hover:bg-gold-light text-white" size="lg">
            {added ? <Check className="w-5 h-5" /> : 'ADD TO CART'}
          </Button>
          <Button
            variant="outline"
            className="w-full border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white"
            onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product))}
          >
            {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </Button>
          <Button
            variant="outline"
            className="w-full border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white"
            asChild
          >
            <Link href={product.ctaLink || `/shop/${product.id}`}>{product.ctaText || 'View Details'}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
