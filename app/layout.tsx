import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "./globals.css";

const description =
  "Software engineer across backend, AI/ML and data. I build the APIs, pipelines and model services behind products, and often run the team that ships them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivan-permana.vercel.app"),
  title: "Rivan Permana · Software Engineer",
  description,
  openGraph: {
    title: "Rivan Permana · I build the part you don't see.",
    description,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Rivan Permana · Software Engineer", description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
  ],
};

// Dark is the default; a saved choice wins. Runs before paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('rp-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark';}catch(e){document.documentElement.dataset.theme='dark';}var m=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!m){document.documentElement.classList.add('motion');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
