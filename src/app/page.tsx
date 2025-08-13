import { builder } from '@builder.io/react'
import BuilderPage from '@/components/builder/BuilderPage'

builder.init('YOUR_API_KEY')

export default async function Home() {
  const page = await builder.get('page', {
    url: '/',
  }).toPromise()

  return (
    <main>
      {page ? (
        <BuilderPage page={page} />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light mb-4">Kapunka</h1>
            <p className="text-gray-600 mb-8">Quiet strength. Pure care.</p>
            <p className="text-sm text-gray-500">
              Setting up visual editor...
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
