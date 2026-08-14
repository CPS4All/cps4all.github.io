import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "cps4all.github.io";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "CPS for Accessibility & Ability Augmentation · UIST 2026",
    description: "A UIST 2026 workshop exploring cyber-physical systems that support accessibility and augment human abilities in daily life.",
    icons: { icon: "/figure1.png", shortcut: "/figure1.png" },
    openGraph: {
      title: "Cyber-Physical Systems for Accessibility and Ability Augmentation: Bridging Diverse Communities",
      description: "UIST 2026 Workshop · Detroit · November 2",
      type: "website",
      url: baseUrl,
      images: [{ url: `${baseUrl}/og.png`, width: 1730, height: 909, alt: "UIST 2026 CPS for Accessibility and Ability Augmentation workshop" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cyber-Physical Systems for Accessibility and Ability Augmentation: Bridging Diverse Communities",
      description: "UIST 2026 Workshop · Detroit · November 2",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
