import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Input,
  Button,
  LinkText
} from './RegisterPage.styled';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/profile'); // Після успішної реєстрації перенаправлення на сторінку профілю
  };

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Input type="email" placeholder="Email" required />
        <Input type="text" placeholder="Ім’я" required />
        <Input type="password" placeholder="Пароль" required />
        <Button type="submit">Зареєструватись</Button>
      </Form>
      <LinkText onClick={() => navigate('/login')}>Авторизація</LinkText>
    </Container>
  );
};

export default RegisterPage;