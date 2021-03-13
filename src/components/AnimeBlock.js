import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimeBlock = () => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });
  const fadein = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <div onClick={() => toggle(!state)}>
      <animated.h1
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}>
        Hello World!
      </animated.h1>
      <animated.h3 style={fadein}>This is Peter</animated.h3>
    </div>
  );
}

export default AnimeBlock;