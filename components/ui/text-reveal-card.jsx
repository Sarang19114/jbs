"use client";
import React, { useEffect, useState, memo } from "react";
import { twMerge } from "tailwind-merge";

export const TextReveal = ({ text, className }) => {
  return (
    <div className={twMerge("relative overflow-hidden", className)}>
      <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
        <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#f8941c]">
          {text}
        </p>
        <MemoizedStars />
      </div>
    </div>
  );
};

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random positions and animations only once when the component mounts
    const randomStars = [...Array(80)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 3}s`,
      animationDelay: `${Math.random() * 5}s`, // Add a random delay for each star to create staggered animation
    }));
    setStars(randomStars);
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <span
          key={`star-${i}`}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            animation: `move-star-${i} ${star.animationDuration} linear infinite ${star.animationDelay}`,
          }}
          className="inline-block"
        ></span>
      ))}
      <style jsx>{`
        ${stars
          .map(
            (_, i) => `
          @keyframes move-star-${i} {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
        `
          )
          .join("")}
      `}</style>
    </div>
  );
};

export const MemoizedStars = memo(Stars);
