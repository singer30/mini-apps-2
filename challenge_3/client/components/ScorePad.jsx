import React from 'react';
import ScoreBtn from './ScoreBtn.jsx'

const ScorePad = ({knockDown, handleClick, end, newGame}) => {
  let btn = [];
  for (let i = 0; i <= 10 - knockDown; i++){
    btn.push(i);
  }
  if (!end){
    return (
      <div>
        <h3>Click Number of Pins Knocked Down</h3>
        <div id='btnGroup'>
          {btn.map((num) => <ScoreBtn number={num} handleClick={handleClick} />)}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <button id='newBtn' onClick={newGame}>New Game</button>
      </div>
    )
  }
}

export default ScorePad;
