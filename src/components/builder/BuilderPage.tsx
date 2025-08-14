import { BuilderComponent, builder } from '@builder.io/react'
import { cache } from 'react'

// Initialize Builder with environment variable if available
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY

if (apiKey) {
  builder.init(apiKey)
} else {
  console.warn(
    'NEXT_PUBLIC_BUILDER_API_KEY is not defined. Builder content will not be loaded.'
  )
}

export interface BuilderPageProps {
  model?: string
  /**
   * Optional pre-fetched content. When provided, the component will render
   * this content directly and avoid an additional network request.
   */
  content?: any
  /**
   * Path to fetch content for. Defaults to '/'.
   */
  urlPath?: string
}

// Cache Builder content fetches to preserve performance across re-renders
export const getBuilderContent = cache(
  async (model: string, urlPath: string) => {
    return await builder.get(model, { url: urlPath }).toPromise()
  }
)

export default async function BuilderPage({
  model = 'page',
  content,
  urlPath = '/',
}: BuilderPageProps) {
  const pageContent =
    apiKey != null ? content ?? (await getBuilderContent(model, urlPath)) : null

  if (!pageContent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-light mb-4">Kapunka</h1>
          <p className="text-xl text-gray-600 mb-8">Quiet strength. Pure care.</p>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-light mb-4">Welcome to Your Visual Editor</h2>
            <p className="text-gray-600 mb-6">
              This page is ready for visual editing. Create content in Builder.io to see it appear here.
            </p>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <span>Visual drag-and-drop interface ready</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <span>Real-time editing enabled</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <span>Git integration connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <BuilderComponent model={model} content={pageContent} />
}
