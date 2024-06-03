// ProfilePage.jsx
import React from 'react';
import { Container, Grid, Card, CardTitle, CardDetail, TextTitle, LinkText } from './Profile.styled';
import { NavLink, Navigate } from 'react-router-dom';
import { useAuth } from 'components/Auth/Auth'
import { Orders } from 'components/DataBase/DataBase'


const Profile = () => {
  const {isLoggedIn, isAdmin, login, logout} = useAuth();
  if (!isLoggedIn)
    return (<Navigate to="/login"></Navigate>);
  return (
    <Container>
      <div>
        <img src="https://img.icons8.com/bubbles/250/user.png" alt="User Avatar" />
        <TextTitle style={{textAlign: 'center'}}>User User</TextTitle>
        <NavLink to="/">
          <LinkText style={{width: '100%'}} onClick={logout}>Вийти</LinkText>
        </NavLink>
      </div>
      <TextTitle>Моя історія переглядів</TextTitle>
      <Grid>
        {Orders.map((order, index) => (
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
