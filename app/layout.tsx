import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "StillInvictus | People & Culture Practice Lagos",
  description:
    "Independent People & Culture practice offering organisational design, HR systems, and leadership coaching for growing African organisations.",
  keywords: [
    "StillInvictus",
    "People and Culture",
    "Organisational Design",
    "HR Systems",
    "Leadership Coaching",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "StillInvictus" }],
  creator: "StillInvictus",
  openGraph: {
    title: "StillInvictus | People & Culture Practice Lagos",
    description:
      "Independent People & Culture practice offering organisational design, HR systems, and leadership coaching for growing African organisations.",
    url: "https://stillinvictus.com", // You can update this to the actual domain later
    siteName: "StillInvictus",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StillInvictus | People & Culture Practice Lagos",
    description:
      "Independent People & Culture practice offering organisational design, HR systems, and leadership coaching for growing African organisations.",
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
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
