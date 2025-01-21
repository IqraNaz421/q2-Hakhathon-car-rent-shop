// 'use client';

// import React, { useState, useEffect } from 'react';

// interface OrderTrackingProps {
//   orderId: string;
//   estimatedDelivery: string;
//   currentLocation: string;
// }

// const OrderTracking: React.FC<OrderTrackingProps> = ({ orderId, estimatedDelivery, currentLocation }) => {
//   const [statusUpdates, setStatusUpdates] = useState<string[]>([
//     'Order Placed',
//     'Processing',
//     'Out for Delivery',
//     'Delivered',
//   ]);
//   const [currentStep, setCurrentStep] = useState<number>(0);

//   // Simulate real-time updates (for demo purposes)
//   useEffect(() => {
//     if (currentStep < statusUpdates.length - 1) {
//       const timer = setInterval(() => {
//         setCurrentStep((prev) => prev + 1);
//       }, 3000); // Updates every 3 seconds
//       return () => clearInterval(timer);
//     }
//   }, [currentStep, statusUpdates.length]);

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-center">Order Tracking</h2>
//       <p className="text-gray-700 mb-2">
//         <strong>Order ID:</strong> {orderId}
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Estimated Delivery:</strong> {estimatedDelivery}
//       </p>
//       <p className="text-gray-700 mb-6">
//         <strong>Current Location:</strong> {currentLocation}
//       </p>
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">Order Status</h3>
//         <div className="relative">
//           {statusUpdates.map((status, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <div
//                 className={`w-6 h-6 flex items-center justify-center rounded-full text-white ${
//                   index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
//                 }`}
//               >
//                 {index + 1}
//               </div>
//               <div
//                 className={`ml-4 ${
//                   index <= currentStep ? 'text-blue-600 font-bold' : 'text-gray-500'
//                 }`}
//               >
//                 {status}
//               </div>
//             </div>
//           ))}
//           <div
//             className="absolute top-0 left-3 w-0.5 bg-gray-300"
//             style={{
//               height: `${statusUpdates.length * 56}px`,
//             }}
//           ></div>
//           <div
//             className="absolute top-0 left-3 w-0.5 bg-blue-500 transition-all duration-500 ease-in-out"
//             style={{
//               height: `${(currentStep / (statusUpdates.length - 1)) * (statusUpdates.length * 56)}px`,
//             }}
//           ></div>
//         </div>
//       </div>
//       <div className="text-center">
//         {currentStep === statusUpdates.length - 1 ? (
//           <p className="text-green-600 font-bold">Your order has been delivered!</p>
//         ) : (
//           <p className="text-blue-600 font-bold">Status: {statusUpdates[currentStep]}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderTracking;
