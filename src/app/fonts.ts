import { Playfair_Display, Fira_Sans } from "next/font/google";

export const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira-sans", // CSS variable name
});

// Configure Playfair Display for headings
export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair-display", // CSS variable name
});
