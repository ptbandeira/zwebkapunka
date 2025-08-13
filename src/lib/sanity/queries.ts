import { client } from './client'

// Homepage queries
export async function getHomepage() {
  return client.fetch(`
    *[_type == "homepage"][0] {
      title,
      subtitle,
      heroSection {
        headline,
        description,
        ctaText,
        ctaLink
      },
      featuredProducts[]->{
        name,
        slug,
        price,
        description,
        images,
        category
      }
    }
  `)
}

// Product queries
export async function getAllProducts() {
  return client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      name,
      slug,
      price,
      description,
      category,
      images,
      featured
    }
  `)
}

export async function getProductBySlug(slug: string) {
  return client.fetch(`
    *[_type == "product" && slug.current == $slug][0] {
      name,
      slug,
      price,
      description,
      category,
      images,
      featured
    }
  `, { slug })
}
