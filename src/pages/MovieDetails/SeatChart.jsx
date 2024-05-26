import React, { useState } from 'react';
import { SeatChartContainer, Row, Seat, TitleSeat } from './SeatChart.styled';

const SeatChart = () => {
    const [selectedSeat, setSelectedSeat] = useState(null);
    console.log(selectedSeat)
  const [seatData, setSeatData] = useState({
    1: [
      { number: 1, available: true },
      { number: 2, available: true },
      { number: 3, available: true },
      { number: 4, available: true },
      { number: 5, available: false },
      { number: 6, available: false },
      { number: 7, available: false },
      { number: 8, available: false },
    ],
    2: [
      { number: 1, available: true },
      { number: 2, available: true },
      { number: 3, available: true },
      { number: 4, available: false },
      { number: 5, available: false },
      { number: 6, available: false },
      { number: 7, available: false },
      { number: 8, available: false },
    ],
    3: [
      { number: 1, available: false },
      { number: 2, available: false },
      { number: 3, available: true },
      { number: 4, available: true },
      { number: 5, available: true },
      { number: 6, available: false },
      { number: 7, available: false },
      { number: 8, available: false },
    ],
    4: [
      { number: 1, available: false },
      { number: 2, available: false },
      { number: 3, available: false },
      { number: 4, available: false },
      { number: 5, available: false },
      { number: 6, available: true },
      { number: 7, available: true },
      { number: 8, available: true },
    ],
    5: [
      { number: 1, available: true },
      { number: 2, available: true },
      { number: 3, available: true },
      { number: 4, available: true },
      { number: 5, available: true },
      { number: 6, available: true },
      { number: 7, available: true },
      { number: 8, available: true },
      ],
        6: [
      { number: 1, available: true },
      { number: 2, available: true },
      { number: 3, available: true },
      { number: 4, available: true },
      { number: 5, available: true },
      { number: 6, available: true },
    ],
  });

  const handleSeatClick = (rowNumber, seatNumber) => {
    const seat = seatData[rowNumber].find(seat => seat.number === seatNumber);
    if (seat.available) {
      setSelectedSeat({ rowNumber, seatNumber });
    } else {
      setSelectedSeat(null);
    }
  };

    return (
    <>
    <TitleSeat>Екран</TitleSeat>
            
    <SeatChartContainer>
      {Object.entries(seatData).map(([rowNumber, seats]) => (
        <Row key={rowNumber}>
          {seats.map(seat => (
            <Seat
              key={`${rowNumber}-${seat.number}`}
              isAvailable={seat.available}
              isSelected={
                selectedSeat !== null &&
                selectedSeat.rowNumber === parseInt(rowNumber) &&
                selectedSeat.seatNumber === seat.number
              }
              onClick={() => handleSeatClick(parseInt(rowNumber), seat.number)}
            />
          ))}
        </Row>
      ))}
    </SeatChartContainer>
    </>
  );
};

export default SeatChart;