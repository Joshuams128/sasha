import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sasha Scott | eLearning Specialist & Learning Designer",
  description:
    "Portfolio of Sasha Scott, an eLearning specialist and learning experience designer creating scenario-based, immersive digital learning."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
