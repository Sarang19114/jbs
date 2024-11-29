import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: "JB's Lounge - Where Great Nights Begin",
  description: "Experience unforgettable nights at JB's Lounge. Enjoy crafted cocktails, delicious food, and a luxurious setting.",
}

export default function RootLayout({ children }) {
  return (
    <div className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white`}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

