import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const url = "https://replicante.eu"
const title = "Replicante | AI Assistants for Luxury Real Estate"
const description =
  "AI-powered virtual assistants that help luxury real estate firms in Lisbon qualify leads, answer buyer questions in any language, and work 24/7."

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s · Replicante",
  },
  description,
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    type: "website",
    images: [{ url: "/images/banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/banner.png"],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-body pb-[env(safe-area-inset-bottom)]`}>
        {children}
      </body>
    </html>
  );
}
