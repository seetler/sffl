import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Fault Lines - Official Sitcom Website",
  description:
    "A hilarious new comedy about the chaos, friendships, and unexpected moments that happen when the ground beneath you keeps shifting.",
  keywords: "Fault Lines, sitcom, comedy, San Francisco, TV show, romcom",
  authors: [{ name: "Evolve Digitally LLC" }],
  creator: "Evolve Digitally LLC",
  publisher: "Evolve Digitally LLC",

  // Open Graph metadata for social media
  openGraph: {
    title: "Fault Lines - Official Sitcom Website",
    description:
      "A hilarious new comedy about the chaos, friendships, and unexpected moments that happen when the ground beneath you keeps shifting.",
    url: "https://sffaultlines.com",
    siteName: "Fault Lines",
    images: [
      {
        url: "/images/logo.png",
        alt: "Fault Lines Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Fault Lines - Official Sitcom Website",
    description:
      "A hilarious new comedy about the chaos, friendships, and unexpected moments that happen when the ground beneath you keeps shifting.",
    images: ["/images/logo.png"],
    creator: "@sffaultlines",
  },

  // Favicon and icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }
    ],
    // apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // "max-video-preview": -1,
      // "max-image-preview": "large",
      // "max-snippet": -1,
    },
  },

  // Verification for search engines
  // verification: {
  //   google: "your-google-verification-code",
  //   // yandex: 'your-yandex-verification-code',
  //   // yahoo: 'your-yahoo-verification-code',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

