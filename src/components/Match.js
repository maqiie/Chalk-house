// "use client";

// import React, { useState } from "react";
// import { ChevronRight, X } from "lucide-react";

// export default function Component() {
//   const totalRows = 10;
//   const seatsPerRow = 15;
//   const totalSeats = totalRows * seatsPerRow * 2;
//   const seatPrice = 50; // Price per seat in KSH
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatId) => {
//     setSelectedSeats((prev) =>
//       prev.includes(seatId)
//         ? prev.filter((seat) => seat !== seatId)
//         : [...prev, seatId]
//     );
//   };

//   const handlePayment = () => {
//     alert(
//       `Proceeding to payment for ${selectedSeats.length} seat(s) - Total: ${
//         selectedSeats.length * seatPrice
//       } KSH`
//     );
//   };

//   const renderSeat = (sideIndex, rowIndex, seatIndex) => {
//     const seatNumber =
//       sideIndex * (totalRows * seatsPerRow) +
//       rowIndex * seatsPerRow +
//       seatIndex +
//       1;
//     const seatId = `S${sideIndex + 1}-R${rowIndex + 1}-${seatIndex + 1}`;
//     const isSelected = selectedSeats.includes(seatId);

//     return (
//       <button
//         key={seatId}
//         className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-xs transition-all duration-300 ${
//           isSelected
//             ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-110"
//             : "bg-secondary hover:bg-primary/20 text-secondary-foreground"
//         }`}
//         onClick={() => handleSeatClick(seatId)}
//         title={`Seat ${seatNumber}`}
//       >
//         <span className="sr-only">
//           {isSelected ? "Deselect" : "Select"} seat {seatNumber}
//         </span>
//         {isSelected ? <X size={14} /> : seatNumber}
//       </button>
//     );
//   };

//   const renderScreen = (index) => (
//     <div className="w-full max-w-[200px] mx-auto mb-8">
//       <div className="h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full shadow-lg shadow-primary/30"></div>
//       <div className="text-center text-xs mt-2 text-muted-foreground">
//         Screen {index}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-sans">
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
//         Santiago Bernabéu
//       </h1>

//       <div className="flex justify-center mb-12 overflow-x-auto">
//         <div className="relative bg-card p-8 rounded-xl shadow-xl">
//           <div className="flex space-x-8">
//             {[0, 1].map((sideIndex) => (
//               <div
//                 key={`side-${sideIndex}`}
//                 className="flex flex-col items-center"
//               >
//                 {renderScreen(sideIndex + 1)}
//                 <div className="flex flex-col space-y-2">
//                   {Array.from({ length: totalRows }).map((_, rowIndex) => (
//                     <div key={`row-${rowIndex}`} className="flex space-x-1">
//                       {Array.from({ length: seatsPerRow }).map((_, seatIndex) =>
//                         renderSeat(sideIndex, rowIndex, seatIndex)
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-6 bg-muted/30 rounded-full">
//             <div className="h-full flex items-center justify-center text-xs text-muted-foreground [writing-mode:vertical-rl] rotate-180">
//               Center Aisle
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 text-center max-w-2xl mx-auto">
//         <div className="bg-card p-6 rounded-lg mb-6 flex flex-col sm:flex-row items-center justify-between shadow-lg">
//           <span className="mb-4 sm:mb-0 text-lg">
//             Selected Seats:{" "}
//             <span className="font-semibold">
//               {selectedSeats.length || "None"}
//             </span>
//           </span>
//           <span className="text-2xl font-bold text-primary">
//             Total: {selectedSeats.length * seatPrice} KSH
//           </span>
//         </div>
//         {selectedSeats.length > 0 && (
//           <button
//             className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center w-full shadow-lg"
//             onClick={handlePayment}
//           >
//             Proceed to Payment
//             <ChevronRight className="ml-2" size={24} />
//           </button>
//         )}
//       </div>

//       <div className="mt-12 text-center text-sm text-muted-foreground">
//         <p className="mb-4">Click on a seat to select/deselect</p>
//         <div className="flex justify-center items-center space-x-8">
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-secondary rounded-md mr-2"></div>
//             Available
//           </div>
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-primary rounded-md mr-2"></div>
//             Selected
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'

import React, { useState } from 'react'
import { ChevronRight, X } from 'lucide-react'

export default function Component() {
  const totalRows = 10
  const seatsPerRow = 15
  const totalSeats = totalRows * seatsPerRow * 2
  const seatPrice = 50 // Price per seat in KSH
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedMatch, setSelectedMatch] = useState(null)

  const matches = [
    { id: 1, name: 'Champions League: Real Madrid vs. PSG', date: '12 Nov 2024' },
    { id: 2, name: 'Premier League: Real Madrid vs. Barcelona', date: '20 Nov 2024' },
  ]

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((seat) => seat !== seatId) : [...prev, seatId]
    )
  }

  const handlePayment = () => {
    if (selectedMatch) {
      alert(`Proceeding to payment for ${selectedSeats.length} seat(s) - Total: ${selectedSeats.length * seatPrice} KSH`)
    } else {
      alert('Please select a match first.')
    }
  }

  const renderSeat = (sideIndex, rowIndex, seatIndex) => {
    const seatNumber = sideIndex * (totalRows * seatsPerRow) + rowIndex * seatsPerRow + seatIndex + 1
    const seatId = `S${sideIndex + 1}-R${rowIndex + 1}-${seatIndex + 1}`
    const isSelected = selectedSeats.includes(seatId)

    return (
      <button
        key={seatId}
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-xs font-medium transition-all duration-300 ${
          isSelected
            ? 'bg-red-600 text-white shadow-lg shadow-red-400 scale-110'
            : 'bg-white hover:bg-red-200 text-black border border-gray-400'
        }`}
        onClick={() => handleSeatClick(seatId)}
        title={`Seat ${seatNumber}`}
      >
        <span className="sr-only">{isSelected ? 'Deselect' : 'Select'} seat {seatNumber}</span>
        {isSelected ? <X size={14} /> : seatNumber}
      </button>
    )
  }

  const renderScreen = (index) => (
    <div className="w-full max-w-[200px] mx-auto mb-6">
      <div className="h-2 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-500 rounded-full shadow-lg"></div>
      <div className="text-center text-xs mt-2 text-gray-600">Screen {index}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 p-4 md:p-8 font-sans">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-8">Santiago Bernabéu Stadium</h1>

      {/* Match Selection */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Upcoming Matches</h2>
        <div className="space-y-4">
          {matches.map((match) => (
            <button
              key={match.id}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                selectedMatch === match.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-200 hover:bg-red-300 text-black'
              }`}
              onClick={() => setSelectedMatch(match.id)}
            >
              <div className="font-semibold">{match.name}</div>
              <div className="text-sm text-gray-500">{match.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Seat Selection */}
      <div className="flex justify-center mb-12 overflow-x-auto">
        <div className="relative bg-white p-8 rounded-xl shadow-xl">
          <div className="flex space-x-8">
            {[0, 1].map((sideIndex) => (
              <div key={`side-${sideIndex}`} className="flex flex-col items-center">
                {renderScreen(sideIndex + 1)}
                <div className="flex flex-col space-y-2">
                  {Array.from({ length: totalRows }).map((_, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="flex space-x-1">
                      {Array.from({ length: seatsPerRow }).map((_, seatIndex) =>
                        renderSeat(sideIndex, rowIndex, seatIndex)
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-6 bg-gray-300 rounded-full">
            <div className="h-full flex items-center justify-center text-xs text-gray-500 [writing-mode:vertical-rl] rotate-180">
              Center Aisle
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg mb-6 flex flex-col sm:flex-row items-center justify-between shadow-lg">
          <span className="mb-4 sm:mb-0 text-lg">
            Selected Seats: <span className="font-semibold">{selectedSeats.length || 'None'}</span>
          </span>
          <span className="text-2xl font-bold text-red-600">Total: {selectedSeats.length * seatPrice} KSH</span>
        </div>
        {selectedSeats.length > 0 && (
          <button
            className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-red-500 transition-colors duration-300 flex items-center justify-center w-full shadow-lg"
            onClick={handlePayment}
          >
            Proceed to Payment
            <ChevronRight className="ml-2" size={24} />
          </button>
        )}
      </div>

      {/* Legend */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p className="mb-4">Click on a seat to select/deselect</p>
        <div className="flex justify-center items-center space-x-8">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-white border border-gray-400 rounded-md mr-2"></div>
            Available
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-600 rounded-md mr-2"></div>
            Selected
          </div>
        </div>
      </div>
    </div>
  )
}
