// SessionTimePicker.styled.jsx
import styled from "styled-components";

export const TimeButtonWrapper = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: ${({ active }) => (active ? "#EFF40B" : "#ffffff")};
  color: #121212;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: #EFF40B;
  }
`;

export const TimePickerContainer = styled.div`
    margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 20px;
`;

export const TimePickerTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;
