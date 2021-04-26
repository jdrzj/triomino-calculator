import React from 'react';
import './App.css';
import Players from './Players';
import PointsTable from './PointsTable';
import { showFigure } from './common';

const INITIAL_STATE = {
  currentPlayerIndex: 0,
  players: [],
  currentMove: { taken: null, figure: null, points: null, player: null },
  moves: []
};
class App extends React.Component {
  constructor(props) {
    super(props);
    if (!!localStorage.getItem('triominoState')) {
      this.state = JSON.parse(localStorage.getItem('triominoState'));
    } else {
      this.state = INITIAL_STATE;
    }
    this.handleNext = this.handleNext.bind(this);
    this.setCurrentMove = this.setCurrentMove.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.setPlayers = this.setPlayers.bind(this);
  }

  setPlayers(players) {
    this.setState(
      {
        players
      },
      () => {
        this.saveStateToLocalStorage();
      }
    );
  }

  resetGame() {
    this.setState(
      (state) => ({
        ...INITIAL_STATE
      }),
      () => {
        this.saveStateToLocalStorage();
      }
    );
  }

  saveStateToLocalStorage() {
    localStorage.setItem('triominoState', JSON.stringify(this.state));
  }

  setCurrentMove(argument) {
    const currentPlayer = this.state.players[this.state.currentPlayerIndex];
    this.setState(
      (state) => ({
        currentMove: {
          ...state.currentMove,
          ...argument,
          player: currentPlayer
        }
      }),
      () => {
        this.saveStateToLocalStorage();
      }
    );
  }

  handleNext() {
    const currentMove = this.state.currentMove;
    if (currentMove.points !== null || currentMove.taken === 3) {
      this.setState(
        (state) => ({
          currentMove: { taken: null, figure: null, points: null },
          moves: [...state.moves, state.currentMove],
          currentPlayerIndex:
            (state.currentPlayerIndex + 1) % state.players.length
        }),
        () => {
          this.saveStateToLocalStorage();
        }
      );
    } else {
      console.log('not allowed move');
    }
  }

  render() {
    const currentPlayer = this.state.players[this.state.currentPlayerIndex];
    const { players, moves, currentMove } = this.state;

    const mainAppView = (
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center">
            <div className="card">
              <div className="card-body">
                <p>
                  Player:&nbsp;
                  <span className="fs-4">{currentPlayer}</span>
                </p>
                <p className="my-2">
                  points:{' '}
                  {currentMove.points === null ||
                  currentMove.points === undefined
                    ? '?'
                    : currentMove.points}
                  , taken: {currentMove.taken || 'none'}, figure:{' '}
                  {showFigure(currentMove.figure) || 'none'}
                </p>
                <div className="row mb-1">
                  <div className="h6 mt-4">taken</div>
                  <div className="col d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-warning btn-action"
                      onClick={() => this.setCurrentMove({ taken: 0 })}
                    >
                      0
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-action"
                      onClick={() => this.setCurrentMove({ taken: 1 })}
                    >
                      -1
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-action"
                      onClick={() => this.setCurrentMove({ taken: 2 })}
                    >
                      -2
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-action"
                      onClick={() => this.setCurrentMove({ taken: 3 })}
                    >
                      -3
                    </button>
                  </div>
                </div>
                <div className="h6 mt-4 mb-2">points</div>
                <div className="row mb-1">
                  <div className="col d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 0 })}
                    >
                      0
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 1 })}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 2 })}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 3 })}
                    >
                      3
                    </button>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 4 })}
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 5 })}
                    >
                      5
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 6 })}
                    >
                      6
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 7 })}
                    >
                      7
                    </button>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 8 })}
                    >
                      8
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 9 })}
                    >
                      9
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 10 })}
                    >
                      10
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 11 })}
                    >
                      11
                    </button>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 12 })}
                    >
                      12
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 13 })}
                    >
                      13
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 14 })}
                    >
                      14
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-action"
                      onClick={() => this.setCurrentMove({ points: 15 })}
                    >
                      15
                    </button>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="h6 mt-4">figures</div>
                  <div className="col d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-info btn-action"
                      onClick={() => this.setCurrentMove({ figure: 'bridge' })}
                    >
                      bridge
                    </button>
                    <button
                      type="button"
                      className="btn btn-info btn-action"
                      onClick={() => this.setCurrentMove({ figure: 'HEX' })}
                    >
                      HEX
                    </button>
                    <button
                      type="button"
                      className="btn btn-info btn-action"
                      onClick={() => this.setCurrentMove({ figure: '2xHEX' })}
                    >
                      2x HEX
                    </button>
                    <button
                      type="button"
                      className="btn btn-info btn-action"
                      onClick={() => this.setCurrentMove({ figure: '3xHEX' })}
                    >
                      3x HEX
                    </button>
                  </div>
                </div>
                <div className="row mb-1 mt-3">
                  <div className="col d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.handleNext}
                    >
                      NEXT
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        this.setCurrentMove({
                          figure: null,
                          points: null,
                          taken: null
                        })
                      }
                    >
                      CLEAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center">
            <PointsTable moves={moves} players={players} />
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => {
                window.confirm('Are you sure? You will permanently remove game data.') && this.resetGame();
              }}
            >
              reset
            </button>
          </div>
        </div>
      </section>
    );

    return (
      <div className="App">
        <div className="container">
          <header className="header">
            <p className="my-3">Triomino Calculator</p>
          </header>
          {players.length === 0 ? (
            <Players handleSubmit={this.setPlayers} />
          ) : (
            mainAppView
          )}
        </div>
      </div>
    );
  }
}

export default App;
