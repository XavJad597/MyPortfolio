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
    
    if(number==='.' &&  this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() +  number.toString()
      
    }
        
    chooseOperation(operation){
        if (this.currentOperand === ' ') return
        if (this.previousOperand !== ' '){
            this.compute
        }
        this.operation = operation
        this.previousOperand= this.currentOperand
        this.currentOperand =' '

    }
    
    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(this.current)) return
        switch(this.operation) {
            case'+':
            conputation = prev + current 
            break
            case ='+':
            conputation = prev + current 
            break   case='-':
            conputation = prev - current 
            break   case=':':
            conputation = prev / current 
            break   case='%':
            conputation = prev / current * 100
            break   case'*':
            conputation = prev * current 
            break   case'sin':
            conputation = prev + current 
            break   case'cos':
            conputation = prev + current 
            break   case'tan':
            conputation = prev + current 
            break   case'log':
            conputation = prev + current 
            break   case'10^x':
            conputation = prev + current 
            break   case'ln':
            conputation = prev + current 
            break   case'e^x':
            conputation = prev + current 
            break
        }
    
    }
    
    
    
    updateDisplay(){
        this.currentNumbers.innerText = this.currentOperand
        this.previousNumbers.innerText = this.currentOperand
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

operationButton.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
console.log(numberBoard)

equalsButton.addEventListener('click,' ()=>{
    calculator.compute()
    calculator.updateDisplay()
})