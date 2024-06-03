
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {
  Container,
  Form,
  Input,
  Button,
  LinkText,
  TextLogin
} from './Login.styled';
import { useAuth } from 'components/Auth/Auth'

const Login = () => {
  const navigate = useNavigate();

  const {isLoggedIn, isAdmin, login} = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    // Логіка авторизації
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email == 'admin@admin' && password == 'admin') { 
      login('admin');
      navigate('/admin');
    } else {
      login('authKey');
      navigate('/profile'); // Після успішної авторизації перенаправлення на сторінку профілю
    }
  };

  return (
    <Container>
      <TextLogin>Login</TextLogin>
      <Form onSubmit={handleLogin}>
        <label>*Для адмін панелі email: admin@admin пароль: admin</label>
        <Input type="email" placeholder="Email" ref={emailRef} required />
        <Input type="password" placeholder="Пароль" ref={passwordRef} required />
        <Button type="submit">Увійти</Button>
      </Form>
      <LinkText onClick={() => navigate('/register')}>Зареєструватись</LinkText>
    </Container>
  );
};

export default Login;
