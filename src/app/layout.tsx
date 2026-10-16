import type { Metadata } from "next";
import { Nunito, Shrikhand } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/entities";
import { site } from "@/lib/site";
import "./globals.css";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const description =
  "Custom cakes and cupcakes baked at home in Middle River, Maryland by Sharon Abplanalp Davis — maple cupcakes, chocolate Nutella ganache cake, gender reveals, bridal showers, office parties, and just because.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Sharon's Cakes — Too Pretty to Eat. Eat It Anyway. | Custom Cakes in Middle River, MD",
  description,
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: site.name,
    title: "Sharon's Cakes — Too Pretty to Eat. Eat It Anyway.",
    description,
    images: [{ url: site.heroImage, alt: site.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharon's Cakes — Too Pretty to Eat. Eat It Anyway.",
    description,
    images: [site.heroImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${shrikhand.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-choco antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
