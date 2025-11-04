"use client";
import React from "react";
import Image from "next/image"; // Importing Image component for the logo
import dynamic from "next/dynamic";
const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(m => m.SparklesCore), { ssr: false });

const menuData = [
  {
    category: "Drinks",
    name: "RATNAGIRI SOUR",
    description:
      "Crispy / Fruity",
    imageUrl: "/assets/RS.png",
  },
  {
    category: "Drinks",
    name: "HIMACHALI PICANTE",
    description:
      "Spicy / Fruity ",
    imageUrl: "/assets/HP.png",
  },
  {
    category: "Drinks",
    name: "BANARASI DAIQUIRI",
    description:
      "Paan / Sweet",
    imageUrl: "/assets/BD.png",
  },
  {
    category: "Drinks",
    name: "NORTH AND EAST PUNCH",
    description:
      "Citrusy / Earthly",
    imageUrl: "/assets/NEP.png",
  },
  {
    category: "Drinks",
    name: "MALABAR PALOMA",
    description:
      "Zesty / Herbal",
    imageUrl: "/assets/MP.png",
  },
  {
    category: "Drinks",
    name: "NAWABI MULE",
    description:
      "Crispy / Fruity",
    imageUrl: "/assets/NM.png",
  },
  {
    category: "Drinks",
    name: "GOAN SOUR",
    description:
      "Sweet / Sour",
    imageUrl: "/assets/GS.png",
  },
  {
    category: "Drinks",
    name: "GUNTUR HIGHBALL",
    description:
      "Vibrant / Sweet",
    imageUrl: "/assets/GH.png",
  },
  {
    category: "Drinks",
    name: "BANGOL OLD FASHIONED",
    description:
      "Rich / Smoky ",
    imageUrl: "/assets/BO.png",
  },
  {
    category: "Drinks",
    name: "SHILLONG SLING",
    description:
      "Exotic / Herbal",
    imageUrl: "/assets/SS.png",
  },
  {
    category: "Drinks",
    name: "PINK CITY",
    description:
      "Floral / Refreshing",
    imageUrl: "/assets/PC.png",
  },
  {
    category: "Drinks",
    name: "NANITAL BREEZE",
    description:
      "Crisp / Refreshing",
    imageUrl: "/assets/NE.png",
  },
];

export default function Menu() {
  return (
    <>
    {/* SparklesCore for Full-Page Particles */}
    <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full fixed top-0 left-0 z-[-1]"
        particleColor="#f8941c"
        />
      <div className="flex flex-1 flex-col justify-center items-center text-center pt-24">
        <h1 className="text-5xl font-bold mb-3 text-white lg:text-6xl">Our Menu</h1>
        <p className="text-xl text-white lg:text-2xl">Hover or tap on a card to explore our signature creations.</p>
      </div>
      <div className="menu-container">
        {menuData.map((item, index) => (
          <Card
            key={index}
            logo="/assets/logo[1].png"
            drinkImage={item.imageUrl}
            drinkName={item.name}
            drinkDesc={item.description}
          />
        ))}
      </div>
    </>
  );
}

const Card = ({ logo, drinkImage, drinkName, drinkDesc }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card-wrapper"
    >
      <div className={`card ${hovered ? "rotateY(180deg)" : ""}`}>
        {/* Front Side */}
        <div className="front">
          <Image src={logo} alt="Logo" width={150} height={150} sizes="150px" />
        </div>

        {/* Back Side - Reveals Drink Info */}
        <div className="back">
          <Image
            src={drinkImage}
            alt={drinkName}
            width={250}
            height={250}
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 250px"
          />
          <h3>{drinkName}</h3>
          <p>{drinkDesc}</p>
        </div>
      </div>
    </div>
  );
};
