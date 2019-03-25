import React from 'react';

const ScoreBtn = ({number, handleClick}) => {
  return(
    <button value={number} onClick={handleClick}>{number}</button>
  )
}

export default ScoreBtn;
