import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Microsoft's Top-10 Acquisitions",
  description: "A visual insight into MSFT's big move",
  openGraph: {
    images: 'https://raw.githubusercontent.com/HaruoWang/Microsoft-acquisition/refs/heads/main/src/app/public/og.webp',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
