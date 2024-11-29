import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="JB's Lounge ambiance"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">JB&apos;s Lounge</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Where Great Nights Begin</p>
          <div className="space-x-4">
            <Link
              href="/menu"
              className="bg-primary text-black px-6 py-3 rounded-md font-semibold hover:bg-primary/80 transition duration-300"
            >
              View Menu
            </Link>
            <Link
              href="/reservation"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <main className="py-20 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Welcome to JB Lounge</h2>
            <p className="text-lg mb-8">
              Experience the perfect blend of sophistication and comfort at JB Lounge. Our expert mixologists craft
              exquisite cocktails while our chefs prepare delectable bites. Whether you&apos;re looking for a romantic
              evening or a night out with friends, JB Lounge is your destination for unforgettable moments.
            </p>
            <Link href="/contact" className="text-primary hover:text-primary/80 font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Featured at JB Lounge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Signature Cocktails */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/cocktail.jpg"
                alt="Signature cocktails at JB Lounge"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Signature Cocktails</h3>
                <p className="text-gray-300 mb-4">
                  Indulge in our expertly crafted signature cocktails, each with a unique twist.
                </p>
                <Link href="/menu" className="text-primary hover:text-primary/80 font-semibold">
                  View Menu
                </Link>
              </div>
            </div>

            {/* VIP Experience */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/vip.jpg"
                alt="Exclusive VIP experience"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">VIP Experience</h3>
                <p className="text-gray-300 mb-4">
                  Elevate your night with our exclusive VIP packages and premium service.
                </p>
                <Link href="/reservation" className="text-primary hover:text-primary/80 font-semibold">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
