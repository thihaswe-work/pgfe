import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import "./globals.css";
import ClientLayout from "@/components/provider/clientLayout";

const archivo = Archivo({
  weight: ["200", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PassionGeek",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/d6f07bc8a3.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body className={` ${archivo.className} antialiased `}>
        <ClientLayout> {children}</ClientLayout>
      </body>
    </html>
  );
}
// border-b border-gray-600  bg-[rgba(17,25,40,0.75)]  border-[rgba(255,255,255,0.125)] backdrop-blur-[16px] backdrop-saturate-[180%]

// original padding
// px-[13px] lg:px-[50px]
