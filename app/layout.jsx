import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  metadataBase: new URL('https://www.jbsbar.com'),
  title: {
    default: "JB's Lounge - Pouring Perfection",
    template: "%s | JB's Lounge & Bar",
  },
  description:
    "Experience unforgettable nights at JB's Lounge & Bar in Agra. Crafted cocktails, delicious food, and live events in a luxurious setting.",
  keywords: [
    'JB\'s Lounge',
    'bar in Agra',
    'cocktails',
    'lounge',
    'brewery',
    'restaurant',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.jbsbar.com',
    title: "JB's Lounge - Pouring Perfection",
    description:
      "Experience unforgettable nights at JB's Lounge & Bar in Agra.",
    siteName: "JB's Lounge & Bar",
    images: [{ url: '/assets/logo.png', width: 800, height: 418, alt: "JB's Lounge & Bar" }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JB's Lounge - Pouring Perfection",
    description:
      "Experience unforgettable nights at JB's Lounge & Bar in Agra.",
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export const revalidate = 3600

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17633900723"></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} 
  gtag('js', new Date());
  gtag('config', 'AW-17633900723');
          `}
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BarOrPub',
              name: "JB's Lounge & Bar",
              url: 'https://www.jbsbar.com',
              image: 'https://www.jbsbar.com/assets/logo.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  'Tourist Complex Area, Near Man Singh Palace, Vibhav Nagar, Tajganj',
                addressLocality: 'Agra',
                addressRegion: 'UP',
                postalCode: '282001',
                addressCountry: 'IN',
              },
              telephone: '+917217070370',
              openingHours: 'Mo-Su 12:30-02:00',
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

