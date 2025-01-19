import React from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
