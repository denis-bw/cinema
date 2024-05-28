// OrderButtonSection.jsx
import React, { useState } from 'react';
import { Section, OrderButton } from './OrderButtonSection.styled';
import Modal from './Modal';

const OrderButtonSection = ({dataOrder}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  console.log(dataOrder)
  const isRegistered = !!localStorage.getItem('authToken'); // Перевірка, чи користувач зареєстрований

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section>
      <OrderButton onClick={handleOrderClick}>ЗАМОВИТИ</OrderButton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} dataOrder={dataOrder} isRegistered={isRegistered} />
    </Section>
  );
};

export default OrderButtonSection;
