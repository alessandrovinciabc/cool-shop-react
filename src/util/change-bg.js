import { useEffect } from 'react';

function useBackground(bgString) {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgString})`;
  });
}

export default useBackground;
