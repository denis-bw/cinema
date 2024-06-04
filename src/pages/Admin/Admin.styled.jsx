import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:white;
  padding: 20px;
`;
export const Image = styled.img`
  margin: 0 auto;
  min-width: 150px;
  height: auto;
  padding-bottom: 10px;
  border-radius: 20px;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  max-width: 95%;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
  }
`;

export const Card = styled.div`
  background: #2d2d2d;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const CardTitle = styled.h3`
  margin: 10px;
  font-size: 20px;
  color: #EFF40B;
`;

export const HR = styled.hr`
  margin: 15px;
  border: 1px solid #989898;
`
 
export const CardDetail = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #fff;
`;

export const TextTitle = styled.h1`
  color: white;
`

export const LinkText = styled.a`
  color: white;
  padding: 5px;
  width: 11em;
  align-items: center;
  text-align: center;
  font-size: 18px;
  border: 1px solid #989898;
  border-radius: 20px;

  &:hover {
    border-color: #EFF40B;
    color: #EFF40B;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  margin: 3px;
  padding: 5px;
  border: 1px solid #989898;
  border-radius: 20px;
  background: none;
  color: white;
  &.active {
    border-color: #EFF40B;
    color: #EFF40B;
  }
  &:hover {
    border-color: #EFF40B;
    color: #EFF40B;
  }
`
export const Label = styled.label`
  font-size: 16px;
`
export const Input = styled.input`
  background: #0F1014;
  color: white;
  padding: 5px;
  border: 1px solid #989898;
  border-radius: 5px;
  width: 100%;
`
export const Textarea = styled.textarea`
  background: #0F1014;
  color: white;
  padding: 5px;
  border: 1px solid #989898;
  border-radius: 5px;
  width: 100%;
  height: 12rem;
`