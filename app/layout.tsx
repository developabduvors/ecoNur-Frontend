import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gilam yuvish Toshkent — Eco Nur | Professional tozalash",
    template: "%s | Eco Nur",
  },
  description:
    "Eco Nur — Toshkentda gilam yuvish, mebel tozalash va klining xizmatlari. 7+ yillik tajriba, 24/7 xizmat. Gilam yuvish 12 000 so'mdan.",
  keywords: [
    "gilam yuvish",
    "gilam yuvish toshkent",
    "gilam tozalash",
    "mebel tozalash",
    "klining toshkent",
    "eco nur",
  ],
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Gilam yuvish Toshkent — Eco Nur",
    description: "Professional gilam yuvish va tozalash xizmatlari Toshkentda.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
