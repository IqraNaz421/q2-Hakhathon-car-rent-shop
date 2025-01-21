





// 'use client';
// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Image from 'next/image';

// // Define Car type with quantity
// interface Car {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   image: string;
//   description: string;
//   quantity?: number; // Optional quantity field
// }

// // Dummy car data
// const cars: Car[] = [
//   {
//     id: 1,
//     name: "Tesla Model 3",
//     price: 50000,
//     discountPrice: 45000,
//     image: "/images/tesla.jpg",
//     description: "Electric car with sleek design and long battery life.",
//   },
//   {
//     id: 2,
//     name: "Ford Mustang",
//     price: 40000,
//     discountPrice: 35000,
//     image: "/images/mustang.jpg",
//     description: "A muscle car with powerful performance.",
//   },
//   {
//     id: 3,
//     name: "BMW X5",
//     price: 60000,
//     discountPrice: 55000,
//     image: "/images/bmw.jpg",
//     description: "Luxury SUV with top-tier comfort and technology.",
//   },
//   {
//     id: 4,
//     name: "Audi A6",
//     price: 45000,
//     discountPrice: 42000,
//     image: "/images/audi.jpg",
//     description: "High-end sedan with an exceptional driving experience.",
//   },
//   {
//     id: 5,
//     name: "Mercedes-Benz C-Class",
//     price: 55000,
//     discountPrice: 50000,
//     image: "/images/mercedes.jpg",
//     description: "Stylish sedan with advanced features.",
//   },
//   {
//     id: 6,
//     name: "Porsche 911",
//     price: 80000,
//     discountPrice: 75000,
//     image: "/images/porsche.jpg",
//     description: "Iconic sports car with precision engineering.",
//   },
// ];

// // Fetch car details by ID
// const getCarById = (id: number): Car | undefined => {
//   return cars.find((car) => car.id === id);
// };

// const CarDetailPage = ({ params }: { params: { id: string } }) => {
//   const carId = parseInt(params.id); // Convert id to number
//   const car = getCarById(carId);

//   // If car not found, show 404
//   if (!car) {
//     notFound(); // Redirects to the 404 page
//   }

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg shadow-xl">
//           {/* Car Image */}
//           <div className="flex flex-col sm:flex-row items-center">
//             <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
//               <Image
//                 src={car.image}
//                 alt={car.name}
//                 height={500}
//                 width={500}
//                 className="w-full h-auto object-cover rounded-lg shadow-md"
//               />
//             </div>
//           </div>

//           {/* Car Details */}
//           <div className="sm:ml-8 mt-6 sm:mt-0 w-full sm:w-1/2">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-4">{car.name}</h1>
//             <p className="text-gray-600 mb-4">{car.description}</p>

//             {/* Price and Discount */}
//             <div className="mb-6">
//               <span className="line-through text-gray-500 text-xl">${car.price}</span>{' '}
//               <span className="text-red-600 text-2xl font-bold">${car.discountPrice}</span>
//             </div>

//             {/* Car Features */}
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-gray-800">Features:</h3>
//               <ul className="list-disc ml-6 text-gray-600">
//                 <li>Electric or hybrid engine options</li>
//                 <li>Luxurious interior</li>
//                 <li>Advanced safety features</li>
//               </ul>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addToCart(car)} // Add to Cart logic
//               className="py-3 px-8 text-black border-2 border-rose-500 rounded-lg shadow-lg hover:bg-rose-300 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Add to cart logic
// const addToCart = (car: Car) => {
//   const cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]');
//   const existingCar = cart.find((item) => item.id === car.id);

//   if (existingCar) {
//     existingCar.quantity = (existingCar.quantity || 0) + 1; // Update quantity
//   } else {
//     cart.push({ ...car, quantity: 1 }); // Add new car with quantity 1
//   }

//   localStorage.setItem('cart', JSON.stringify(cart));
//   alert('Car added to cart!');
// };

// export default CarDetailPage;




















// 'use client';
// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Image from 'next/image';

// // Define Car type with quantity
// interface Car {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   image: string;
//   description: string;
//   gallery: string[]; // Add a gallery of images
//   quantity?: number; // Optional quantity field
// }

// // Dummy car data
// const cars: Car[] = [
//   {
//     id: 1,
//     name: "Tesla Model 3",
//     price: 50000,
//     discountPrice: 45000,
//     image: "/images/p2.png",
//     description: "Electric car with sleek design and long battery life.",
//     gallery: ["/images/tesla1.jpg", "/images/tesla2.jpg", "/images/tesla3.jpg"],
//   },
//   {
//     id: 2,
//     name: "Ford Mustang",
//     price: 40000,
//     discountPrice: 35000,
//     image: "/images/mustang.jpg",
//     description: "A muscle car with powerful performance.",
//     gallery: ["/images/mustang1.jpg", "/images/mustang2.jpg", "/images/mustang3.jpg"],
//   },
//   {
//     id: 3,
//     name: "BMW X5",
//     price: 60000,
//     discountPrice: 55000,
//     image: "/images/bmw.jpg",
//     description: "Luxury SUV with top-tier comfort and technology.",
//     gallery: ["/images/bmw1.jpg", "/images/bmw2.jpg", "/images/bmw3.jpg"],
//   },
// ];

// // Fetch car details by ID
// const getCarById = (id: number): Car | undefined => {
//   return cars.find((car) => car.id === id);
// };

// const CarDetailPage = ({ params }: { params: { id: string } }) => {
//   const carId = parseInt(params.id); // Convert id to number
//   const car = getCarById(carId);

//   // If car not found, show 404
//   if (!car) {
//     notFound(); // Redirects to the 404 page
//   }

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         {/* Car Image and Gallery */}
//         <div className="bg-white p-8 rounded-lg shadow-xl">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">{car.name}</h1>
//           <div className="flex flex-col items-center">
//             {/* Main Image */}
//             <Image
//               src={car.image}
//               alt={car.name}
//               width={600}
//               height={600}
//               className=" h-600 w-600 rounded-lg mb-6 shadow-md"
//             />
//             {/* Gallery Images */}
//             <div className="flex gap-4">
//               {car.gallery.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={`${car.name} gallery ${index + 1}`}
//                   width={150}
//                   height={100}
//                   className="w-32 h-20 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Car Details */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Car Details</h2>
//             <p className="text-gray-600 mb-6">{car.description}</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">Pricing:</h3>
//                 <p className="text-gray-600">
//                   <span className="line-through text-gray-500">${car.price}</span>{" "}
//                   <span className="text-red-600 font-bold">${car.discountPrice}</span>
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">Features:</h3>
//                 <ul className="list-disc ml-4 text-gray-600">
//                   <li>Electric or hybrid engine options</li>
//                   <li>Luxurious interior</li>
//                   <li>Advanced safety features</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="mt-8 flex justify-end">
//             <button
//               onClick={() => addToCart(car)}
//               className="py-3 px-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Add to cart logic
// const addToCart = (car: Car) => {
//   const cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]');
//   const existingCar = cart.find((item) => item.id === car.id);

//   if (existingCar) {
//     existingCar.quantity = (existingCar.quantity || 0) + 1; // Update quantity
//   } else {
//     cart.push({ ...car, quantity: 1 }); // Add new car with quantity 1
//   }

//   localStorage.setItem('cart', JSON.stringify(cart));
//   alert('Car added to cart!');
// };

// export default CarDetailPage;












// 'use client';
// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Image from 'next/image';

// // Define Car type with availability
// interface Car {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   brand: string;
//   carType: string;
//   year: number;
//   engine: string;
//   transmission: string;
//   seatingCapacity: number;
//   safety: string[];
//   specialFeatures: string[];
//   gallery: string[];
//   availability: boolean;
//   description: string;
// }

// // Dummy car data
// const cars: Car[] = [
//   {
//     id: 1,
//     name: "Tesla Model 3",
//     price: 50000,
//     discountPrice: 45000,
//     brand: "Tesla",
//     carType: "Sedan",
//     year: 2023,
//     engine: "Electric",
//     transmission: "Automatic",
//     seatingCapacity: 5,
//     safety: ["Airbags", "ABS", "Autopilot"],
//     specialFeatures: ["Sunroof", "Cruise Control", "Touchscreen Display"],
//     gallery: ["/images/p3.png", "/images/p3.png", "/images/p3.png"],
//     availability: true,
//     description: "A premium electric sedan with unmatched safety and luxury.",
//   },
// ];

// // Fetch car details by ID
// const getCarById = (id: number): Car | undefined => {
//   return cars.find((car) => car.id === id);
// };

// const CarDetailPage = ({ params }: { params: { id: string } }) => {
//   const carId = parseInt(params.id); // Convert id to number
//   const car = getCarById(carId);

//   // If car not found, show 404
//   if (!car) {
//     notFound(); // Redirects to the 404 page
//   }

//   return (
//     <section className="py-12 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side: Main Image and Gallery */}
//           <div>
//             <Image
//               src={car.gallery[0]}
//               alt={car.name}
//               width={800}
//               height={800}
//               className="w-full h-auto rounded-lg shadow-md mb-4"
//             />
//             <div className="flex gap-4 mt-4">
//               {car.gallery.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={`${car.name} gallery ${index + 1}`}
//                   width={500}
//                   height={500}
//                   className="w-40 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side: Car Details */}
//           <div className="flex flex-col justify-center space-y-4">
//             <h1 className="text-3xl font-bold text-blue-800">{car.name}</h1>
//             <p className="text-gray-600 italic">{car.description}</p>
//             <ul className="list-none text-gray-600 space-y-2">
//               <li>Brand: <span className="text-blue-800 font-semibold">{car.brand}</span></li>
//               <li>Type: <span className="text-blue-800 font-semibold">{car.carType}</span></li>
//               <li>Year: <span className="text-blue-800 font-semibold">{car.year}</span></li>
//               <li>Engine: <span className="text-blue-800 font-semibold">{car.engine}</span></li>
//               <li>Transmission: <span className="text-blue-800 font-semibold">{car.transmission}</span></li>
//               <li>Seating Capacity: <span className="text-blue-800 font-semibold">{car.seatingCapacity}</span></li>
//               <li>
//                 Availability: <span className={`font-bold ${car.availability ? "text-green-600" : "text-red-600"}`}>
//                   {car.availability ? "Available" : "Not Available"}
//                 </span>
//               </li>
//             </ul>

//             <div>
//               <p className="text-gray-600">
//                 <span className="line-through text-gray-500">${car.price}</span> 
//                 <span className="text-red-600 font-bold">${car.discountPrice}</span>
//               </p>
//             </div>

//             <div className="flex gap-4 mt-4">
//               <button className="py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
//                 Book Now
//               </button>
//               <button className="py-3 px-6 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition">
//                 Test Drive
//               </button>
//               <button className="py-3 px-6 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition">
//                 Contact Dealer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarDetailPage;























'use client';
import React from 'react';
import { notFound } from 'next/navigation'; // For handling invalid IDs
import Image from 'next/image';
import Link from 'next/link';

// Define Car type with availability
interface Car {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  brand: string;
  carType: string;
  year: number;
  engine: string;
  transmission: string;
  seatingCapacity: number;
  safety: string[];
  specialFeatures: string[];
  gallery: string[];
  availability: boolean;
  description: string;
}

// Dummy car data
const cars: Car[] = [
  {
    id: 1,
    name: "BMW X5",
    price: 70000,
    discountPrice: 45000,
    brand: "Tesla",
    carType: "X5",
    year: 2020,
    engine: "Electric",
    transmission: "Automatic",
    seatingCapacity: 5,
    safety: ["Airbags", "ABS", "Autopilot"],
    specialFeatures: ["Sunroof", "Cruise Control", "Touchscreen Display"],
    gallery: ["/images/p3.png", "/images/p3.png", "/images/p3.png"],
    availability: true,
    description: "A premium electric sedan with unmatched safety and luxury.",
  },
  {
    id: 2,
    name: "Ford Mustang",
    price: 120.0,
    discountPrice: 100.0,
    brand: "Ford",
    carType: "Hybrid",
    year: 2023,
    engine: "Hybrid",
    transmission: "Manual",
    seatingCapacity: 4,
    safety: ["Airbags", "ABS", "Lane Assist"],
    specialFeatures: ["Sunroof", "Cruise Control", "Bluetooth"],
    gallery: ["/images/p1.png", "/images/p1.png", "/images/p1.png"],
    availability: true,
    description: "A powerful hybrid car with stylish design and great performance.",
  },
  {
    id: 3,
    name: "Audi A6",
    price: 150.0,
    discountPrice: 130.0,
    brand: "Audi",
    carType: "Electric",
    year: 2023,
    engine: "Electric",
    transmission: "Automatic",
    seatingCapacity: 5,
    safety: ["Airbags", "ABS", "Autonomous Driving"],
    specialFeatures: ["Leather Seats", "Heated Seats", "Sunroof"],
    gallery: ["/images/p3.png", "/images/p3.png", "/images/p3.png"],
    availability: true,
    description: "A luxury electric sedan with cutting-edge technology and premium comfort.",
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    price: 200.0,
    discountPrice: 180.0,
    brand: "Mercedes-Benz",
    carType: "Hybrid",
    year: 2023,
    engine: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    safety: ["Airbags", "ABS", "Distronic"],
    specialFeatures: ["Massage Seats", "Sunroof", "Park Assist"],
    gallery: ["/images/r1.png", "/images/r1.png", "/images/r1.png"],
    availability: true,
    description: "A luxurious hybrid car with unmatched comfort and advanced safety features.",
  },
  {
    id: 5,
    name: "Porsche 911",
    price: 250.0,
    discountPrice: 220.0,
    brand: "Porsche",
    carType: "Gasoline",
    year: 2023,
    engine: "Gasoline",
    transmission: "Manual",
    seatingCapacity: 4,
    safety: ["Airbags", "ABS", "Stability Control"],
    specialFeatures: ["Turbo Engine", "Sport Mode", "Leather Interior"],
    gallery: ["/images/r6.png", "/images/r6.png", "/images/r6.png"],
    availability: true,
    description: "A high-performance sports car with legendary design and handling.",
  },
  {
    id: 6,
    name: "Lexus RX 350",
    price: 78.0,
    discountPrice: 70.0,
    brand: "Lexus",
    carType: "Hybrid",
    year: 2023,
    engine: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    safety: ["Airbags", "ABS", "Pedestrian Detection"],
    specialFeatures: ["Touchscreen Display", "Heated Seats", "Keyless Entry"],
    gallery: ["/images/r7.png", "/images/r7.png", "/images/r7.png"],
    availability: true,
    description: "A luxurious hybrid SUV with spacious interior and advanced safety features.",
  },
  {
    id: 7,
    name: "Chevrolet Camaro",
    price: 95.0,
    discountPrice: 85.0,
    brand: "Chevrolet",
    carType: "Gasoline",
    year: 2023,
    engine: "Gasoline",
    transmission: "Manual",
    seatingCapacity: 4,
    safety: ["Airbags", "ABS", "Traction Control"],
    specialFeatures: ["Sport Mode", "Bluetooth Connectivity", "Leather Seats"],
    gallery: ["/images/r8.png", "/images/r8.png", "/images/r8.png"],
    availability: true,
    description: "An iconic muscle car with thrilling performance and aggressive styling.",
  },
  {
    id: 8,
    name: "Tesla Model 3",
    price: 150.0,
    discountPrice: 130.0,
    brand: "Tesla",
    carType: "Electric",
    year: 2023,
    engine: "Electric",
    transmission: "Automatic",
    seatingCapacity: 5,
    safety: ["Airbags", "ABS", "Autopilot"],
    specialFeatures: ["Sunroof", "Touchscreen Display", "Adaptive Cruise Control"],
    gallery: ["/images/r1.png", "/images/r1.png", "/images/r1.png"],
    availability: true,
    description: "A high-performance electric sedan with advanced self-driving capabilities.",
  },
];

// Fetch car details by ID
const getCarById = (id: number): Car | undefined => {
  return cars.find((car) => car.id === id);
};

const CarDetailPage = ({ params }: { params: { id: string } }) => {
  const carId = parseInt(params.id); // Convert id to number
  const car = getCarById(carId);

  // If car not found, show 404
  if (!car) {
    notFound(); // Redirects to the 404 page
  }

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Main Image and Gallery */}
          <div>
            <Image
              src={car.gallery[0]}
              alt={car.name}
              width={500}
              height={600}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 mt-4 overflow-x-auto">
              {car.gallery.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${car.name} gallery ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>

          {/* Right Side: Car Details */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold text-blue-800">{car.name}</h1>
            <p className="text-gray-600 italic">{car.description}</p>
            <ul className="list-none text-gray-600 space-y-2">
              <li>Brand: <span className="text-blue-800 font-semibold">{car.brand}</span></li>
              <li>Type: <span className="text-blue-800 font-semibold">{car.carType}</span></li>
              <li>Year: <span className="text-blue-800 font-semibold">{car.year}</span></li>
              <li>Engine: <span className="text-blue-800 font-semibold">{car.engine}</span></li>
              <li>Transmission: <span className="text-blue-800 font-semibold">{car.transmission}</span></li>
              <li>Seating Capacity: <span className="text-blue-800 font-semibold">{car.seatingCapacity}</span></li>
              <li>
                Availability: <span className={`font-bold ${car.availability ? "text-green-600" : "text-red-600"}`}>
                  {car.availability ? "Available" : "Not Available"}
                </span>
              </li>
            </ul>

            <div>
              <p className="text-gray-600">
                <span className="line-through text-gray-500">${car.price}</span> 
                <span className="text-red-600 font-bold">${car.discountPrice}</span>
              </p>
            </div>

            <div className="flex gap-4 mt-4 flex-wrap">
            <Link href="/payment">
              <button className="py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition w-full sm:w-auto">
                Book Now
              </button>
              </Link>
  

                       <Link href="/testdrive">
                  <button className="py-3 px-6 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition w-full sm:w-auto">
              Test Drive
          </button>
                    </Link>
  
                    <Link href="/contact">
  <button className="py-3 px-6 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition w-full sm:w-auto">
    Contact Dealer
  </button>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailPage;
