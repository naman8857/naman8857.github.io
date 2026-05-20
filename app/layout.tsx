import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naman Arora - Electrical Engineering Portfolio",
  description: "Electrical Engineering student at Memorial University of Newfoundland building practical systems across hardware, data, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
