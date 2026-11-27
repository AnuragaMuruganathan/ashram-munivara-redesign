import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://ashrammunivara.org"),
  title: "Ashram Munivara | Jnana Buda Siwa Ashram in Ubud, Bali",
  description: "A sacred space for puja, yoga, spiritual learning and conscious stays in Junjungan, Ubud. All are welcome at Ashram Munivara.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ashram Munivara | Ubud, Bali",
    description: "Puja, yoga, spiritual learning and conscious stays. All are welcome.",
    url: "/",
    siteName: "Ashram Munivara",
    type: "website",
    images: [{ url: "/images/hero-night-square.7e90064f.webp", width: 630, height: 630, alt: "Ashram Munivara temple at night" }],
  },
  twitter: { card: "summary", title: "Ashram Munivara", description: "Jnana Buda Siwa ashram in Ubud, Bali.", images: ["/images/hero-night-square.7e90064f.webp"] },
  icons: { icon: "/images/logo.png", apple: "/images/apple-touch-icon.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={openSans.className}>{children}</body></html>;
}
