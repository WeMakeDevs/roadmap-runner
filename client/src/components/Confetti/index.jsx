import React from 'react';
import Confetti from 'react-confetti';

const index = () => {
  return (
    <Confetti
            width={window.innerWidth - 100}
            height={window.innerHeight}
            recycle={false}
    />
  )
}

export default index