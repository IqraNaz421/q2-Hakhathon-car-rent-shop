

// 'use client'

// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Datafetch: React.FC = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const query = await client.fetch(
//           `*[_type == "product"]{
//             _id,
//             name,
//             type,
//             originalprice,
//             transmission,
//             fuelCapacity,
//             seatingCapacity,
//             pricePerDay,
//             "imageUrl": image.asset->url
//           }`
//         );
//         setProducts(query); // Save the fetched data in state
//         setLoading(false);
//       } catch (err: any) {
//         setError('Failed to fetch data'); // Set error message
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run only once on component mount

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
//       {products.map((product) => (
//         <div
//           key={product._id}
//           className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition duration-300"
//         >
//           {/* Check if imageUrl is valid before rendering the image */}
//           {product.imageUrl ? (
//             <div className="relative w-full h-24 mb-4">
//               <Image
//                 src={urlFor(product.imageUrl).url()}
//                 alt={product.name}
//                 layout="fill"
//                 objectFit="cover" // Cover ensures it fills the container without distortion
//                 className="rounded-lg"
//               />
//             </div>
//           ) : (
//             <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div> // Placeholder if imageUrl is missing
//           )}

//           {/* Product Details */}
//           <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
//           <p className="text-sm text-gray-500">Type: {product.type}</p>
//           <p className="text-sm text-gray-500">Transmission: {product.transmission}</p>
//           <p className="text-sm text-gray-500">Fuel Capacity: {product.fuelCapacity}L</p>
//           <p className="text-sm text-gray-500">Seating Capacity: {product.seatingCapacity}</p>
//           <p className="text-xl text-blue-600 font-bold">${product.originalprice}</p>
//           <p className="text-sm text-gray-500">Price Per Day: ${product.pricePerDay}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Datafetch;
