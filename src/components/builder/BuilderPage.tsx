import BuilderContent from "./BuilderContent";

export interface BuilderPageProps {
  model?: string;
  /** Optional pre-fetched content to avoid a client-side request. */
  content?: any;
  /** Path to fetch content for. Defaults to '/'. */
  urlPath?: string;
}

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export async function getBuilderContent(model: string, urlPath: string) {
  if (!apiKey) return null;
  try {
    const res = await fetch(
      `https://cdn.builder.io/api/v2/content/${model}?apiKey=${apiKey}&url=${encodeURIComponent(urlPath)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.results?.[0] ?? null;
  } catch (err) {
    console.warn("Failed to fetch Builder content:", err);
    return null;
  }
}

export default async function BuilderPage({
  model = "page",
  content,
  urlPath = "/",
}: BuilderPageProps) {
  const pageContent = apiKey ? content ?? (await getBuilderContent(model, urlPath)) : null;

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
    );
  }

  return <BuilderContent model={model} content={pageContent} />;
}
