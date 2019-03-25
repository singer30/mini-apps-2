import React from 'react';

const ScoreBoard = ({record, score}) => {
  return (
    <div>
      <h3>ScoreBoard</h3>
      <br/>
      <table>
        <tr>
          <th colSpan="2">1</th>
          <th colSpan="2">2</th>
          <th colSpan="2">3</th>
          <th colSpan="2">4</th>
          <th colSpan="2">5</th>
          <th colSpan="2">6</th>
          <th colSpan="2">7</th>
          <th colSpan="2">8</th>
          <th colSpan="2">9</th>
          <th colSpan="3">10</th>
          <th >Score</th>
        </tr>
        <tr>

          <td>{record[0][0]}</td>
          <td>{record[0][1]}</td>
          <td>{record[1][0]}</td>
          <td>{record[1][1]}</td>
          <td>{record[2][0]}</td>
          <td>{record[2][1]}</td>
          <td>{record[3][0]}</td>
          <td>{record[3][1]}</td>
          <td>{record[4][0]}</td>
          <td>{record[4][1]}</td>
          <td>{record[5][0]}</td>
          <td>{record[5][1]}</td>
          <td>{record[6][0]}</td>
          <td>{record[6][1]}</td>
          <td>{record[7][0]}</td>
          <td>{record[7][1]}</td>
          <td>{record[8][0]}</td>
          <td>{record[8][1]}</td>
          <td>{record[9][0]}</td>
          <td>{record[9][1]}</td>
          <td>{record[9][2]}</td>
          <td rowSpan="2">{score[10]}</td>
    
        </tr>
        <tr>
          <td colSpan="2">{score[0]}</td>
          <td colSpan="2">{score[1]}</td>
          <td colSpan="2">{score[2]}</td>
          <td colSpan="2">{score[3]}</td>
          <td colSpan="2">{score[4]}</td>
          <td colSpan="2">{score[5]}</td>
          <td colSpan="2">{score[6]}</td>
          <td colSpan="2">{score[7]}</td>
          <td colSpan="2">{score[8]}</td>
          <td colSpan="3">{score[9]}</td>
        </tr>
  
     
      </table>
    </div>
  )
}

export default ScoreBoard;
