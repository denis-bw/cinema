// Banner.jsx
import React from 'react';
import { BannerWrapper, BannerContent, BannerDescription, BannerStarring, BannerShowtimes, TicketButton } from './Banner.styled';

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <h1>Avatar: The Last Airbender</h1>
        <BannerDescription>
          A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.
        </BannerDescription>
        <BannerStarring>
          Starring: Gordon Cormier, Kiawentiio, Ian Ousley
        </BannerStarring>
        <BannerShowtimes>
          Сеанси на сьогодні: 12:00, 14:00, 17:00
        </BannerShowtimes>
        <TicketButton>ПРИДБАТИ КВИТОК</TicketButton>
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
