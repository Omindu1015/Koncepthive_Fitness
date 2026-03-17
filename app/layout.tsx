import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koncepthive Fitness",
  description: "Stay Motivated, Stay Fit: Your Ultimate Fitness Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
