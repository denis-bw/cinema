// RegisterPage.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #343434;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #EFF40B;
    color: #121212;
  }
`;


export const LinkText = styled.p`
  margin-top: 15px;
  color: #EFF40B;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #ffffff;
  }
`;