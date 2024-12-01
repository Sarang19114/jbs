"use client";
import React from "react";
import Image from "next/image"; // Importing Image component for the logo
import { SparklesCore } from "@/components/ui/sparkles";

const menuData = [
  {
    category: "Drinks",
    name: "RATNAGIRI SOUR",
    description:
      "A Fruity / Creamy Concoction of Whiskey, mango syrup, mint syrup, lime juice, toned milk, and raw mango juice",
    imageUrl: "/assets/RS.png",
  },
  {
    category: "Drinks",
    name: "HIMACHALI PICANTE",
    description:
      "A bold fusion of in-house peach and green apple syrup with coriander, jalapeños, shimlamirch and Tequila.",
    imageUrl: "/assets/HP.png",
  },
  {
    category: "Drinks",
    name: "BANARASI DAIQUIRI",
    description:
      "A concoction of our in house Paan infused Rum with honey lime juice and a distinctive aroma",
    imageUrl: "/assets/BD.png",
  },
  {
    category: "Drinks",
    name: "NORTH AND EAST PUNCH",
    description:
      "A rich refreshing blend of whiskey with saffron, orange bitters and Our special Darjeeling tea Soda",
    imageUrl: "/assets/NEP.png",
  },
  {
    category: "Drinks",
    name: "MALABAR PALOMA",
    description:
      "A zesty mix of tequila, grapefruit and fresh curry leafs chaat masala, and soda water.",
    imageUrl: "/assets/MP.png",
  },
  {
    category: "Drinks",
    name: "NAWABI MULE",
    description:
      "Crafted with exotic in-house mango murraba and ginger beer shaken with Vodka ",
    imageUrl: "/assets/NM.png",
  },
  {
    category: "Drinks",
    name: "GOAN SOUR",
    description:
      "A refreshing tropical mix of our in house kokum and coconut syrup with gin and lime juice.",
    imageUrl: "/assets/GS.png",
  },
  {
    category: "Drinks",
    name: "GUNTUR HIGHBALL",
    description:
      "A clarified Tequila drink with in house Imli syrup combined with blue curaco and soda water.",
    imageUrl: "/assets/GH.png",
  },
  {
    category: "Drinks",
    name: "BANGOL OLD FASHIONED",
    description:
      "A rich bourbon drink with Goindhbhog rice, Gondhoraj washed with Jhorna Ghee and topped with aromatic bitters",
    imageUrl: "/assets/BO.png",
  },
  {
    category: "Drinks",
    name: "SHILLONG SLING",
    description:
      "A unique blend of in house black sesame syrup and turmeric gin with Jägermeister, pineapple juice and soda water",
    imageUrl: "/assets/SS.png",
  },
  {
    category: "Drinks",
    name: "PINK CITY",
    description:
      "A Floral mix of in house rose infused gin with our special fennel syrup and tonic water.",
    imageUrl: "/assets/PC.png",
  },
  {
    category: "Drinks",
    name: "NANITAL BREEZE",
    description:
      "A Refreshing Blend of Vodka, Cucumber, Elderflower, Olive & Mint",
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
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>

        {/* Back Side - Reveals Drink Info */}
        <div className="back">
          <Image src={drinkImage} alt={drinkName} width={250} height={250} />
          <h3>{drinkName}</h3>
          <p>{drinkDesc}</p>
        </div>
      </div>
    </div>
  );
};
