import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const themeInitScript = `
  (function () {
    try {
      var saved = localStorage.getItem("portfolio-theme");
      var theme = saved === "light" || saved === "dark" ? saved : "dark";
      document.documentElement.dataset.theme = theme;
    } catch (e) {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Çağcan Çal — Geological Engineer & Researcher",
  description:
    "Personal portfolio of Çağcan Çal — geological engineering, rock mechanics, natural hazards, GIS, remote sensing and GeoAI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${manrope.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
