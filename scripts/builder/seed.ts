import { builder } from '@builder.io/sdk'

const apiKey = process.env.BUILDER_PRIVATE_API_KEY

if (!apiKey) {
  throw new Error('BUILDER_PRIVATE_API_KEY is not defined')
}

builder.init(apiKey)

const pages = [
  { model: 'method', name: 'Method', url: '/method' },
  { model: 'origin', name: 'Origin', url: '/origin' },
  { model: 'professionals', name: 'Professionals', url: '/professionals' },
  { model: 'shop', name: 'Shop', url: '/shop' }
]

async function ensureModel(name: string) {
  try {
    await builder.create('model', { name, kind: 'page' })
    console.log(`Created model ${name}`)
  } catch (error: any) {
    if (error?.message?.includes('already exists')) {
      console.log(`Model ${name} already exists`)
    } else {
      throw error
    }
  }
}

async function createPage({ model, name, url }: { model: string; name: string; url: string }) {
  await builder.create(model, {
    name,
    published: 'published',
    data: {
      url,
      blocks: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Text',
            options: {
              text: `<h1>${name}</h1><p>Edit this page in Builder.io.</p>`
            }
          }
        }
      ]
    }
  })
  console.log(`Seeded ${name} page`)
}

async function run() {
  for (const page of pages) {
    await ensureModel(page.model)
    await createPage(page)
  }
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
