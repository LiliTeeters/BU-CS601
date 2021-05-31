//function that welcomes, gathers user name, and gives a personalized message to user
const welcomeScreen =  () => {
    alert('Welcome to my website!');
    const userName = prompt("What is your name?");
    alert("Hello " + userName + "! I hope you enjoy your experience.");
}

//function that asks the user to enter two numbers, then adds them and displays a message with total
//this function also loops depending on user selection
const userNumberInput = () => {
    var firstNumber = prompt('Please enter a whole number');
    var secondNumber = prompt('Please enter a second whole number');
    var total = parseInt(firstNumber) + parseInt(secondNumber);
    
    
    if(total > 10) {
        alert('The sum of your two numbers is:  ' +total +'\n' + 'Wow! That is a big number!');
    } else {
        alert('The sum of your two numbers is:  '+total +'\n' + 'That is a small number!');
    } 
    
    const attempt = prompt('Would you like to try another set of numbers? ' +'\n' + 'Please enter "yes" or "no"');
    while(attempt) {
        if(attempt == 'yes') {
            userNumberInput()
        }else{
            if(attempt == 'no'){
                alert("Thank you for visiting today!");   
            }
        }break;
    }
}

welcomeScreen();
userNumberInput();