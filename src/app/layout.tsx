import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/hooks/use-cart";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <CartProvider>
          <div className="min-h-screen flex flex-col" suppressHydrationWarning>
            <Navigation />
            <main className="flex-1" suppressHydrationWarning>
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
