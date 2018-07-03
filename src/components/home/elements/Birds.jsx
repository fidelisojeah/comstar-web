import React from 'react';

import './bird.css'
import Bird from './Bird';

function Birds(props) {
  return (<div className="all-birds-container container">
    <Bird
      birdNumber="two"
    />
    <Bird
      birdNumber="one"
    />
  </div>);
}
export default Birds;
