
document.write("Hello")


//function that welcomes, gathers user name, and gives a personalized message to user
const welcomeScreen = () => {
    alert('Welcome to my website!')
    const userName = prompt("What is your name?")
    alert("Hello " + userName + "! I hope you enjoy your experience.")
}

//function that asks the user to enter two numbers, then adds them and displays a message with total
const userNumberInput = () => {
    var firstNumber = prompt('Please enter a number')
    var secondNumber = prompt('Please enter a second number')
    var total = parseInt(firstNumber) + parseInt(secondNumber)
    if(total > 10) {
        alert('The sum of your two numbers is:  ' +total +'\n' + 'Wow! That is a big number!');
    } else {
        alert('The sum of your two numbers is:  '+total +'\n' + 'That is a small number!');

    }
    
}


userNumberInput();
