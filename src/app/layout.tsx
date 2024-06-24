import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import NexAuthSessionProvider from "@/providers/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PocketCalendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="body-home {inter.className}">
      <NexAuthSessionProvider>
        <Navbar></Navbar>
        {children}
      </NexAuthSessionProvider>
      </body>
    </html>
  );
}
