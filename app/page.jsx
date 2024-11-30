'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextReveal } from "@/components/ui/text-reveal-card"; // Updated import for TextReveal

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <Image src="/assets/logo[1].png" alt="Logo" width={500} height={500} />
          {/* Text Reveal Component */}
          <TextReveal
            text="Pouring Perfection"
            className="w-full px-8 text-center mt-[-50px]"
          />
          <div className="space-x-4 mt-6">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Welcome to JB's Lounge & Bar
            </h2>
            <p className="text-lg mb-8 text-white">
              Experience the perfect blend of sophistication and comfort at JB
              Lounge. Our expert mixologists craft exquisite cocktails while our
              chefs prepare delectable bites. Whether you&apos;re looking for a
              romantic evening or a night out with friends, JB Lounge is your
              destination for unforgettable moments.
            </p>
          </div>
        </div>
      </main>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Featured at JB's Lounge & Bar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Signature Cocktails */}
            <div className="bg-primary rounded-lg overflow-hidden">
              <Image
                src="/assets/ckc.jpg"
                alt="Signature cocktails at JB Lounge"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
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

            {/* VIP Experience */}
            <div className="bg-primary rounded-lg overflow-hidden">
              <Image
                src="/assets/brw.jpg"
                alt="Exclusive VIP experience"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Brewery
                </h3>
                <p className="text-white mb-4">
                Enjoy our expertly brewed beers, each crafted to perfection with distinct flavors that stand out.
                </p>
              </div>
            </div>

            <div className="bg-primary rounded-lg overflow-hidden">
              <Image
                src="/assets/li1.jpg"
                alt="Signature cocktails at JB Lounge"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Leisure
                </h3>
                <p className="text-white mb-4">
                Take a break and hit the billiards table at the bar for some friendly competition and great times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
