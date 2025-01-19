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
      <head>
        <title>Random_Fox</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
