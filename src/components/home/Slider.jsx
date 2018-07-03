import React from 'react';
import './slider.css';

import Background from './Background';
import Architecture from './Architecture';

import NonMovedClouds from './NonMovedClouds';
import Clouds from './Clouds';

import Birds from './elements/Birds';
import Bird from './elements/Bird';

function Slider(props) {
  return (
    <section className="home-slider">
      <Background
        width="100%" height="100%"
        className="background-animation clearfix svg-background"
      />
      <NonMovedClouds
        width="100%" height="100%"
        className="clouds svg-background"
      />
      <div className="sun clearfix" />
      <Birds />
      <Clouds
        width="100%" height="100%"
        className="clouds svg-background"
      />
      <Bird
        birdNumber="five"
      />
      <Architecture
        className="background-architecture svg-background"
      />
      <Bird
        birdNumber="three"
      />
    </section>
  );
}
export default Slider;
