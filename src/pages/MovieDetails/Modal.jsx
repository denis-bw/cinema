
import React from 'react';
import { ModalContainer, ModalContent, CloseButton, Overlay, Input, Button } from './Modal.styled';

const Modal = ({isOpen, onClose, dataOrder, isRegistered  }) => {
  if (!isOpen) return null;

  console.log(dataOrder)
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={onClose}>×</CloseButton>
          <h2>Замовлення</h2>
          <p>Фільм: avatar</p>
          <p>Дата: {dataOrder.date }</p>
          <p>Час: {dataOrder.dateTime}</p>
          <p>{'Ряд:' + dataOrder.seat?.selectedSeat.rowNumber + ', місце:' + dataOrder.seat?.selectedSeat.seatNumber ?? "0/0"}</p>
          <p>Ціна: {dataOrder.seat.price}</p>
          {!isRegistered && (
            <>
              <Input type="text" placeholder="Ім’я" />
              <Input type="text" placeholder="Контакти" />
            </>
          )}
          <Button onClick={onClose}>Підтвердити</Button>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
