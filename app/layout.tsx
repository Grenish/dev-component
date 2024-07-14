import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";


const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Components",
  description: "A collection of components for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={mont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
