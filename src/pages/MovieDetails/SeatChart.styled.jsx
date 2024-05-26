// SeatChart.styled.js
import styled from 'styled-components';

export const SeatChartContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Seat = styled.div`
    width: 20px;
    height: 20px;
  border-radius: 4px;
  background-color: ${props => {
    if (props.isAvailable && !props.isSelected) return '#6EE37A';
    if (props.isSelected) return '#EFF40B;';
    return '#D9D9D9';
  }};
  cursor: ${props => (props.isAvailable ? 'pointer' : 'not-allowed')};
  opacity: ${props => (props.isAvailable ? 1 : 0.5)};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${props => (props.isAvailable ? 'black' : 'white')};

    @media (min-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;