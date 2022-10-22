class Calculator {
    constructor (previousNumbers,currentNumbers){
        this.previousNumbers = previousNumbers
        this.currentNumbers = currentNumbers
        this.clear()
    }

    clear () {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
 
    delete () {

    }
     
  appendNumber(number){
        this.currentOperand = number
        
    }
        
    
    
    
    chooseOperation(operation){
    
    }
    
    
    
    compute(){
    
    }
    
    
    
    updateDisplay(){
        this.currentNumbers.innerText = this.currentOperand
    }
}

const powerButton = document.querySelector('[data-all-clear]')
const  deleteButton = document.querySelector("[data-delete]")
const operationButton = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equal]")
const previousNumbers = document.querySelector("[data-previous-operand]")
const currentNumbers = document.querySelector("[data-current-operand]")
const numberBoard = document.querySelectorAll('[data-number]')



const calculator = new Calculator (previousNumbers,currentNumbers)

numberBoard.forEach( button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    } )
}

)

