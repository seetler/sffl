import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sffaultlines.com"),
  title: "Fault Lines - Official Sitcom Website",
  description:
    "A hilarious new comedy about the chaos, friendships, and unexpected moments that happen when the ground beneath you keeps shifting.",
  keywords: "Fault Lines, sitcom, comedy, San Francisco, TV show, romcom",
  authors: [{ name: "Evolve Digitally LLC" }],
  creator: "Evolve Digitally LLC",
  publisher: "Evolve Digitally LLC",

  openGraph: {
    title: "Fault Lines - Official Sitcom Website",
    description:
      "A hilarious new comedy about the chaos, friendships, and unexpected moments that happen when the ground beneath you keeps shifting.",
    url: "https://sffaultlines.com",
    siteName: "Fault Lines",
    images: [
      {
        url: "/images/logo.jpg",
        alt: "Fault Lines Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fault Lines - Official Sitcom Website",
    description:
      "A hilarious new comedy about the chaos, friendships, and unexpected moments that happen when the ground beneath you keeps shifting.",
    images: ["/images/logo.jpg"],
    creator: "@sffaultlines",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
