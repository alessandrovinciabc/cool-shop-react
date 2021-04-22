import React from 'react';

import Header from '../components/Header.js';
import useBackground from '../util/change-bg.js';

function Home(props) {
  useBackground('./assets/images/home-bg.jpg');
  return (
    <React.Fragment>
      <Header />
      <h1>Home</h1>
    </React.Fragment>
  );
}

export default Home;
