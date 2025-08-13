export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main page title (e.g., "Kapunka")'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Page subtitle (e.g., "Quiet strength. Pure care.")'
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string'
        },
        {
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string'
        }
      ]
    },
    {
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }]
    }
  ]
}