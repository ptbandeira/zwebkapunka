import { Builder } from '@builder.io/react'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/footer/Footer'
import { ProductCard } from '@/components/product/ProductCard'
import Hero from '@/components/hero/Hero'

// Register site-specific components with Builder.io
Builder.registerComponent(Navigation, {
  name: 'Navigation',
})

Builder.registerComponent(Footer, {
  name: 'Footer',
})

Builder.registerComponent(ProductCard, {
  name: 'ProductCard',
  inputs: [
    {
      name: 'product',
      type: 'object',
      subFields: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'size', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'details', type: 'string' },
        { name: 'price', type: 'string' },
        {
          name: 'features',
          type: 'list',
          subFields: [{ name: 'feature', type: 'string' }],
        },
        { name: 'bestFor', type: 'string' },
        { name: 'image', type: 'string' },
        { name: 'isProfessional', type: 'boolean' },
        { name: 'isHospitality', type: 'boolean' },
        { name: 'isNew', type: 'boolean' },
        { name: 'isBestseller', type: 'boolean' },
      ],
    },
  ],
})

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'image', type: 'string' },
    { name: 'heading', type: 'string' },
    { name: 'subheading', type: 'string' },
  ],
})

