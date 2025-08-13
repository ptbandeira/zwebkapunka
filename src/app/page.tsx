import { builder } from '@builder.io/react'
import { BuilderComponent } from '@builder.io/react'

// Initialize Builder with your API key
builder.init('4ab809fbb7674862921fca67760fb06d')

export default async function Home() {
  const page = await builder.get('page', {
    url: '/',
  }).toPromise()

  return (
    <main className="min-h-screen bg-white">
      {page ? (
        <BuilderComponent model="page" content={page} />
      ) : (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-light mb-4">Kapunka</h1>
            <p className="text-xl text-gray-600 mb-8">Quiet strength. Pure care.</p>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-light mb-4">Setting Up Visual Editor</h2>
              <p className="text-gray-600 mb-6">
                We're setting up your drag-and-drop visual editor. This will give you the WordPress-like experience you wanted!
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Visual drag-and-drop interface</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Real-time visual editing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Color, font, and spacing controls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Card alignment and layout controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
