

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

    //tablero[1][1].addValue(7)

    const printTablero = () =>{
        const mapTablero = tablero.map((row)=>row.map((celda)=>celda.getValue()))
        console.log(mapTablero)}

    const addValor = (valor, row, column)=>{
        if(tablero[row][column].getValue() === 0) {
        tablero[row][column].addValue(valor)
        }
        else{return}
        printTablero()
    }

    printTablero()

    return { printTablero , addValor}
}

function celda (){
    let value = 0

    const getValue = ()=> value;

    const addValue = (newValor)=>{value = newValor;}
    
    return { getValue, addValue }
}

function gameControl (){
    const tablero = gameboard();

    const players =[
        {
        name: 'One',
        value: 'X'
        },
        {
        name: 'Two',
        value: '0'
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
        switchPlayer()
        showTurnPlayer()
    }
    
    showTurnPlayer()

    //return {printTablero: tablero.printTablero, roundGame}
    return Object.assign({},tablero,roundGame)
}

const gameTest = gameControl()