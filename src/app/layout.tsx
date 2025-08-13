import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kapunka - Quiet Strength. Pure Care.",
  description: "Calm and comfort for sensitive skin with pure first-press argan oil and a simple, disciplined method. Discover The Kapunka Method: Dose → Warm → Press → Glide → Pause.",
  keywords: ["Kapunka", "argan oil", "sensitive skin", "skin care", "pure argan oil", "first-press argan", "The Kapunka Method", "calm skin", "skin barrier", "natural skin care"],
  authors: [{ name: "Kapunka" }],
  openGraph: {
    title: "Kapunka - Quiet Strength. Pure Care.",
    description: "Calm and comfort for sensitive skin with pure first-press argan oil and The Kapunka Method.",
    url: "https://www.kapunkargan.com",
    siteName: "Kapunka",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapunka - Quiet Strength. Pure Care.",
    description: "Calm and comfort for sensitive skin with pure first-press argan oil and The Kapunka Method.",
  },
  other: {
    "twitter:image": "https://www.kapunkargan.com/og-image.jpg",
    "og:image": "https://www.kapunkargan.com/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
