

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

    const addValor = (valor)=>{

        tablero[0][0].addValue(valor)
    }

    return { printTablero , addValor}
}

function celda (){
    let value = 0

    const getValue = ()=> value;

    const addValue = (newValor)=>{value = newValor;}
    //addValue('ola')
    return { getValue, addValue }
}

// function gameControl {

// }

const gameTest = gameboard()