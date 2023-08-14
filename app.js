let buttons = document.querySelectorAll(".buttons button") ;
let myChoice = document.querySelector(".myChoice") ;
let computerChoice = document.querySelector(".computerChoice") ;
let result = document.querySelector(".result") ;
let computerCounter = document.querySelector(".computerCounter span") ;
let yourCounter = document.querySelector(".yourCounter span") ;

let computerScore = 0;
let yourScore = 0;

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        myChoice.innerHTML=e.target.innerHTML;
        let computer = Array.from(buttons);
        let computerText =computer[Math.floor(Math.random()*computer.length)].textContent ;
        computerChoice.innerHTML= computerText;
        getResult()
    })
    
    
})
const getResult = () => {
  
  switch (myChoice.innerHTML + computerChoice.innerHTML) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      result.innerHTML = "YOU WIN!"
      yourScore++
      yourCounter.innerHTML = yourScore
      
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      result.innerHTML = "YOU LOSE!" ;
      computerScore++
      computerCounter.innerHTML = computerScore

      break
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
    result.innerHTML = "ITS A DRAW!"

    break
  }
}