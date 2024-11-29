'use client'

import { useState } from 'react'
import Image from 'next/image'

const menuData = {
  drinks: [
    { name: "Classic Martini", description: "Gin or vodka with a touch of dry vermouth", price: "$12" },
    { name: "Old Fashioned", description: "Bourbon, bitters, sugar, and orange zest", price: "$14" },
    { name: "Mojito", description: "White rum, mint, lime, sugar, and soda water", price: "$11" },
  ],
  cocktails: [
    { name: "JB Signature Sour", description: "Our house special with whiskey, lemon, and a red wine float", price: "$16" },
    { name: "Smoky Negroni", description: "Mezcal, Campari, and sweet vermouth", price: "$15" },
    { name: "Passion Fruit Margarita", description: "Tequila, passion fruit, lime, and agave nectar", price: "$13" },
  ],
  food: [
    { name: "Truffle Fries", description: "Hand-cut fries with truffle oil and parmesan", price: "$9" },
    { name: "Sliders Trio", description: "Three mini burgers with different toppings", price: "$14" },
    { name: "Charcuterie Board", description: "Selection of cured meats, cheeses, and accompaniments", price: "$22" },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('drinks')

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Menu</h1>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 rounded-md ${
                activeCategory === category
                  ? 'bg-primary text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/${activeCategory}-${index + 1}.jpg`}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

