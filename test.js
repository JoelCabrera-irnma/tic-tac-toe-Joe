let gameboard = ["","","","","","","","",""]

const scopeOne = (()=>{
  
 
  const createDiv = ()=>{
    const displayBoard = document.querySelector('.displayBoard')
    const element = document.createElement('div')
    element.classList.add('box')
    displayBoard.appendChild(element)
    
  }

  return{createDiv}
  })();

const scopeTwo =(()=>{

  const start = (event)=>{
    alert('ola ke ase')
    scopeOne.createDiv()

    const box = document.querySelector('.box')
    box.addEventListener('click', getSome)
  }

  const getSome = ()=>{
    console.log('hola puto')
    const displayWin = document.querySelector('.displayWin')
    displayWin.textContent = "Hola  A TODITOS"
    }

  return {start, getSome}
})();

const selector = document.querySelector('.restartButton')
  selector.addEventListener('click', ()=>{scopeTwo.start()}  )