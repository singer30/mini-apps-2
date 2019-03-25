import React from 'react';
import ReactDOM from 'react-dom';
import ScorePad from './components/ScorePad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      round: 1,
      ball: 1, 
      knockDown: 0,
      record: [['',''],['',''],['',''],['',''],['',''],['',''],['',''],['',''],['',''],['','','']],
      score: ['','','','','','','','','','',0],
      end: false
    }
  }

  handleClick(e) {
    let knockDown = Number(e.target.value);
    let round = this.state.round;
    let ball = this.state.ball;
    let record = this.state.record;
    if (round === 10 && ball === 1 && knockDown === 10) {
      record[9][0] = 'X';
      this.setState({
        knockDown: 0,
        ball: 2,
        record: record,
        round: 10
      })
    } else if (round === 10 && ball === 2 && knockDown === 10) {
      record[9][1] = 'X';
      this.setState({
        knockDown: 0,
        ball: 3,
        round: 10
      })
    } else if (round === 10 && ball === 2 && (this.state.knockDown + knockDown) === 10) {
      record[9][0] = this.state.knockDown
      record[9][1] = '/';
      this.setState({
        knockDown: 0,
        ball: 3,
        round: 10
      })
    } else if (round === 10 && ball === 3) {
      if (record[9][1] === 'X' & knockDown === 10){
        record[9][2] = 'X';
      } else {
        record[9][2] = knockDown;
      }
      this.calculateScore(record, round);
      this.setState({
        record: record,
        end: true
      })
    } else if (round === 10 && ball === 2 && record[9][0] === 'X') {
      record[9][1] = knockDown;
      this.setState({
        ball: 3,
        knockDown: knockDown,
        record: record
      })
    } else if (round === 10 && ball === 2 && (this.state.knockDown + knockDown) < 10) {
      record[round - 1] = [this.state.knockDown, knockDown, ''];
      this.calculateScore(record, round);
      this.setState({
        record: record,
        end: true
      })
    } else if (knockDown === 10) {
      record[round -1] = ['-', 'X'];
      this.calculateScore(record, round);
      round++;
      this.setState({
        round: round,
        knockDown: 0,
        ball: 1,
        record: record
      })
    } else if (ball === 2 && (knockDown + this.state.knockDown) === 10) {
      record[round - 1] = [knockDown, '/'];
      this.calculateScore(record, round);
      round++;
      this.setState({
        round: round,
        knockDown: 0,
        ball: 1
      })
    } else if (ball === 2) {
      record[round -1] = [this.state.knockDown, knockDown];
      this.calculateScore(record, round);
      round++;
      this.setState({
        ball: 1,
        knockDown: 0,
        round: round
      })
    } else {
      this.calculateScore(record, round);
      this.setState({
        ball: 2,
        knockDown: knockDown
      })
    }
  }

  newGame() {
    this.setState({
      round: 1,
      ball: 1, 
      knockDown: 0,
      record: [['',''],['',''],['',''],['',''],['',''],['',''],['',''],['',''],['',''],['','','']],
      score: ['','','','','','','','','','',0],
      end: false
    })
  }

  calculateScore(record, round) {
    console.log('calculating...', round, record)
    let score = this.state.score;
    let sum = this.state.score[10];
    if (round < 10) {
      if (round >= 3) {
        if (record[round-3][1] === 'X' && record[round-2][1] === 'X' && record[round-1][1] === 'X') {
          score[round - 3] = score[10] = 30 + sum;
        } else if (record[round-3][1] === 'X' && record[round-2][1] === 'X' && record[round-1][1] !== 'X') {
          score[round - 3] = score[10] = 20 + record[round-1][0] + sum;
        }
      } 
      if (round >= 2) {
        if (record[round-2][1] === 'X' && record[round-1][1] === '/') {
          score[round - 2] = score[10] = 20 + sum;
        } else if (record[round-2][1] === 'X' && typeof record[round-1][1] === 'number') {
          score[round - 2] = score[10] = sum = 10 + record[round - 1][0] + record[round - 1][1] + sum;
          score[round - 1] = score[10] = record[round - 1][0] + record[round - 1][1] + sum;
        } else if (record[round-2][1] === '/' && record[round-1][1] === 'X') {
          score[round - 2] = score[10] = 20 + sum;
        } else if (record[round-2][1] === '/' && typeof record[round-1][0] === 'number') {
          score[round - 2] = score[10] = sum = 10 + record[round-1][0] + sum;
        }
      }
    }
  
    if (round === 10){
      if (record[7][1] === 'X' && record[8][1] === 'X' && record[9][0] === 'X') {
        score[7] = score[10] = sum = sum + 30;
      } else if (record[7][1] === 'X' && record[8][1] === 'X' && typeof record[9][0] === 'number') {
        score[7] = score[10] = sum = sum + 20 + record[9][0];
      } 

      if (record[8][1] === '/' && record[9][1] === 'X') {
        score[8] = score[10] = sum + 20;
      } else if (record[8][1] === '/' && typeof record[9][0] === 'number'){
        score[8] = score[10] = sum + 10 + record[9][0];
      } else if (record[8][1] === 'X' && record[9][1] === 'X'){
        score[8] = score[10] = sum + 30;
      } else if (record[8][1] === 'X' && record[9][1] === '/'){
        score[8] = score[10] = sum + 20;
      } else if (record[8][1] === 'X' && record[9][0] === 'X' && typeof record[9][1] === 'number'){
        score[8] = score[10] = sum + 20 + record[9][1];
      } else if (record[8][1] === 'X' && typeof record[9][0] === 'number' && typeof record[9][1] === 'number'){
        score[8] = score[10] = sum + 10 + record[9][1] + record[9][0];
      } 
    }

    if (round === 10) {
      if (typeof record[9][0] === 'number' && typeof record[9][1] === 'number'){
        console.log('nnn')
        score[9] = score[10] = score[10] + record[9][0] + record[9][1];
      } else if (record[9][1] === '/' && typeof record[9][2] === 'number') {
        console.log('/n')
        score[9] = score[10] = score[10] + 10 + record[9][2];
      } else if (record[9][0] === 'X' && record[9][1] === 'X' && record[9][2] === 'X') {
        console.log('xxx')
        score[9] = score[10] = score[10] + 30;
      } else if (record[9][0] === 'X' && record[9][1] === 'X' && typeof record[9][2] === 'number') {
        console.log('xxn')
        score[9] = score[10] = score[10] + 20 + record[9][2];
      } else if (record[9][0] === 'X' && typeof record[9][1] === 'number' && typeof record[9][2] === 'number') {
        console.log('xnn')
        score[9] = score[10] = score[10] + record[9][1] + record[9][2];
      }
    }

    if (typeof record[round - 1][1] === 'number' && round < 10) {
      score[round - 1] = score[10] = record[round - 1][0] + record[round - 1][1] + sum;
    }
    this.setState({
      score: score
    })
  
  }

  render () {
    return (
    <div>
      <h1>Bowling Score Chart</h1>
      <ScorePad knockDown={this.state.knockDown} handleClick={this.handleClick.bind(this)} 
        end={this.state.end} newGame={this.newGame.bind(this)} />
      <br/>
      <ScoreBoard record={this.state.record} score={this.state.score} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



