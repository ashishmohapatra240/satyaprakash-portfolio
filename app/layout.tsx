import type { Metadata } from "next";
import { productSans } from "./fonts";
import "./globals.css";
import Navbar from "./components/Nav02";
import Footer from "./components/sections/Footer";
import SmoothScroll from "./components/SmoothScroll";
import BackgroundMusic from "./components/BackgroundMusic";
import LoadingProvider from "./components/LoadingProvider";
export const metadata: Metadata = {
  title: "Satyaprakash - Product Designer",
  description: "Building products & design systems. Experienced product designer specializing in fraud detection systems, design systems, and user experience design.",
  keywords: ["Product Designer", "UX Designer", "Design Systems", "Fraud Detection", "User Experience", "UI Design"],
  authors: [{ name: "Satyaprakash Ray" }],
  creator: "Satyaprakash Ray",
  publisher: "Satyaprakash Ray",
  metadataBase: new URL('https://www.satyaprakashray.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Satyaprakash - Product Designer",
    description: "Building products & design systems. Experienced product designer specializing in fraud detection systems, design systems, and user experience design.",
    url: 'https://www.satyaprakashray.com/',
    siteName: 'Satyaprakash Portfolio',
    images: [
      {
        url: '/images/design/OG/OG.png',
        width: 1200,
        height: 630,
        alt: 'Satyaprakash - Product Designer Logo',
      },

    ],

  },
  twitter: {
    card: 'summary_large_image',
    title: "Satyaprakash - Product Designer",
    description: "Building products & design systems. Experienced product designer specializing in fraud detection systems, design systems, and user experience design.",
    images: ['/images/design/OG/Image - logo.png'],
    creator: '@satyaprakashray',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={productSans.className}>
      <head>
        <link
          rel="preload"
          as="audio"
          href="/images/ES_Tat Twam Asi - Valante.mp3"
          type="audio/mpeg"
        />
      </head>
      <body className={`antialiased ${productSans.variable} font-sans`}>
        <SmoothScroll>
          <LoadingProvider>
            <Navbar />
            {children}
            <Footer />
          </LoadingProvider>
          <BackgroundMusic />
        </SmoothScroll>
      </body>
    </html>
  );
}
