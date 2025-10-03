import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import DataProvider from "@/contexts/DataProvider";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pratham Darji - Software Developer",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
