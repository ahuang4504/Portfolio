import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Note: Vidaloka font will be loaded via CSS @import in globals.css

export const metadata: Metadata = {
  title: "Albert Huang - Portfolio",
  description: "Software Engineer & Problem Solver",
  icons: {
    icon: "/succulent.ico",
    shortcut: "/succulent.ico",
    apple: "/plant.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/succulent.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
