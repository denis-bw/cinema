// Location.jsx

import React from 'react';
import { LocationWrapper, LocationTitle, LocationIcon, Address, Map } from './Location.styled';
import { ReactComponent as SvgLocation } from '../../assets/svgLocation.svg';

const Location = () => {
  return (
    <LocationWrapper>
      <LocationTitle>
        <LocationIcon>
          <SvgLocation />
        </LocationIcon>
        Одеса, Говорова 11А
      </LocationTitle>
      <Map>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.083189967199!2d30.746738611769338!3d46.44704866720739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633e9cfdd9343%3A0x8abfe8bba6f670bf!2z0LLRg9C70LjRhtGPINCc0LDRgNGI0LDQu9CwINCT0L7QstC-0YDQvtCy0LAsIDEx0JAsINCe0LTQtdGB0LAsINCe0LTQtdGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1suk!2sua!4v1716656377620!5m2!1suk!2sua"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
              
      </Map>
    </LocationWrapper>
  );
};

export default Location;

