import Image from 'next/image'

const menuData = [
  { category: "Drinks", name: "RATNAGIRI SOUR", description: "A Fruity / Creamy Concoction of Whiskey, mango syrup, mint syrup, lime juice, toned milk, and raw mango juice", imageUrl: "/assets/RS.png" },
  { category: "Drinks", name: "HIMACHALI PICANTE", description: "A bold fusion of in-house peach and green apple syrup with coriander, jalapeños, shimlamirch and Tequila.", imageUrl: "/assets/HP.png" },
  { category: "Drinks", name: "BANARASI DAIQUIRI", description: "A concoction of our in house Paan infused Rum with honey lime juice and a distinctive aroma", imageUrl: "/assets/BD.png" },
  { category: "Drinks", name: "NORTH AND EAST PUNCH", description: "A rich refreshing blend of whiskey with saffron, orange bitters and Our special Darjeeling tea Soda", imageUrl: "/assets/NEP.png" },
  { category: "Drinks", name: "MALABAR PALOMA", description: "A zesty mix of tequila, grapefruit and fresh curry leafs chaat masala, and soda water.", imageUrl: "/assets/MP.png" },
  { category: "Drinks", name: "NAWABI MULE", description: "Crafted with exotic in-house mango murraba and ginger beer shaken with Vodka ", imageUrl: "/assets/NM.png" },
  { category: "Drinks", name: "GOAN SOUR", description: "A refreshing tropical mix of our in house kokum and coconut syrup with gin and lime juice.", imageUrl: "/assets/GS.png" },
  { category: "Drinks", name: "GUNTUR HIGHBALL", description: "A clarified Tequila drink with in house Imli syrup combined with blue curaco and soda water.", imageUrl: "/assets/GH.png" },
  { category: "Drinks", name: "BANGOL OLD FASHIONED", description: "A rich bourbon drink with Goindhbhog rice, Gondhoraj washed with Jhorna Ghee and topped with aromatic bitters", imageUrl: "/assets/BO.png" },
  { category: "Drinks", name: "SHILLONG SLING", description: "A unique blend of in house black sesame syrup and turmeric gin with Jägermeister, pineapple juice and soda water", imageUrl: "/assets/SS.png" },
  { category: "Drinks", name: "PINK CITY", description: "A Floral mix of in house rose infused gin with our special fennel syrup and tonic water.", imageUrl: "/assets/PC.png" },
  { category: "Drinks", name: "NANITAL BREEZE", description: "A Refreshing Blend of Vodka, Cucumber, Elderflower, Olive & Mint", imageUrl: "/assets/NE.png" },
]

export default function Menu() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Our Menu</h1>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={1600}
                height={1000}
                className="w-full h-64 object-scale-down flex items-center justify-center"
              />
              <div className="px-5 text-primary">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-primary/80 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
