
const gameboard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];



    
    return {board}
})();


const render = ()  => {

    const choices = Array.from(document.querySelectorAll('.choice'))

    for (let i = 0; i < gameboard.board.length; i++ ) {
        //console.log(choices[i])
        //see what is in the array
        // if the index is empty, then log nothing
        if (gameboard.board[i] == "X" || gameboard.board[i] == "O") {
            // if we have an X or an O there, we want to update the text content
            // of the corresponding h4 with data value = i  
           choices[i].textContent = gameboard.board[i]
        }
        else {choices[i].textContent = gameboard.board[i]}


    }



};



function setToX(e) {
    const index = e.target.getAttribute('data')
 
    gameboard.board[index - 1] = "X"

    let grey = document.querySelectorAll('.choice')
    grey = Array.from(grey)
   grey[index-1].classList.remove('grey')

    render()
    removeEvents(e, index)


}


function setToXMouseOver(e) {
    const index = e.target.getAttribute('data')

    gameboard.board[index - 1] = "X"

    let grey = document.querySelectorAll('.choice')
    grey = Array.from(grey)
   grey[index-1].classList.add('grey')


    render()


}

function remove(e) {

    const index = e.target.getAttribute('data')
  
    gameboard.board[index - 1] = ""
  
    render()


}

function removeEvents(e, index) {
   

        let cell = document.querySelectorAll('.cell')
        cell = Array.from(cell)
        
    
           
        cell[index-1].removeEventListener('click', setToX)
        
            cell[index-1].removeEventListener('mouseover', setToXMouseOver)
        
        
            cell[index-1].removeEventListener('mouseout', remove)
   
        
        
        
        
        
        
        
        
}





const addEvents = (() => {

let cell = document.querySelectorAll('.cell')
cell = Array.from(cell)

cell.forEach((elem,ind,arr) => {
    elem.addEventListener('click', setToX)


    elem.addEventListener('mouseover', setToXMouseOver)


    elem.addEventListener('mouseout', remove)

})







})();




