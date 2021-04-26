export const showFigure = (figure) => {
  let result = 'figure: ';
  switch (figure) {
    case 'bridge':
      result = 'bridge (+40)';
      break;
    case 'HEX':
      result = '⬣ (+50)';
      break;
    case '2xHEX':
      result = '⬣⬣ (+60)';
      break;
    case '3xHEX':
      result = '⬣⬣⬣ (+70)';
      break;
    default:
      result = '';
      break;
  }
  return result;
};
