import type { Metadata } from "next";
import { productSans } from "./fonts";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/sections/Footer';
export const metadata: Metadata = {
  title: "Satyaprakash - Product Designer",
  description: "Building products & design systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${productSans.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
