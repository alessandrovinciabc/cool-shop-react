import React from 'react';

import Hero from '../components/Hero.js';
import Header from '../components/Header.js';
import useBackground from '../util/change-bg.js';

function Home(props) {
  useBackground('./assets/images/home-bg.jpg');
  return (
    <React.Fragment>
      <Header />
      <Hero
        title="Your new tech"
        subtitle="One click away"
        button={{ text: 'Shop now' }}
      />
    </React.Fragment>
  );
}

export default Home;
