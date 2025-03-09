const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    quantity: 15,
    category: "Electronics",
    description:
      "Latest model smartphone with high-end camera and long battery life",
    rating: 4.5,
    colors: ["Black", "Blue", "Silver"],
    specifications: {
      brand: "TechOne",
      storage: "128GB",
      battery: "5000mAh",
      camera: "108MP",
    },
  },
  {
    id: 2,
    name: "Laptop",
    price: 1200,
    quantity: 8,
    category: "Electronics",
    description: "High-performance laptop for work and gaming",
    rating: 4.8,
    colors: ["Gray", "Silver"],
    specifications: {
      brand: "XPower",
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
    },
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    quantity: 25,
    category: "Electronics",
    description: "Noise-cancelling headphones with deep bass",
    rating: 4.3,
    colors: ["Black", "White", "Red"],
    features: { wireless: true, batteryLife: "20 hours", microphone: true },
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 80,
    quantity: 12,
    category: "Home Appliances",
    description: "Automatic coffee maker with timer function",
    rating: 4.1,
    colors: ["Black", "White"],
    features: { capacity: "12 cups", power: "900W", autoShutoff: true },
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 150,
    quantity: 30,
    category: "Fashion",
    description: "Lightweight running shoes with extra cushioning",
    rating: 4.7,
    colors: ["Blue", "Black", "Green"],
    specifications: { brand: "RunX", material: "Mesh", sole: "Rubber" },
  },
  {
    id: 6,
    name: "Backpack",
    price: 60,
    quantity: 20,
    category: "Fashion",
    description: "Durable travel backpack with multiple compartments",
    rating: 4.2,
    colors: ["Black", "Gray", "Navy"],
    dimensions: { height: "18 inches", width: "12 inches", depth: "6 inches" },
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 50,
    quantity: 18,
    category: "Electronics",
    description: "Ergonomic gaming mouse with customizable buttons",
    rating: 4.6,
    colors: ["Black", "Red"],
    features: { dpi: "16000", rgbLighting: true, wireless: false },
  },
  {
    id: 8,
    name: "Office Chair",
    price: 300,
    quantity: 5,
    category: "Furniture",
    description: "Ergonomic office chair with adjustable height",
    rating: 4.5,
    colors: ["Black", "Brown"],
    dimensions: { height: "48 inches", width: "25 inches", depth: "22 inches" },
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 120,
    quantity: 22,
    category: "Electronics",
    description: "Portable Bluetooth speaker with deep bass",
    rating: 4.3,
    colors: ["Blue", "Black", "White"],
    features: { batteryLife: "15 hours", waterproof: true },
  },
  {
    id: 10,
    name: "Watch",
    price: 100,
    quantity: 10,
    category: "Fashion",
    description: "New stylish wristwatch",
    rating: 4.0,
    colors: ["Gold", "Silver", "Black"],
    specifications: {
      brand: "TimeLux",
      material: "Stainless Steel",
      waterproof: true,
    },
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 75,
    quantity: 16,
    category: "Fashion",
    description: "UV protection sunglasses",
    rating: 4.1,
    colors: ["Black", "Brown", "Blue"],
    specifications: { brand: "SunGlow", lensType: "Polarized" },
  },
  {
    id: 12,
    name: "Desk Lamp",
    price: 45,
    quantity: 13,
    category: "Home Decor",
    description: "Adjustable LED desk lamp",
    rating: 4.4,
    colors: ["Black", "White"],
    features: { brightnessLevels: 3, touchControl: true },
  },
  {
    id: 13,
    name: "Tablet",
    price: 350,
    quantity: 9,
    category: "Electronics",
    description: "Lightweight and powerful tablet",
    rating: 4.6,
    colors: ["Gray", "Silver", "Gold"],
    specifications: {
      brand: "TabMax",
      screen: "10 inches",
      battery: "6000mAh",
    },
  },
  {
    id: 14,
    name: "Electric Toothbrush",
    price: 60,
    quantity: 14,
    category: "Health & Personal Care",
    description: "Rechargeable electric toothbrush",
    rating: 4.3,
    colors: ["White", "Blue"],
    features: { batteryLife: "10 days", waterproof: true },
  },
  {
    id: 15,
    name: "Yoga Mat",
    price: 40,
    quantity: 18,
    category: "Fitness",
    description: "Non-slip yoga mat",
    rating: 4.5,
    colors: ["Purple", "Blue", "Green"],
    specifications: { material: "Eco-friendly rubber", thickness: "5mm" },
  },
  {
    id: 16,
    name: "Cookware Set",
    price: 200,
    quantity: 7,
    category: "Home Appliances",
    description: "Non-stick cookware set",
    rating: 4.7,
    colors: ["Black", "Red"],
    features: { ovenSafe: true, material: "Aluminum" },
  },
  {
    id: 17,
    name: "Smart TV",
    price: 900,
    quantity: 4,
    category: "Electronics",
    description: "4K UHD Smart TV",
    rating: 4.8,
    colors: ["Black", "Gray"],
    specifications: {
      screen: "55 inches",
      resolution: "4K UHD",
      smartFeatures: ["Netflix", "YouTube"],
    },
  },
  {
    id: 18,
    name: "Wireless Keyboard",
    price: 70,
    quantity: 11,
    category: "Electronics",
    description: "Slim wireless keyboard",
    rating: 4.4,
    colors: ["Black", "White"],
    features: { batteryLife: "6 months", bluetooth: true },
  },
];

module.exports = products;
