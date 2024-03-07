import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: 'Shounak Rangwala',
    template: '%s | Shounak Rangwala'
  },
  description: "Full-Stack Developer Transforming Ideas into Digital Reality",
  metadataBase: new URL("http://localhost:3000"),
  openGraph:{
    title: 'Shounak Rangwala',
    description: 'Full-Stack Developer Transforming Ideas into Digital Reality',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Navbar />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
