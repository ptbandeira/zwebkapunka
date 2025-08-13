import { BuilderComponent, builder } from '@builder.io/react'
import builderConfig from '@builder.io/react/config'

// Initialize Builder
builder.init('YOUR_API_KEY')

export default function BuilderPage({ page }: any) {
  return (
    <BuilderComponent
      model="page"
      content={page}
      options={{ includeRefs: true }}
    />
  )
}
