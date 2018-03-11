console.log("conected");

let state = {
  board: [
    "-", "-", "-",
    "-", "-", "-",
    "-", "-", "-"
  ],
  playerOneNext: true
}

// % 3 for column
const renderBoard = () => {
  $('.board').html('')
  for ( let i in state.board ) {

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

const playMove = function (cell) {
  let marker = ""

  if (state.playerOneNext) {
    marker = "X"
  } else {
    marker = "O";
  }

  state.board[cell] = marker
  renderBoard()
  if (hasGameBeenWon) {
    console.log("winner winner chicken dinner");
  }
  state.playerOneNext = !state.playerOneNext
}

$(document).ready( function () {
  console.log("ready");

})
