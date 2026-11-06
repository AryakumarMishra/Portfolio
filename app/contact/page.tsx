import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aryakumar Mishra — email, GitHub, LinkedIn, X, and résumé.",
};

export default function ContactPage() {
  return (
    <main id="top">
      <ContactSection />
    </main>
  );
}
