import { showFigure } from './common';

const PointsTable = ({ moves, players }) => {
  const takenPoints = (taken) => {
    switch (taken) {
      case 1:
        return -5;
      case 2:
        return -10;
      case 3:
        return -15;
      default:
        return 0;
    }
  };

  const figurePoints = (figure) => {
    switch (figure) {
      case 'bridge':
        return 40;
      case 'HEX':
        return 50;
      case '2xHEX':
        return 60;
      case '3xHEX':
        return 70;
      default:
        return 0;
    }
  };

  let tableBody = [];
  for (let index = 0; index < moves.length; index += players.length) {
    tableBody.push(
      <tr key={index}>
        {Array.from(Array(players.length).keys()).map((offset) => (
          <td key={`${offset},${index}`}>
            {typeof moves[index + offset]?.points === 'number'
              ? moves[index + offset]?.points
              : '0'}
            {!!moves[index + offset]?.figure
              ? `, ${showFigure(moves[index + offset]?.figure)}`
              : ''}
            {!!moves[index + offset]?.taken
              ? `, taken: ${moves[index + offset]?.taken} (${
                  moves[index + offset]?.points === null
                    ? -25
                    : moves[index + offset]?.taken * -5
                })`
              : ''}
          </td>
        ))}
      </tr>
    );
  }
  let tableHead = (
    <tr>
      {players.map((player) => (
        <th key={player} style={{ width: 100.0 / players.length + '%' }}>
          {player}
        </th>
      ))}
    </tr>
  );

  let movesByPlayers = {};
  players.forEach((player) => {
    movesByPlayers[player] = moves.filter((move) => move['player'] === player);
  });

  let tableFoot = (
    <tr>
      {Object.keys(movesByPlayers).map((player) => (
        <td key={player}>
          {movesByPlayers[player].reduce((acc, move) => {
            let points =
              move.points === null
                ? -25
                : move.points +
                  figurePoints(move?.figure) +
                  takenPoints(move?.taken);
            return acc + points;
          }, 0)}
        </td>
      ))}
    </tr>
  );

  return (
    <table className="table">
      <thead>{tableHead}</thead>
      <tbody>{tableBody}</tbody>
      <tfoot>{tableFoot}</tfoot>
    </table>
  );
};

export default PointsTable;
