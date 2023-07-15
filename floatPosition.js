const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {

  let parade = [0, 0];
  let move;

  for (move of moves) {
    if (move == 'north') {
      parade[1] += 1;
    } else if (move == 'east') {
      parade[0] += 1;
    } else if (move == 'south') {
      parade[1] -= 1;
    } else if (move == 'west') {
      parade[0] -= 1;
    }
  }

  return parade;
}



console.log(finalPosition(moves));