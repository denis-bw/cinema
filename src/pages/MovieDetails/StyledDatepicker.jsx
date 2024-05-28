// src/components/StyledDatepicker.jsx
import React, { useState } from "react";
import { format } from "date-fns";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { CalendarGlobalStyles, TitleWrapper } from "./StyledDatepicker.styled";
import "react-datepicker/dist/react-datepicker.css";

const StyledDatepicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  useEffect(() => {
      const dateNew = new Date(selectedDate).toString()
      setSelectedDate(dateNew);
   }, []);
  
  useEffect(() => {
      const dateNew = new Date(selectedDate).toString()
      setSelectedDate(dateNew);
  }, [selectedDate]);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, "dd-MM-yyyy")}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
