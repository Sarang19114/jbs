import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold">JB&apos;s Lounge</h2>
            <p className="text-gray-300">Where Great Nights Begin</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/" className="text-base text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/menu" className="text-base text-gray-300 hover:text-white">Menu</Link></li>
                  <li><Link href="/gallery" className="text-base text-gray-300 hover:text-white">Gallery</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/contact" className="text-base text-gray-300 hover:text-white">Contact Us</Link></li>
                  <li><Link href="/reservation" className="text-base text-gray-300 hover:text-white">Make a Reservation</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} JB&apos;s Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

