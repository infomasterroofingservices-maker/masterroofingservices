import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Cta } from "@/components/cta";
import { CtaGate } from "@/components/cta-gate";
import { Footer } from "@/components/footer";
import { getPhoneHref, site } from "@/lib/site";
import "./globals.css";

const bigShoulders = localFont({
  src: "./fonts/big-shoulders-extrabold.woff2",
  variable: "--font-big-shoulders",
  weight: "800",
  display: "swap",
  adjustFontFallback: "Arial",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://masterroofingservices.example"),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
    images: [{ url: "/logo.png", alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bigShoulders.variable} ${dmSans.variable} ${libreBaskerville.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-gold focus:px-4 focus:py-2 focus:text-dark"
        >
          Skip to content
        </a>
        <Navbar phone={site.phone} phoneHref={getPhoneHref(site.phone)} />
        {children}
        <CtaGate>
          <Cta />
        </CtaGate>
        <Footer />
      </body>
    </html>
  );
}
