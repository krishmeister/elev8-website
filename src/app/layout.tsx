import type { Metadata } from 'next';
import { Orbitron, JetBrains_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELEV8 | The Motion Layer for the Spatial Web",
  description: "The world's first hardware-free, decentralized motion gaming protocol. Turn any camera into a gaming console.",
  keywords: ["Motion Gaming", "AI Vision", "Spatial Web", "Hardware-Free Gaming", "Computer Vision", "Gesture Control"],
  openGraph: {
    title: "ELEV8 | The Motion Layer for the Spatial Web",
    description: "Turn any camera into a gaming console. Hardware-free motion gaming powered by AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEV8 | Hardware-Free Motion Gaming",
    description: "The world's first motion gaming protocol.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
