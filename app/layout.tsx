import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NLPBDS",
  description:
    "NegosyoLabPH Business Development Services helps ambitious companies scale smarter with modern IT solutions, digital strategy, and clean systems.",
  icons: {
    icon: "/img/NLP LEGAL.png",
    shortcut: "/img/NLP LEGAL.png",
    apple: "/img/NLP LEGAL.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        {children}
      </body>
    </html>
  );
}
