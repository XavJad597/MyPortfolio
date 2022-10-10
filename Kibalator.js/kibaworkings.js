class Calculator {
    constructor (previousNumbers,currentNumbers){
        this.previousNumbers = previousNumbers;
        this.currentNumbers = currentNumbers
        this.clear()
    }
}

const powerButton = document.querySelector("[data-all-clear]");
const  deleteButton = document.querySelector("[data-delete]");
const operationButton = document.querySelectorAll("[data-number]");
const equalsButton = document.querySelector("[data-equal]");
const previousNumbers = document.querySelector("[data-previous-operand]");
const currentNumbers = document.querySelector("[data-current-operand]");
const numberBoard = document.querySelectorAll('[data-number]');

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

const calculator = new Calculator (previousNumbers,currentNumbers);

delete () {

}

numberBoard.forEach(button => {
 button.addEventListener("click",() =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
      }) 
        
    })
appendNumber(number){ 
    this.currentNumbers = number
   
}
    



chooseOperation(operation){

}

compute(){

}

updateDisplay() {
    this.currentNumbers.innerText = this.currentNumbers
}
