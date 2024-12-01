import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/app/data/products";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Gallery() {
  return (
    <>
    <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full fixed top-0 left-0 z-[-1]"
        particleColor="#f8941c"
    />
    <div className="h-full mx-auto pt-20 md:pb-[-200px]">
      {/* Adjusted styles for proper alignment */}
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-10">
        Gallery
      </h1>
      <HeroParallax products={products} />
    </div>
    </>
  );
}
