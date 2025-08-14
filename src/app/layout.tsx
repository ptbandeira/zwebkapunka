/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Kapunka | Quiet strength. Pure care.",
  description:
    "Discover Kapunka's signature method of quiet strength and pure care through our carefully crafted formulations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        <div className="min-h-screen flex flex-col" suppressHydrationWarning>
          <Navigation />
          <main className="flex-1" suppressHydrationWarning>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
