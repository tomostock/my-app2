import React from 'react';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import './css/game.css';
import SBtn from './sound/button.mp3'
import SDrum from './sound/drum.mp3'
import Pb from './img/piece_b.png'
import Pw from './img/piece_w.png'

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={
          this.props.squares[i] ? 
            this.props.squares[i] === 'o' ? <img src={Pb} width="60" alt="black"/> : <img src={Pw} width="60" alt="white"/> 
            : ''
        }
        onClick={() => this.props.onClick(i)}
        isHighlight={ this.props.winLine.includes(i) }
        key={i}
      />
    );
  }

  render() {
    const boardSquares = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    return (
      <div>
        { 
          boardSquares.map((rowSquares, i) => {
            return(
              <div className="board-row" key={i}>
                {
                  rowSquares.map((square) =>{
                    return(this.renderSquare(square))
                  })
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      oIsNext: true,
      prevCount: 1
    };
  }

  handleClick(i) {
    const audio = new Audio(SBtn);
    audio.play();
    alarm();
    
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.oIsNext ? 'o' : 'x';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      oIsNext: !this.state.oIsNext,
      prevCount: this.state.prevCount
    });
  }

  jumpTo(step) {
    document.getElementById("cap").style.display ="none";
    document.getElementById("overlay").style.display ="block";
    this.setState({
      stepNumber: step,
      oIsNext: (step % 2) === 0,
      prevCount: this.state.prevCount + 1
    })
  }

  prev_btn(stepNumber) {
    if( this.state.stepNumber > 0 && this.state.stepNumber < 9 ) {
      return(
        <Button variant="contained" color="primary" onClick={() => this.jumpTo(stepNumber-1)} className="button">
          ◀︎
        </Button>
      );
    } else {
      return(
        <Button variant="contained" color="primary" className="button"　disabled>◀︎</Button>
      );
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? '' : 'reset';
      return(
        <li key={move}>
          { move === 0 ? 
            <Button variant="contained" color="primary" onClick={() => this.jumpTo(move)} className="history">
              { desc }
            </Button> 
            : ""
          }
        </li>
      );
    });
    
    let status;
    let winLine = [];

    if (winner) {
      status = winner.player === 'o' ? 'WINNER:BLACK' : 'WINNER:WHITE';
      winLine = winner.line;
      document.getElementById("overlay").style.display ="none";
      document.getElementById("cap").style.display ="block";
      const audio = new Audio(SDrum);
      audio.play();
    } else {
      status = 'Next: ' + (this.state.oIsNext ? 'BLACK' : 'WHITE');
      if( this.state.stepNumber === 9) {
        status = "Draw";
        winLine = [0,1,2,3,4,5,6,7,8]
        document.getElementById("overlay").style.display ="none";
        document.getElementById("cap").style.display ="block";
      }
    }
    
    return (
      <div className="game">
        <Tittle />
        <div className="game-board">
          <div id="cap" className="game-cap">{status}</div>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winLine={winLine}
          />
        </div>
        <div className="game-info">
          <ol>{this.prev_btn(this.state.stepNumber)}</ol>
          <ol>{moves}</ol>
        </div>

        <div id="overlay">
          <div id="box_wrap">
            <div id="message_box">
              <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Game;

class Tittle extends React.Component {
  render() {
    tittlealarm()
    return (
      <div id="tittle">
        BLACK || WHITE
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function Square(props) {
  return (
    <button 
      className={ props.isHighlight ? "square highlight-color" : "square" }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
function tittlealarm() {
  setTimeout(function() {
    document.getElementById("tittle").style.display ="none";
  }, 5000); 
}
function alarm() {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle('overlay-on');
  setTimeout(function() {
    overlay.classList.toggle('overlay-on');
  }, 1500);
}

