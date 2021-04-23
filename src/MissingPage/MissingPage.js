import React from 'react';

import useBackground from '../util/change-bg.js';

function MissingPage(props) {
  useBackground('');
  return <h1>404 page not found!</h1>;
}

export default MissingPage;
