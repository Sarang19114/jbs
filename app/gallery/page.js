import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Gallery() {
  return (
    <div className="h-full mx-auto pt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-[-100px]">Gallery</h1>
      <HeroParallax products={products} />
    </div>
  )
}

export const products = [
  {
    thumbnail: "/assets/gallery/G1.jpg",
  },
  {
    thumbnail: "/assets/gallery/G2.jpg",
  },
  {
    thumbnail: "/assets/gallery/G3.jpg",
  },
  {
    thumbnail: "/assets/gallery/G4.jpg",
  },
  {
    thumbnail: "/assets/gallery/G5.jpg",
  },
  {
    thumbnail: "/assets/gallery/G6.jpg",
  },
  {
    thumbnail: "/assets/gallery/G7.jpg",
  },
  {
    thumbnail: "/assets/gallery/G8.jpg",
  },
  {
    thumbnail: "/assets/gallery/G9.jpg",
  },
  {
    thumbnail: "/assets/gallery/G10.jpg",
  },
  {
    thumbnail: "/assets/gallery/G11.jpg",
  },
  {
    thumbnail: "/assets/gallery/G12.jpg",
  },
  {
    thumbnail: "/assets/gallery/G13.jpg",
  },
  {
    thumbnail: "/assets/gallery/G14.jpg",
  },
  {
    thumbnail: "/assets/gallery/G15.jpg",
  },
];

