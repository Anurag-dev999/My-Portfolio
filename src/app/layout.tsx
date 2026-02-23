import type { Metadata } from "next";
import "@/index.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Alex Morgan | Portfolio",
  description: "Developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Three.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
