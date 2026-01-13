// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Roya Kais Portfolio",
  description: "Frontend Developer | Next.js | React | Projects Showcase",
  openGraph: {
    title: "Roya Kais Portfolio",
    description: "Check out my web projects built with Next.js and React.",
    url: "https://royakais-portfolio.vercel.app",
    siteName: "Roya Kais Portfolio",
    images: [
      {
        url: "/og-image.png", // Put your homepage screenshot in public/og-image.png
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roya Kais Portfolio",
    description: "Check out my web projects built with Next.js and React.",
    images: ["/og-image.png"], // Same image works for Twitter
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
