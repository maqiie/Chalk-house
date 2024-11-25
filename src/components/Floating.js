// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react"; // For the close button icon
// import { motion } from "framer-motion";

// const FloatingAd = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Delay the appearance of the ad
//   useEffect(() => {
//     const delayTimer = setTimeout(() => {
//       setIsVisible(true);
//     }, 6000); // Delay of 3 seconds

//     // Automatically hide the ad after 10 seconds
//     const hideTimer = setTimeout(() => {
//       setIsVisible(false);
//     }, 16000); // 3s delay + 10s visible time

//     // Clean up timers on component unmount
//     return () => {
//       clearTimeout(delayTimer);
//       clearTimeout(hideTimer);
//     };
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false); // Hide the ad when the close button is clicked
//   };

//   return (
//     isVisible && (
//       <motion.div
//         className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.div
//           className="relative bg-gradient-to-r from-black via-red-600 to-black text-white p-6 rounded-lg shadow-2xl max-w-4xl w-full"
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           {/* Ad Content */}
//           <div className="flex flex-col md:flex-row items-center space-x-4 space-y-4 md:space-y-0">
//             {/* Image Section */}
//             <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1561234088-079012e06052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGZvb3RiYWxsJTIwbWF0Y2h8ZW58MHx8fHwxNjkzMjEyODAw&ixlib=rb-1.2.1&q=80&w=400"
//                 alt="Chalkhouse Event"
//                 className="w-full h-auto object-cover rounded-lg shadow-md"
//               />
//             </div>

//             {/* Text Content */}
//             <div className="flex-1 text-center md:text-left">
//               <h3 className="font-extrabold text-3xl mb-2 uppercase">
//                 ⚡ Welcome to Chalkhouse ⚡
//               </h3>
//               <p className="text-xl mb-4 font-bold">🎉 Exclusive Football Deals! 🎉</p>
//               <p className="text-lg mb-4">
//                 The ultimate showdown between <span className="text-red-500">FC Barcelona</span> and{" "}
//                 <span className="text-red-500">Real Madrid</span> awaits! Get ready for the thrill!
//               </p>
//               <p className="text-lg mb-6 font-semibold">
//                 🔥 Limited-time offer: <span className="text-red-500">20% OFF</span> all bookings!
//                 Use code <span className="text-white bg-red-600 px-2 py-1 rounded">CHALK20</span>
//                 at checkout.
//               </p>

//               {/* Call to Action */}
//               <a
//                 href="/offers"
//                 className="inline-block bg-red-600 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-red-500 transition duration-300"
//               >
//                 Claim Your Offer Now!
//               </a>

//               {/* Close Button */}
//               <button
//                 className="absolute top-2 right-2 bg-transparent text-white hover:text-red-500 p-2 rounded-full"
//                 onClick={handleClose}
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     )
//   );
// };

// export default FloatingAd;


// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react"; // For the close button icon
// import { motion } from "framer-motion";

// const FloatingAd = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Delay the appearance of the ad
//   useEffect(() => {
//     const delayTimer = setTimeout(() => {
//       setIsVisible(true);
//     }, 3000); // Delay of 3 seconds

//     // Automatically hide the ad after 10 seconds
//     const hideTimer = setTimeout(() => {
//       setIsVisible(false);
//     }, 13000); // 3s delay + 10s visible time

//     return () => {
//       clearTimeout(delayTimer);
//       clearTimeout(hideTimer);
//     };
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   return (
//     isVisible && (
//       <motion.div
//         className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.div
//           className="relative bg-gradient-to-b from-black via-red-800 to-black text-white p-8 rounded-lg shadow-2xl max-w-4xl w-full"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 bg-transparent text-white hover:text-red-500 p-2 rounded-full"
//             onClick={handleClose}
//           >
//             <X className="w-6 h-6" />
//           </button>

//           {/* Poster Content */}
//           <div className="flex flex-col items-center space-y-6 text-center">
//             {/* Image Section */}
//             <div className="w-full rounded-lg overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1561234088-079012e06052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGZvb3RiYWxsfGVufDB8fHx8MTY5MzIxMjgwMA&ixlib=rb-1.2.1&q=80&w=800"
//                 alt="Chalkhouse Ad"
//                 className="w-full object-cover rounded-lg"
//               />
//             </div>

//             {/* Title */}
//             <h1 className="text-4xl font-extrabold uppercase tracking-widest text-red-500">
//               ⚡ Chalkhouse Presents ⚡
//             </h1>

//             {/* Event Details */}
//             <p className="text-lg font-medium">
//               The **ultimate showdown** between <span className="text-red-300">FC Barcelona</span>{" "}
//               and <span className="text-red-300">Real Madrid</span>!
//             </p>
//             <p className="text-xl font-bold">
//               🎉 Don’t miss the **event of the season**! 🎉
//             </p>

//             {/* Promotional Offer */}
//             <div className="bg-white text-black font-extrabold py-4 px-6 rounded-lg shadow-md">
//               <p>
//                 💥 **Get 20% OFF** on your next purchase! Use code{" "}
//                 <span className="text-red-500">"CHALK20"</span> at checkout. 💥
//               </p>
//             </div>

//             {/* Call to Action */}
//             <a
//               href="/offers"
//               className="bg-red-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-red-500 transition duration-300"
//             >
//               Claim Your Offer Now!
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     )
//   );
// };

// export default FloatingAd;
import React, { useState, useEffect } from "react";
import { X } from "lucide-react"; // For the close button icon
import { motion } from "framer-motion";
import image from "../assets/cityliverpool.png";
import Match from "../components/Match";

const FloatingAd = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsVisible(true);
    }, 6000); // Delay of 6 seconds

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 16000); // 6s delay + 10s visible time

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <motion.div
        className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative bg-gradient-to-r from-black via-gray-800 to-black text-white p-6 rounded-lg shadow-2xl max-w-4xl w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center space-x-4 space-y-4 md:space-y-0">
            {/* Image Section */}
            <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Liverpool vs Manchester City"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-2 uppercase text-yellow-400">
                ⚡ Game Night Special ⚡
              </h3>
              <p className="text-lg sm:text-xl mb-4 font-bold">
                Liverpool vs Manchester City
              </p>
              <p className="text-base sm:text-lg mb-4">
                The ultimate rivalry! Experience the electrifying showdown this{" "}
                <span className="text-red-500 font-bold">
                  Sunday, 1st December
                </span>{" "}
                at <span className="text-yellow-400 font-bold">7:00 PM</span>.
              </p>
              <p className="text-base sm:text-lg mb-6 font-semibold">
                📍 Book now to secure your{" "}
                <span className="text-yellow-400">front-row seat</span> for this
                unforgettable game!
              </p>

              {/* Call to Action */}
              <a
                href="/match"
                className="inline-block bg-red-600 text-white font-bold text-base sm:text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-red-500 transition duration-300"
              >
                Book Your Seat Now!
              </a>

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-transparent text-white hover:text-red-500 p-2 rounded-full"
                onClick={handleClose}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default FloatingAd;
