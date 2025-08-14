import { builder } from '@builder.io/react'

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY
if (!apiKey) {
  throw new Error('NEXT_PUBLIC_BUILDER_API_KEY is not defined')
}

builder.init(apiKey)

export default builder
