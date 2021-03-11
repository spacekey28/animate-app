import React from 'react';
import Anime from 'react-anime';


const AnimeBlock = () => {
  let transition = {
    opacity: [0, 1],
    translateY: ['100vh', 0]
  }

  return (
    <Anime {...transition}>
      <div>Hello World!</div>
    </Anime>
  );
}

export default AnimeBlock;