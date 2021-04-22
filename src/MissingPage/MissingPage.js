import React from 'react';

import Header from '../components/Header.js';

import useBackground from '../util/change-bg.js';

function MissingPage(props) {
  useBackground('');
  return (
    <React.Fragment>
      <Header />
      <h1>404 page not found!</h1>
    </React.Fragment>
  );
}

export default MissingPage;
