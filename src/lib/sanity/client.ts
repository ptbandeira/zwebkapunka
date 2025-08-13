import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hqs5j1qe',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
})

import imageUrlBuilder from '@sanity/image-url'

export const urlFor = (source: any) => {
  return imageUrlBuilder(client).image(source)
}
