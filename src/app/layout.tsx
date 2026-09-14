import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/data/site";
import { allSkills } from "@/data/skills";
import { cn } from "@/lib/utils";

// The -src suffix keeps these disjoint from Tailwind's --font-* theme keys.
// Reusing the same name creates a circular var() that silently resolves to
// `unset` and the font disappears with no error.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-src",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    locale: "en_IN",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.role,
      email: `mailto:${site.email}`,
      url: site.url,
      worksFor: { "@type": "Organization", name: site.company },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "SRM Institute of Science and Technology",
      },
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
      knowsAbout: allSkills,
      sameAs: [site.socials.github, site.socials.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — Portfolio`,
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(display.variable, body.variable, mono.variable)}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <a
              href="#content"
              className="sr-only rounded-md bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
            >
              Skip to content
            </a>
            {children}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
