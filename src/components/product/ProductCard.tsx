import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Heart, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

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
          <button className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full">
            <Heart className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.salePrice && (
              <Badge variant="secondary" className="bg-red-500 text-white">
                Sale
              </Badge>
            )}
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
            {product.isProfessional && (
              <Badge variant="secondary" className="bg-gold-light text-gold-rich border-gold-rich">
                Professional
              </Badge>
            )}
            {product.isHospitality && (
              <Badge variant="secondary" className="bg-sand-warm text-white border-sand-warm">
                Hospitality
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-serif text-foreground">
            {product.name}
          </CardTitle>
          <p className="text-lg text-gold-rich font-medium">
            {product.salePrice ? (
              <>
                <span className="line-through mr-2">{product.price}</span>
                <span>{product.salePrice}</span>
              </>
            ) : (
              product.price
            )}
          </p>
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
            {product.features.length > 3 && (
              <li className="text-sm text-gold-rich">
                +{product.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-2">Best for:</h4>
          <p className="text-sm text-muted-foreground">{product.bestFor}</p>
        </div>

        <div className="text-center space-y-2">
          <Button
            onClick={handleAdd}
            className="w-full bg-gold-rich hover:bg-gold-light text-white"
            size="lg"
          >
            {added ? <Check className="w-5 h-5" /> : "ADD TO CART"}
          </Button>
          <Button
            variant="outline"
            className="w-full border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-white"
            asChild
          >
            <Link href={`/shop/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className = "" }: ProductGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ProductFeature({ icon, title, description, className = "" }: ProductFeatureProps) {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-serif text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

interface ProductComparisonProps {
  products: Product[];
  className?: string;
}

export function ProductComparison({ products, className = "" }: ProductComparisonProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-taupe-light">
            <th className="text-left py-4 px-4 font-serif text-foreground">Feature</th>
            {products.map((product) => (
              <th key={product.id} className="text-center py-4 px-4 font-serif text-foreground">
                {product.size}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-taupe-light">
            <td className="py-3 px-4 text-muted-foreground">Size</td>
            {products.map((product) => (
              <td key={product.id} className="text-center py-3 px-4 text-foreground">
                {product.size}
              </td>
            ))}
          </tr>
          <tr className="border-b border-taupe-light">
            <td className="py-3 px-4 text-muted-foreground">Best For</td>
            {products.map((product) => (
              <td key={product.id} className="text-center py-3 px-4 text-sm text-muted-foreground">
                {product.bestFor}
              </td>
            ))}
          </tr>
          <tr className="border-b border-taupe-light">
            <td className="py-3 px-4 text-muted-foreground">Price</td>
            {products.map((product) => (
              <td key={product.id} className="text-center py-3 px-4 font-serif text-foreground">
                {product.price}
              </td>
            ))}
          </tr>
          <tr>
            <td className="py-3 px-4 text-muted-foreground">Action</td>
            {products.map((product) => (
              <td key={product.id} className="text-center py-3 px-4">
                <Button 
                  size="sm"
                  className="bg-gold-rich hover:bg-gold-light text-white"
                >
                  {product.price.includes("Contact") ? "Inquire" : "Add to Cart"}
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}