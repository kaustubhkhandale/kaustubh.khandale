import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { siteMetadata } from './site-metadata';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,400&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-[#090a0f] text-[#f9fafb] selection:bg-[#00f2fe] selection:text-[#090a0f] min-h-screen">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2ESS4YLRJW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2ESS4YLRJW');
          `}
        </Script>
      </body>
    </html>
  );
}
