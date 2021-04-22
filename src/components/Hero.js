import React from 'react';

import './Hero.css';

function Hero(props) {
  return (
    <div className="Hero">
      <h2 className="Hero__title">{props.title}</h2>
      <h3 className="Hero__subtitle">{props.subtitle}</h3>
      <button className="Hero__cta" onClick={props?.button?.onClick}>
        {props?.button?.text}
      </button>
    </div>
  );
}

export default Hero;
