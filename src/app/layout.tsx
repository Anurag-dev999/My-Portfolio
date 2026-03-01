import type { Metadata, Viewport } from "next";
import "@/index.css";
import Providers from "./providers";

export const viewport: Viewport = {
  themeColor: "#030308",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Anurag | Portfolio",
  description:
    "Portfolio of Anurag — DevOps Engineer and Full-Stack Developer focused on reliable, secure, and scalable deployment workflows.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Anurag | Portfolio",
    description:
      "DevOps Engineer and Full-Stack Developer focused on reliable, secure, and scalable deployment workflows.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#030308] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
