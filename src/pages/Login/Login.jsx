
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Input,
  Button,
  LinkText,
  TextLogin
} from './Login.styled';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Логіка авторизації
    localStorage.setItem('authToken', 'your-auth-token'); // Збереження токену в localStorage
    navigate('/profile'); // Після успішної авторизації перенаправлення на сторінку профілю
  };

  return (
    <Container>
      <TextLogin>Login</TextLogin>
      <Form onSubmit={handleLogin}>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Пароль" required />
        <Button type="submit">Увійти</Button>
      </Form>
      <LinkText onClick={() => navigate('/register')}>Зареєструватись</LinkText>
    </Container>
  );
};

export default Login;
