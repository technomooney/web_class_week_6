/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


//  create chart object
let chart = new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets:[
            {
                data: [],
                backgroundColor: []
            }],
        labels: []
    },
    options: {}
})


//  (optional) replace with colors of your choice. The array can have as many or as few colors as you like
// let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

function getRandomColor() {
    let red = Math.floor((Math.random() *245)+10)
    let green = Math.floor((Math.random() * 245)+10)
    let blue = Math.floor((Math.random() * 245) +10)
    return `rgb(${red},${green},${blue}`
}

function addExpenseToChart(name, amount) {

    // add expense to chart
    chart.data.labels.push(name)
    chart.data.datasets[0].data.push(amount)
    chart.data.datasets[0].backgroundColor.push(getRandomColor())
    chart.update()

}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value
    let expenseAmount = expenseAmountInput.value

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length === 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length === 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    //  call function to update chart
    addExpenseToChart(expenseName,expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


//  add event listener to click the Add Expense button when the enter key is pressed
window.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        let inputElementsArray = [expenseAmountInput,expenseAmountInput,addExpenseButton]
        if (inputElementsArray.includes(document.activeElement)) {
            addExpenseButton.click()
            expenseNameInput.focus()
        }
    }
})