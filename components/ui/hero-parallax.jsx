"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // First row moves left (to the right side)
  const translateXFirst = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  // Second row moves right (to the left side)
  const translateXSecond = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  // Third row moves left (to the right side)
  const translateXThird = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative h-[300vh] py-40 pb-1 overflow-hidden antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative w-full flex flex-col items-center justify-center"
      >
        {/* First Row - Moves left */}
        <motion.div className="flex space-x-20 mb-20 overflow-x-auto hide-scrollbar justify-start">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXFirst}
              key={product.thumbnail}
            />
          ))}
        </motion.div>

        {/* Second Row - Moves right */}
        <motion.div className="flex space-x-20 mb-20 overflow-x-auto hide-scrollbar justify-start">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXSecond}
              key={product.thumbnail}
            />
          ))}
        </motion.div>

        {/* Third Row - Moves left */}
        <motion.div className="flex space-x-20 mb-20 overflow-x-auto hide-scrollbar justify-start lg:hidden">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXThird}
              key={product.thumbnail}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        JB's Through the Lens
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Experience the magic of JB's Bar & Lounge through our gallery. A place
        where memories are made, laughter is shared, and good times are eternal.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="700"
        width="700"
        className="object-cover relative h-full w-full inset-0"
        alt={"JB's Bar & Lounge"}
      />
    </motion.div>
  );
};