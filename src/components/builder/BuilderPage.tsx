'use client'

import { useState, useEffect } from 'react'
import { BuilderComponent } from '@builder.io/react'
import { builder } from '@builder.io/react'

// Initialize Builder with environment variable
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'demo-key')

interface BuilderPageProps {
  model?: string
  content?: any
}

export default function BuilderPage({ model = 'page', content }: BuilderPageProps) {
  const [pageContent, setPageContent] = useState(content)
  const [loading, setLoading] = useState(!content)

  useEffect(() => {
    if (content) {
      setPageContent(content)
      setLoading(false)
      return
    }

    const fetchContent = async () => {
      try {
        const result = await builder.get(model, {
          url: window.location.pathname,
        }).toPromise()
        
        setPageContent(result)
      } catch (error) {
        console.error('Error fetching Builder content:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [model, content])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    )
  }

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
