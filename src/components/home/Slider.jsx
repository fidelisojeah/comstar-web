import React, { Fragment } from 'react';
import './slider.css';

import Background from './backgrounds/Background';
import Architecture from './backgrounds/Architecture';

import Clouds from './backgrounds/Clouds';

import Birds from './elements/Birds';
import Bird from './elements/Bird';

function Slider() {
  return (
    <Fragment>

      <Background
        width="100%" height="100%"
        className="background-animation clearfix svg-background"
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
    </Fragment>
  );
}
export default Slider;
