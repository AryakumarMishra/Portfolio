import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aryakumar Mishra — AI Systems Engineer",
    template: "%s — Aryakumar Mishra",
  },
  description:
    "AI Systems Engineer building ML pipelines, LLM applications, AI security tooling, and the backends that ship them to real users.",
  keywords: [
    "AI engineer",
    "machine learning engineer",
    "LLM applications",
    "AI security",
    "MLOps",
    "RAG",
    "PyTorch",
    "Aryakumar Mishra",
  ],
  authors: [{ name: "Aryakumar Mishra" }],
  openGraph: {
    title: "Aryakumar Mishra — AI Systems Engineer",
    description:
      "AI systems that make it out of the notebook and into production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryakumar Mishra — AI Systems Engineer",
    description:
      "AI systems that make it out of the notebook and into production.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
