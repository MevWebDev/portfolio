import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import { fira_sans } from "./fonts";

// Configure Fira Sans for body text

export const metadata: Metadata = {
  title: "Szymon Grysiewicz - Fullstack Developer",
  description:
    "Portfolio of Szymon Grysiewicz, a passionate full-stack developer from Poland. Check out my projects and get in touch!",
  keywords: [
    "fullstack developer",
    "react",
    "typescript",
    "next.js",
    "portfolio",
  ],
  authors: [{ name: "Szymon Grysiewicz" }],
  openGraph: {
    title: "Szymon Grysiewicz - Fullstack Developer",
    description:
      "Portfolio of Szymon Grysiewicz, a passionate full-stack developer from Poland.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font variables to the body */}
      <body className={` ${fira_sans.className} bg-black text-white `}>
        <Navbar />
        {children}
        <div className="noise"></div>
      </body>
    </html>
  );
}
