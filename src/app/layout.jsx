import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const metadata = {
  metadataBase: new URL("https://carehub-coral.vercel.app"), // update when live

  title: {
    default: "CareHub | Smart Healthcare Services",
    template: "%s | CareHub",
  },

  description:
    "CareHub is a modern healthcare platform delivering reliable medical services, patient-focused care, and seamless digital healthcare solutions.",

  applicationName: "CareHub",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "healthcare",
    "medical services",
    "digital healthcare",
    "online health platform",
    "CareHub",
  ],

  authors: [{ name: "CareHub Team" }],
  creator: "CareHub",
  publisher: "CareHub",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carehub-coral.vercel.app",
    siteName: "CareHub",
    title: "CareHub | Smart Healthcare Services",
    description:
      "A trusted digital healthcare platform offering modern medical services and patient care.",
    images: [
      {
        url: "https://i.ibb.co.com/qMC1Ns6w/Screenshot-2026-01-17-082200.png",
        width: 1200,
        height: 630,
        alt: "CareHub Homepage Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CareHub | Smart Healthcare Services",
    description:
      "CareHub provides modern healthcare services with a focus on quality, trust, and accessibility.",
    images: ["https://i.ibb.co.com/qMC1Ns6w/Screenshot-2026-01-17-082200.png"],
    creator: "@carehub",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://carehub-coral.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
