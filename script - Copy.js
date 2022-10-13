



const gameboard = (() => {
   
    const playertext = document.querySelector('.playertext')    

 const board = ['', '', '', '', '', '', '', '', ''];
let turn = 0

const setToX = (e) => {
    const index = e.target.getAttribute('data')


if (turn == 0 || turn % 2 == 0) {
    board[index - 1] = "X"
    }
else {
board[index - 1] = "O"}



    let grey = document.querySelectorAll('.choice')
    grey = Array.from(grey)
   grey[index-1].classList.remove('grey')
   grey[index-1].classList.add('taken')


   
    render()
    removeEvents(e, index)
    addSingleClick(e, index)
    updatePlayerText()
    turn++
    checkWinner() 

   
   
    console.log(board, "turn", turn)
}   


const updatePlayerText = () => {
    
const playertext = document.querySelector('.playertext')

if (playertext.textContent == "Player 1, Make your Move") {playertext.textContent = "Player 2, Make your Move"}
else {playertext.textContent = "Player 1, Make your Move"}
console.log(playertext)
}



const Tie = () => {
    
    
    
        playertext.textContent = "Tie! Nobody Wins!"
        displayReset()
    

    }
    



 const setToXMouseOver = (e) => {



    const index = e.target.getAttribute('data')
    if (turn == 0 || turn % 2 == 0) {
        board[index - 1] = "X"
       }
    else {
    board[index - 1] = "O"}
    let grey = document.querySelectorAll('.choice')
    grey = Array.from(grey)
   grey[index-1].classList.add('grey')
    render()


 
}

const thisSpotIsTaken = (e) => {

    console.log("This Spot is Taken!")


}

const addSingleClick = (e, index) => {
   
    let cell = document.querySelectorAll('.cell')
    cell = Array.from(cell)        
  
        
        cell[index-1].addEventListener('click', thisSpotIsTaken)    

}


const remove = (e) => {
    const index = e.target.getAttribute('data')
board[index - 1] = ""
    render()
}


const removeAllEvents = () => {

document.querySelectorAll('*').forEach((elem,ind,arr) => {
    elem.removeEventListener('click', gameboard.setToX)
    elem.removeEventListener('mouseover', gameboard.setToXMouseOver)      
    elem.removeEventListener('mouseout', gameboard.remove)
        
})


}

const removeEvents = (e, index) =>  {
    
    let cell = document.querySelectorAll('.cell')
    cell = Array.from(cell)        
    cell[index-1].removeEventListener('click', gameboard.setToX)    
        cell[index-1].removeEventListener('mouseover', gameboard.setToXMouseOver)           
        cell[index-1].removeEventListener('mouseout', gameboard.remove)
        
}

const render = ()  => {
    const choices = Array.from(document.querySelectorAll('.choice'))
    for (let i = 0; i < board.length; i++ ) {
        //console.log(choices[i])
        //see what is in the array
        // if the index is empty, then log nothing
        if (board[i] == "X" || board[i] == "O") {
            // if we have an X or an O there, we want to update the text content
            // of the corresponding h4 with data value = i
          
           choices[i].textContent = board[i]
        }
        else {choices[i].textContent = board[i]}


    }
};

const displayReset = () => {
    const grid = document.querySelector('.boardgrid')
    const button = document.querySelector('.buttonmask')
    const parent = document.querySelector('.gameboard')
    button.classList.toggle('none')
   removeAllEvents()
    button.addEventListener('click', (e) => {
        location.reload()
        return false;
    })

  
}

const turnCellRed = (indexes) => {

    const cell = document.querySelectorAll('.cell') 
    cell.forEach((elem,ind,arr) => {
        if (
            elem.getAttribute('data') == indexes[0] + 1 || elem.getAttribute('data') == indexes[1] + 1|| elem.getAttribute('data') == indexes[2] + 1 ) {
                elem.classList.add("redtilt")
            console.log(elem.getAttribute('data'))
        }
      
    })


    const selection = document.querySelectorAll('.selection')
    selection.forEach((elem,ind,arr) => {
        if (
            elem.getAttribute('data') == indexes[0] + 1 || elem.getAttribute('data') == indexes[1] + 1|| elem.getAttribute('data') == indexes[2] + 1 ) {
            elem.classList.add("borderred")
            console.log(elem.getAttribute('data'))
        }
    })

}



const checkWinner = () => {



if (board[0] == board[1] && board[0] == board[2] && board[0]) {



const winner = board[0] == "X" ? "Player 1" : "Player 2"
playertext.textContent = `We have a Winner!  ${winner} Wins`
displayReset()
turnCellRed([0,1,2])

}


else if (board[3] == board[4] && board[3] == board[5] && board[3]) {
    const winner = board[3] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([3,4,5])
    
}
else if (board[6] == board[7] && board[6] == board[8] && board[6] ) {
    const winner = board[7] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([6,7,8])
}






else if (board[0] == board[3] && board[0] == board[6] && board[0]) {
    const winner = board[3] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([0,3,6])
    
}
else if (board[1] == board[4] && board[1] == board[7] && board[1] ) {
    const winner = board[7] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([1,4,7])
}

else if (board[2] == board[5] && board[2] == board[8] && board[2]) {
    const winner = board[3] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([2,5,8])
    
}




else if (board[0] == board[4] && board[0] == board[8] && board[0]) {
    const winner = board[3] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([0,4,8])
    
}
else if (board[2] == board[4] && board[2] == board[6] && board[2] ) {
    const winner = board[7] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([2,4,6])
}

else if (board[2] == board[5] && board[2] == board[8] && board[2]) {


    const winner = board[3] == "X" ? "Player 1" : "Player 2"
    playertext.textContent = `We have a Winner!  ${winner} Wins`
    displayReset()
    turnCellRed([2,5,8])
    
}


else if (turn == 9 ) {
   Tie()
}









}


const addEvents = () => {

    let cell = document.querySelectorAll('.cell')
    cell = Array.from(cell)
    
    cell.forEach((elem,ind,arr) => {
        elem.addEventListener('click', setToX)
    
    
        elem.addEventListener('mouseover', setToXMouseOver)
    
    
        elem.addEventListener('mouseout', remove)
    
    })
    
    

    
    
    
    }
addEvents()



return {setToX, setToXMouseOver, remove, removeEvents, render}



})();



const Player = (name)  => {

return {name}

}



















