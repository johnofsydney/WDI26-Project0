console.log("conected");

let state = {
  board: [
    "-", "-", "-",
    "-", "-", "-",
    "-", "-", "-"
  ],
  nextTurn: 1
}

// % 3 for column
const renderBoard = () => {
  for ( let i in state.board ) {
    console.log(i);
    let column = (i % 3) + 1;
    column = "column-" + column
    let row = (Math.floor( i / 3 )) + 1;
    row = "row-" + row
    cell = "cell-" + i
    let contents = state.board[i]


    $('.board').append(`<div id=${cell} class="square ${row} ${column}">${contents}</div>`)
  }
}

const hasGameBeenWon = function () {
  let board = state.board
  return (
    (board[0] === board[1]) && (board[1] === board[2]) && (board[0] !== "-" ) ||
    (board[3] === board[4]) && (board[4] === board[5]) && (board[3] !== "-" ) ||
    (board[6] === board[7]) && (board[7] === board[8]) && (board[6] !== "-" )
  )
}

$(document).ready( function () {
  console.log("ready");

})
