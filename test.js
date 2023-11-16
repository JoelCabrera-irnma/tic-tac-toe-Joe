function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];
    const getBoard = () => board;
    
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(0)
      }
    }

    return { getBoard};
}  

function GameController(){
    const board = Gameboard();
return {
    getBoard: board.getBoard
  };
}

function ScreenController() {
const game = GameController();
const boardDiv = document.querySelector('.displayBoard');

console.log(game.getBoard())

const updateScreen = () => {
    const board = game.getBoard();
    console.log(board.getBoard)

board.forEach((row, indexR) => {
    row.forEach((cell, indexC) => {
      // Anything clickable should be a button!!
      const cellButton = document.createElement("button");
      cellButton.classList.add("square");
      // Create a data attribute to identify the column
      // This makes it easier to pass into our `playRound` function 
      cellButton.dataset.row = indexR
      cellButton.dataset.column = indexC
      //cellButton.textContent = cell.getValue();
      boardDiv.appendChild(cellButton);
    })
})
}
updateScreen()
}