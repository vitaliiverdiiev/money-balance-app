import type { Metadata } from "next";
import { Geist_Mono, Karla } from "next/font/google";
import "@/app/styles/globals.css";
import { Header } from "@/widgets";
import { Toaster } from "sonner";

const geistSans = Karla({
  variable: "--font-sans",
  subsets : ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets : ["latin"],
});

export const metadata: Metadata = {
  title      : "Money Balance",
  description: "Track your finance with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} body-gradient antialiased`}
      >
        <Header  />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
