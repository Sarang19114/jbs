"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({ products }) => {
  const [isReady, setIsReady] = useState(false);
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  
  // Initialize scroll hooks only after idle to avoid blocking main thread
  useEffect(() => {
    const idle = (cb) => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        // @ts-ignore - not in TS lib for older targets
        window.requestIdleCallback(cb, { timeout: 2000 });
      } else {
        setTimeout(cb, 1200);
      }
    };

    idle(() => {
      setIsReady(true);
    });
  }, []);

  // Use a motion value that starts at 0, then connects to scroll after idle
  const lazyScrollProgress = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Connect real scroll progress after idle
  useEffect(() => {
    if (isReady && scrollYProgress) {
      const unsubscribe = scrollYProgress.on('change', (latest) => {
        lazyScrollProgress.set(latest);
      });
      return unsubscribe;
    }
  }, [isReady, scrollYProgress, lazyScrollProgress]);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(lazyScrollProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(lazyScrollProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(lazyScrollProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(lazyScrollProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(lazyScrollProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(lazyScrollProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative"
      >
        {/* First Row */}
        <motion.div className="flex space-x-20 mb-20 overflow-x-auto hide-scrollbar">
          {[...firstRow, ...firstRow].map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="flex space-x-20 mb-20 overflow-x-auto hide-scrollbar">
          {[...secondRow, ...secondRow].map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Third Row (Visible only on mobile devices) */}
        <motion.div className="flex space-x-20 mb-20 overflow-x-auto hide-scrollbar lg:hidden">
          {[...thirdRow, ...thirdRow].map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
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
      <p className="max-w-2xl text-xl lg:text-2xl mt-8 dark:text-neutral-200">
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
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="700"
        width="700"
        className="object-cover relative h-full w-full inset-0"
        alt={"JB's Bar & Lounge"}
        loading="lazy"
        sizes="(max-width: 1024px) 80vw, 480px"
      />
    </motion.div>
  );
};
