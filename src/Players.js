import React, { useState } from 'react';

const Players = ({ handleSubmit }) => {
  const [players, setPlayers] = useState([null, null]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 align-self-center">
        <form>
          <div className="row">
            <div className="col">
              <div className="mb-2">
                <label htmlFor="players" className="form-label me-4">
                  Players ({players.length})
                </label>
                <button
                  type="button"
                  className="btn btn-primary btn-sm me-1"
                  onClick={() => {
                    let newPlayers = players;
                    setPlayers([...newPlayers, null]);
                  }}
                >
                  Add player
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={() => {
                    if (players.every((player) => player !== null)) {
                      handleSubmit(players);
                    } else {
                      alert('Some players are empty');
                    }
                  }}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
          {players.map((player, i) => {
            return (
              <div className="row" key={i}>
                <div className="col mb-2">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id={'players[' + i + ']'}
                      placeholder={`player #${i + 1} name`}
                      value={player || ''}
                      onChange={(e) => {
                        let newPlayers = players;
                        newPlayers[i] = e.target.value;
                        setPlayers([...newPlayers]);
                      }}
                    />
                    <button className="btn btn-outline-secondary" type="button" onClick={() => {
                      let newPlayers = players;
                      newPlayers.splice(i, 1);
                      console.log({ players, newPlayers });
                      setPlayers([...newPlayers]);
                    }}>
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default Players;
