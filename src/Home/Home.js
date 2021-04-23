import React from 'react';

import Hero from '../components/Hero.js';
import useBackground from '../util/change-bg.js';

function Home(props) {
  useBackground(`${process.env.PUBLIC_URL}/assets/images/home-bg.jpg`);
  return (
    <Hero
      title="Your new tech"
      subtitle="One click away"
      button={{ text: 'Shop now' }}
    />
  );
}

export default Home;
