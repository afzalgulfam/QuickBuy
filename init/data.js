const sampleMobile = [
  {
    category: "Mobile phones",
    brand: "Samsung",
    title: "Samsung Galaxy S21 Ultra",
    description:
      "Experience the ultimate in smartphone technology with the Galaxy S21 Ultra. Features a stunning display and powerful camera capabilities.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 94999,
    neighbourhood: "Mumbai",
    city: "Mumbai",
    state: "Maharastra",
  },
  {
    category: "Mobile phones",
    brand: "Apple",
    title: "iPhone 12 Pro Max",
    description:
      "The iPhone 12 Pro Max offers unparalleled performance and a sleek design. Perfect for photography enthusiasts and power users alike.",
    image:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 129900,
    neighbourhood: "Delhi",
    city: "Delhi",
  },
  {
    category: "Mobile phones",
    brand: "OnePlus",
    title: "OnePlus 9",
    description:
      "Discover smooth performance and stunning visuals with the OnePlus 9. Ideal for gaming and multitasking with its flagship specifications.",
    image:
      "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 54999,
    neighbourhood: "Bangalore",
    city: "Bangalore",
    state: "Karnatak",
  },
  {
    category: "Mobile phones",
    brand: "Xiaomi",
    title: "Xiaomi Mi 11X",
    description:
      "Combining affordability with cutting-edge technology, the Mi 11X offers exceptional value. Enjoy seamless performance and premium features.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29999,
    neighbourhood: "Hyderabad",
    city: "Hyderabad",
    state: "Telengana",
  },
  {
    category: "Mobile phones",
    brand: "Realme",
    title: "Realme GT",
    description:
      "The Realme GT delivers blazing-fast performance and an immersive display. Perfect for those who demand speed and style.",
    image:
      "https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 31999,
    neighbourhood: "Pune",
    city: "Pune",
    state: "maharastra",
  },
  {
    category: "Mobile phones",
    brand: "Oppo",
    title: "Oppo Reno 6 Pro",
    description:
      "Capture every detail with the Oppo Reno 6 Pro’s advanced camera system and enjoy a sleek, ergonomic design.",
    image:
      "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 39990,
    neighbourhood: "Chennai",
    city: "Chennai",
    state: "tamil nadu",
  },
  {
    category: "Mobile phones",
    brand: "Vivo",
    title: "Vivo X60 Pro+",
    description:
      "Experience professional photography with the Vivo X60 Pro+. Featuring a sophisticated camera system and powerful performance.",
    image:
      "https://images.unsplash.com/photo-1533022139390-e31c488d69e2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 54990,
    neighbourhood: "Delhi",
    city: "Delhi",
  },
  {
    category: "Mobile phones",
    brand: "Google",
    title: "Google Pixel 5a",
    description:
      "Discover Google's latest in mobile technology with the Pixel 5a. Exceptional camera capabilities and seamless Google integration.",
    image:
      "https://images.unsplash.com/photo-1511296933631-18b1a062212c?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 34999,
    neighbourhood: "Bangalore",
    city: "Bangalore",
    state: "karnatak",
  },
  {
    category: "Mobile phones",
    brand: "Motorola",
    title: "Motorola Edge 20 Pro",
    description:
      "Enjoy flagship-level performance with the Motorola Edge 20 Pro. Stunning display and high-quality camera features for your everyday needs.",
    image:
      "https://images.unsplash.com/photo-1510166089176-b57564a542b1?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 42999,
    neighbourhood: "Chennai",
    city: "Chennai",
    state: "tamil nadu",
  },
  {
    category: "Mobile phones",
    brand: "Nokia",
    title: "Nokia G50",
    description:
      "Experience reliable performance with the Nokia G50. Long-lasting battery life and durable design, perfect for everyday use.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 18999,
    neighbourhood: "Hyderabad",
    city: "Hyderabad",
    state: "Telengana",
  },
  {
    category: "Mobile phones",
    brand: "OnePlus",
    title: "OnePlus Nord 2",
    description:
      "Discover smooth performance with the OnePlus Nord 2. Equipped with advanced features and a sleek design.",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29999,
    neighbourhood: "Pune",
    city: "Pune",
    state: "maharastra",
  },
];

const sampleCar = [
  {
    category: "Cars",
    brand: "Maruti Suzuki",
    model: "Swift",
    variant: "VXI",
    year: 2018,
    fuel: "Petrol",
    transmission: "Manual",
    driven: 25000,
    owners: "1st",
    description:
      "Well-maintained Maruti Suzuki Swift VXI, single owner, excellent condition.",
    image:
      "https://images.unsplash.com/photo-1576074436157-6555fe967d80?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 500000,
    neighbourhood: "Mumbai",
    city: "Mumbai",
    state: "maharastra",
  },
  {
    category: "Cars",
    brand: "Hyundai",
    model: "i20",
    variant: "Asta",
    year: 2017,
    fuel: "Diesel",
    transmission: "Manual",
    driven: 45000,
    owners: "2nd",
    description:
      "Hyundai i20 Asta with comprehensive service history, well-maintained.",
    image:
      "https://images.unsplash.com/photo-1559038465-e0ca2910a5b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 600000,
    neighbourhood: "Delhi",
    city: "Delhi",
  },
  {
    category: "Cars",
    brand: "Toyota",
    model: "Innova",
    variant: "Crysta 2.4 VX",
    year: 2019,
    fuel: "Diesel",
    transmission: "Manual",
    driven: 35000,
    owners: "1st",
    description:
      "Toyota Innova Crysta VX well-maintained with full service history, spacious and reliable.",
    image:
      "https://images.unsplash.com/photo-1617045434421-a72d713fc8a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    price: 1500000,
    neighbourhood: "Bangalore",
    city: "Bangalore",
    state: "karnataka",
  },
  {
    category: "Cars",
    brand: "Honda",
    model: "City",
    variant: "VX",
    year: 2016,
    fuel: "Petrol",
    transmission: "Automatic",
    driven: 30000,
    owners: "1st",
    description:
      "Honda City VX automatic in excellent condition, low mileage, single owner.",
    image:
      "https://images.unsplash.com/photo-1654618345032-e3f3909750a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 700000,
    neighbourhood: "Chennai",
    city: "Chennai",
    state: "tamil nadu",
  },
  {
    category: "Cars",
    brand: "Ford",
    model: "EcoSport",
    variant: "Titanium",
    year: 2019,
    fuel: "Petrol",
    transmission: "Manual",
    driven: 20000,
    owners: "1st",
    description:
      "Ford EcoSport Titanium well-maintained with full service history, excellent performance.",
    image:
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 850000,
    neighbourhood: "Pune",
    city: "Pune",
    state: "maharastra",
  },
  {
    category: "Cars",
    brand: "Volkswagen",
    model: "Polo",
    variant: "Highline Plus",
    year: 2018,
    fuel: "Diesel",
    transmission: "Manual",
    driven: 40000,
    owners: "2nd",
    description:
      "Volkswagen Polo Highline Plus with good mileage, serviced regularly, second owner.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 600000,
    neighbourhood: "Kolkata",
    city: "Kolkata",
    state: "west bengal",
  },
  {
    category: "Cars",
    brand: "Tata",
    model: "Nexon",
    variant: "XZ",
    year: 2020,
    fuel: "Petrol",
    transmission: "Automatic",
    driven: 15000,
    owners: "1st",
    description:
      "Tata Nexon XZ automatic in mint condition, very low mileage, like new.",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 900000,
    neighbourhood: "Hyderabad",
    city: "Hyderabad",
    state: "Telengana",
  },
  {
    category: "Cars",
    brand: "Mahindra",
    model: "Scorpio",
    variant: "S11",
    year: 2017,
    fuel: "Diesel",
    transmission: "Manual",
    driven: 60000,
    owners: "2nd",
    description:
      "Mahindra Scorpio S11 with powerful engine, well-maintained, second owner.",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 800000,
    neighbourhood: "Ahmedabad",
    city: "Ahmedabad",
    state: "Uttarpradesh",
  },
];

module.exports = { carData: sampleCar };
module.exports = { mobileData: sampleMobile };
