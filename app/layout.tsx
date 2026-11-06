import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Aryakumar Mishra | AI/ML Engineer & Full-Stack Developer",
    template: "%s | Aryakumar Mishra",
  },
  description:
    "Portfolio of Aryakumar Mishra, an AI/ML engineer and full-stack developer building practical machine learning systems, intelligent applications, and secure AI products.",
  metadataBase: new URL("https://aryakumar.dev"),
  openGraph: {
    title: "Aryakumar Mishra | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent systems. Engineering useful products. Selected work in adversarial LLM testing, unsupervised computer vision, RAG systems, and applied machine learning.",
    type: "website",
    locale: "en",
    url: "https://aryakumar.dev",
    siteName: "Aryakumar Mishra | Field Notes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryakumar Mishra | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent systems. Engineering useful products.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="light"){document.documentElement.classList.remove("dark")}}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
