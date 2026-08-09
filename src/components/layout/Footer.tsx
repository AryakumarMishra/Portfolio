import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-brass/25 bg-obsidian">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-[12px] text-bone-white-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="text-[12px] text-bone-white-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Built by hand. No templates.
        </p>
      </div>
    </footer>
  );
}
