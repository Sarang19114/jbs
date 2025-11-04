"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(m => m.SparklesCore), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full absolute top-0 left-0"
          particleColor="#f8941c"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <Image
            src="/assets/logo[1].png"
            alt="JB's Lounge & Bar Logo"
            width={500}
            height={500}
            priority
            fetchPriority="high"
            quality={90}
            sizes="(max-width: 768px) 70vw, 500px"
          />
          {/* Text Reveal Component */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#f8941c] mt-[-30px] text-center">
            Pouring Perfection
          </h1>
          <div className="space-x-4 mt-16">
            <Link
              href="/menu"
              className="bg-[#f8941c] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#f9a83c]/70 transition duration-300"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <main className="py-20 bg-[#f8941c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-white">
              Welcome to JB's Lounge & Bar
            </h2>
            <p className="text-xl mb-8 text-white">
              Namaste and welcome
              to JB’s, your ultimate retreat where luxury meets the vibrant
              spirit of India. From the moment you step in, you’ll feel embraced
              by a blend of timeless elegance and rich cultural heritage,
              creating a space that’s both refined and inviting. At JB’s, our
              cocktails and artisanal brews are crafted to take you on a journey
              through India’s diverse landscapes. Each drink, infused with
              traditional spices and modern twists, offers a taste of bustling
              spice markets, serene royal gardens, and festive bazaars. It’s not
              just about drinking; it’s about experiencing the essence of India
              with every sip.
            </p>
          </div>
        </div>
      </main>

      {/* Featured Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center text-white">
            Featured at JB's Lounge & Bar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Signature Cocktails */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/ckc.jpg"
                alt="Signature cocktails at JB Lounge"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Signature Cocktails
                </h3>
                <p className="text-white mb-4">
                  Indulge in our expertly crafted signature cocktails, each with
                  a unique twist.
                </p>
              </div>
            </div>

            {/* Brewery Experience */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/brw.jpg"
                alt="Exclusive VIP experience"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Brewery
                </h3>
                <p className="text-white mb-4">
                  Enjoy our expertly brewed beers, each crafted to perfection
                  with distinct flavors that stand out.
                </p>
              </div>
            </div>

            {/* Leisure Experience */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/li1.jpg"
                alt="Leisure activities at JB Lounge"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Leisure
                </h3>
                <p className="text-white mb-4">
                  Take a break and hit the billiards table at the bar for some
                  friendly competition and great times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
