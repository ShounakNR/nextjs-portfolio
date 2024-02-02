import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: {
    default: 'Shounak Rangwala',
    template: '%s | Shounak Rangwala'
  },
  description: "Full-Stack Developer Transforming Ideas into Digital Reality",
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
