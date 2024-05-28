// ProfilePage.jsx
import React from 'react';
import { Container, Grid, Card, CardTitle, CardDetail,TextTitle  } from './Profile.styled';

const orders = [
  { film: 'Avatar', date: '2024-05-30', time: '14:00', seat: 'A1', price: '$10' },
  { film: 'Inception', date: '2024-06-01', time: '18:00', seat: 'B2', price: '$12' },
  { film: 'Titanic', date: '2024-06-03', time: '20:00', seat: 'C3', price: '$15' },
  { film: 'The Matrix', date: '2024-06-05', time: '22:00', seat: 'D4', price: '$20' },
  // Додайте більше замовлень за потреби
];

const Profile = () => {
  return (
    <Container>
      <TextTitle>Мої замовлення</TextTitle>
      <Grid>
        {orders.map((order, index) => (
          <Card key={index}>
            <CardTitle>Фільм: {order.film}</CardTitle>
            <CardDetail>Дата: {order.date}</CardDetail>
            <CardDetail>Час: {order.time}</CardDetail>
            <CardDetail>Місце: {order.seat}</CardDetail>
            <CardDetail>Ціна: {order.price}</CardDetail>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Profile;
