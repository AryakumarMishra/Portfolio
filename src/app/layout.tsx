import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const generalSans = localFont({
  src: [
    { path: "../fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/general-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/general-sans-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/general-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aryakumar Mishra — LLM Systems & Adversarial AI",
    template: "%s — Aryakumar Mishra",
  },
  description:
    "AI/ML engineer working on LLM systems, RAG pipelines, agentic AI, and AI security — building them, then stress-testing them before they ship.",
  keywords: [
    "Aryakumar Mishra",
    "AI engineer",
    "LLM systems",
    "adversarial AI",
    "AI security",
    "RAG",
    "agentic AI",
    "red teaming",
    "Mumbai",
  ],
  authors: [{ name: "Aryakumar Mishra" }],
  openGraph: {
    title: "Aryakumar Mishra — LLM Systems & Adversarial AI",
    description:
      "I build the systems. I also break them — on purpose.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryakumar Mishra — LLM Systems & Adversarial AI",
    description: "I build the systems. I also break them — on purpose.",
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
      className={`${generalSans.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-obsidian font-sans text-bone-white antialiased">
        <SmoothScroll>
          <ToastProvider>{children}</ToastProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
