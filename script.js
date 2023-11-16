
function gameboard (){
    const tablero = []
    const row = 3
    const column = 3

    for (let i = 0; i < row ; i++) {
        tablero[i] = [];
        for (let j = 0; j<column; j++){
            tablero[i].push(celda())
        }
    }
    console.log(tablero)

    const getTablero = ()=>tablero

    const printTablero = () =>{
        const mapTablero = tablero.map((row)=>row.map((celda)=>celda.getValue()))
        //console.log(mapTablero)
    }

    const addValor = (valor, row, column)=>{
        if(tablero[row][column].getValue() === 0) {
            tablero[row][column].addValue(valor)
            }
        else{return}
        printTablero()
    }

    printTablero()

    return { printTablero , addValor, tablero, getTablero}
}

function celda (){
    let value = 0

    const getValue = ()=> value;

    const addValue = (newValor)=>{value = newValor;}
    
    return {  getValue, addValue}
}

let winner = null

function gameControl (){
    const tablero = gameboard();

    const players =[
        {
        name: 'One',
        value: 'X'
        },
        {
        name: 'Two',
        value: 'O'
        }
    ]

    let activePlayer = players[0]
    
    const curentPlayer = ()=> activePlayer;
        
    const switchPlayer = ()=>{
        activePlayer===players[0] ? activePlayer=players[1] : activePlayer=players[0]
    }
    const showTurnPlayer = ()=>console.log(`TURNO de ${curentPlayer().name}`)

    
    const roundGame = (row, column)=>{
        tablero.addValor(curentPlayer().value, row, column)
        
        function checkWinner(player) {
            // Verificar filas y columnas
            for (let i = 0; i < 3; i++) {
                if ((tablero.tablero[i][0].getValue() === player &&
                    tablero.tablero[i][1].getValue() === player &&
                    tablero.tablero[i][2].getValue() === player) ||
                    (tablero.tablero[0][i].getValue() === player &&
                    tablero.tablero[1][i].getValue() === player &&
                    tablero.tablero[2][i].getValue() === player)) {
                    console.log(`WINNER JUGAGOR ${curentPlayer().name}`);
                    return true;
                }
            }
        
            // Verificar diagonales
            if ((tablero.tablero[0][0].getValue() === player &&
                tablero.tablero[1][1].getValue() === player &&
                tablero.tablero[2][2].getValue() === player) ||
                (tablero.tablero[0][2].getValue() === player &&
                tablero.tablero[1][1].getValue() === player &&
                tablero.tablero[2][0].getValue() === player)) {
                console.log(`WINNER JUGAGOR ${curentPlayer().name}`);
                return true;
            }
        
            return false;
        }

        checkWinner(curentPlayer().value)
        
        const todasCeldasOcupadas = tablero.tablero.every(row =>
            row.every(celda => celda.getValue() !== 0)
        );
        
        if (todasCeldasOcupadas && !checkWinner('X') && !checkWinner('O')) {
            winner = '¡Empate!';
        } else if (checkWinner('X')) {
            winner = 'Ganador Jugador Uno';
        } else if (checkWinner('O')) {
            winner = 'Ganador Jugador Dos';
        }
        
        switchPlayer();
        showTurnPlayer()
    }
    const getWinner = ()=>winner
    showTurnPlayer();

    //return {printTablero: tablero.printTablero, roundGame}
return Object.assign({},{roundGame},{tablero: tablero.getTablero},{curentPlayer},{getWinner})
}

function displayGame (){
    const game = gameControl()
    const displayTurno = document.querySelector('.displayTurno');
    const displayBoard = document.querySelector('.displayBoard');
    const displayWin = document.querySelector('.displayWin');

    const updateScreen = () => {
        const board = game.tablero()
        displayBoard.innerHTML = "";
        board.textContent = ""

        board.forEach((row, indexR) => {
        row.forEach((cell, indexC) => {
          // Anything clickable should be a button!!
          const cellButton = document.createElement("button");
          cellButton.classList.add("square");
          // Create a data attribute to identify the column
          // This makes it easier to pass into our `playRound` function 
          cellButton.dataset.row = indexR
          cellButton.dataset.column = indexC
          cellButton.textContent = cell.getValue()===0 ?"":cell.getValue();
          displayBoard.appendChild(cellButton);
            })
        })
        displayTurno.textContent = game.getWinner()===null ?`Turno de Jugador ${game.curentPlayer().name}` :""
    
        showToWinner()
        //console.log(game.curentPlayer().name)
    }

    function showToWinner(){
        displayWin.textContent = game.getWinner()
        return game.getWinner()
    }
    function clickHandlerBoard(e) {
        //console.log(e)
        const selectedColumn = e.target.dataset.column;
        const selectedRow = e.target.dataset.row;
        const key = e.target.innerText
        // Make sure I've clicked a column and not the gaps in between
        if ((!selectedColumn)||(key === 'X' || key === 'O')) return;

        game.roundGame(selectedRow,selectedColumn);
        updateScreen();
      }
    displayBoard.addEventListener('click',clickHandlerBoard)
    
    updateScreen();

    const restartButton = document.querySelector('.restartButton');
    restartButton.addEventListener('click', () => {
    // Reiniciar el juego
    game.tablero().forEach(row => row.forEach(cell => cell.addValue(0)));
    winner = null;
    //game.showTurnPlayer();
    updateScreen();
  });

    return{showToWinner}

}


const ejem = displayGame()

