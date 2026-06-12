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

const OG_IMAGE = {
  url: "/img/images.jpg", // TODO: 1200×630 og-image.jpg bilan almashtiring
  width: 1200,
  height: 630,
  alt: "Eco Nur — Toshkentda gilam yuvish xizmati",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Gilam yuvish Toshkent — Eco Nur | 12 000 so'mdan, bepul yetkazish",
    template: "%s | Eco Nur",
  },
  description:
    "Toshkentda professional gilam yuvish — Eco Nur. Gilam, mebel va korpacha tozalash 12 000 so'mdan. Bepul olib ketish va yetkazish, 7+ yillik tajriba, 24/7. ☎ +998 95 197 35 35.",
  keywords: [
    "gilam yuvish",
    "gilam yuvish toshkent",
    "gilam tozalash",
    "gilam yuvish narxi",
    "mebel tozalash",
    "korpacha yuvish",
    "klining toshkent",
    "ximchistka toshkent",
    "eco nur",
    "econur",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Cleaning Service",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Gilam yuvish Toshkent — Eco Nur | 12 000 so'mdan",
    description:
      "Professional gilam, mebel va korpacha tozalash Toshkentda. Bepul olib ketish va yetkazish, 24/7 xizmat.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilam yuvish Toshkent — Eco Nur",
    description:
      "Professional gilam yuvish 12 000 so'mdan. Bepul yetkazish, 24/7. ☎ +998 95 197 35 35.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  // Search Console DNS (domen darajasida) orqali tasdiqlangan — HTML meta-teg shart emas
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
