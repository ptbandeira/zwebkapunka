import { client } from './client'

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
