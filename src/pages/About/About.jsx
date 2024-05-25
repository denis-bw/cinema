import React from 'react';
import {
  AdvantagesWrapper,
  AdvantagesTitle,
  AdvantagesContent,
  CardWrapper,
  CardDescription,
  Logo,
} from './About.styled';
import Location from './Location';


import { ReactComponent as SvgEmail } from '../../assets/AboutSVG/svgEmail.svg';
import { ReactComponent as SvgGlas } from '../../assets/AboutSVG/svgGlas.svg';
import { ReactComponent as SvgInstagram } from '../../assets/AboutSVG/svgInstagram.svg';
import { ReactComponent as SvgPhone } from '../../assets/AboutSVG/svgPhone.svg';
import { ReactComponent as SvgWord } from '../../assets/AboutSVG/svgWord.svg';
import { ReactComponent as SvgS } from '../../assets/AboutSVG/svgS.svg';

const movies = [
  {
    id: 1,
    image: SvgGlas,
    description: 'Сеанс з залученням технологій об’ємного зображення для прихильників видовищних спец ефектів',
  },
  {
    id: 2,
    image: SvgS,
    description: 'Сеанс на кріслах-реклайнерах, що забезпечують підвищений комфорт перегляду, для гурманів кіно',
  },
  {
    id: 3,
    image: SvgWord,
    description: 'Сеанс з українськими субтитрами',
  },
  {
    id: 4,
    image: SvgPhone,
    description: '+380123456789, +380987654321',
  },
  {
    id: 5,
    image: SvgEmail,
    description: 'dontwritetome@gmail.com',
  },
  {
    id: 6,
    image: SvgInstagram,
    description: '@Cinema',
  },
];

const About = () => {
  return (
    <>
      <AdvantagesTitle>Наші переваги</AdvantagesTitle>
      <AdvantagesWrapper>
        <AdvantagesContent>
          {movies.map(movie => (
            <CardWrapper key={movie.id}>
              <Logo>
                <movie.image />
              </Logo>
              <CardDescription>{movie.description}</CardDescription>
            </CardWrapper>
          ))}
        </AdvantagesContent>
      </AdvantagesWrapper>
      <Location/>
    </>
  );
};

export default About;