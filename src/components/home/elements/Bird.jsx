import React from 'react';

function Bird({ birdNumber }) {
  return (
    <div className={`bird-container bird-container--${birdNumber}`}>
      <div className={`bird bird--${birdNumber}`} />
    </div>
  );
}
export default Bird;
