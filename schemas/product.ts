export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Skin Care', value: 'skin-care' },
          { title: 'Hair Care', value: 'hair-care' },
          { title: 'Body Care', value: 'body-care' },
          { title: 'Fragrance', value: 'fragrance' }
        ]
      }
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show on homepage'
    }
  ]
}
