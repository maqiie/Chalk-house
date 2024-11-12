import React, { useState } from 'react';
import './Match.css'; // Custom CSS for styling

const Theater = () => {
  const totalSeatsPerSide = 150; // Seats for each side
  const seatPrice = 50; // Price per seat in KSH
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handlePayment = () => {
    alert(`Proceeding to payment for ${selectedSeats.length} seat(s) - Total: ${selectedSeats.length * seatPrice} KSH`);
  };

  return (
    <div className="theater-container">
      <h1>Book Your Seats</h1>
      <div className="screen-container">
        <div className="screen left-screen">Screen 1</div>
        <div className="screen right-screen">Screen 2</div>
      </div>
      <div className="seating-container">
        <div className="seat-grid left-seats">
          {Array.from({ length: totalSeatsPerSide }, (_, index) => {
            const seatNumber = index + 1;
            const isSelected = selectedSeats.includes(seatNumber);
            return (
              <div
                key={seatNumber}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSeatClick(seatNumber)}
                title={`Seat ${seatNumber}`}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
        <div className="center-path"></div>
        <div className="seat-grid right-seats">
          {Array.from({ length: totalSeatsPerSide }, (_, index) => {
            const seatNumber = index + 1 + totalSeatsPerSide;
            const isSelected = selectedSeats.includes(seatNumber);
            return (
              <div
                key={seatNumber}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSeatClick(seatNumber)}
                title={`Seat ${seatNumber}`}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
      </div>
      <div className="selected-info">
        <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
        {selectedSeats.length > 0 && (
          <button className="payment-button" onClick={handlePayment}>
            Pay {selectedSeats.length * seatPrice} KSH
          </button>
        )}
      </div>
    </div>
  );
};

export default Theater;
