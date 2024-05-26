// SessionTimePicker.jsx
import React, { useState } from "react";
import { useEffect } from "react";
import {
  TimeButtonWrapper,
  TimePickerContainer,
  TimePickerTitle,
} from "./SessionTimePicker.styled";

const times = ["10:00", "12:00", "14:00", "17:00"];

const SessionTimePicker = ({onDateTimeChange}) => {
  const [activeTime, setActiveTime] = useState(times[0]);
  
  const handleTimeClick = (time) => {
    setActiveTime(time);
  };

  useEffect(() => {
      onDateTimeChange(activeTime);
  }, [activeTime]);

  return (
    <TimePickerContainer>
      <TimePickerTitle>Оберіть час:</TimePickerTitle>
      <div className="time-buttons">
        {times.map((time, index) => (
          <TimeButtonWrapper
            key={index}
            active={time === activeTime}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </TimeButtonWrapper>
        ))}
      </div>
    </TimePickerContainer>
  );
};

export default SessionTimePicker;
