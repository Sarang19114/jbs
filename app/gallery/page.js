"use client";
import React, { useEffect, useState } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/app/data/products";

export default function Gallery() {
  return (
    <div className="h-full mx-auto pt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-[-100px]">Gallery</h1>
      <HeroParallax products={products} />
    </div>
  );
}
