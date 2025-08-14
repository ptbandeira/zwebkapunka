import BuilderPage, { getBuilderContent } from '@/components/builder/BuilderPage'

export default async function Home() {
  // Prefetch Builder content on the server and pass it as a prop so that
  // the Builder component can render without an additional client request.
  const content = await getBuilderContent('page', '/')

  return (
    <main className="min-h-screen bg-white">
      <BuilderPage model="page" content={content} urlPath="/" />
    </main>
  )
}
