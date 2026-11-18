import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Vinayak Unde | Software Engineer", template: "%s | Vinayak Unde" },
  description:
    "Vinayak Unde, software engineer building scalable backend systems, distributed systems and cloud infrastructure. MS Computer Science at USC, open to software engineer roles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <AuroraBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
