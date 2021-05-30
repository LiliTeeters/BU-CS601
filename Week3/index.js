

document.write("Hello")


//function that welcomes, gathers user name, and gives a personalized message to user
const welcomeScreen = () => {
    alert('Welcome to my website!')
    const userName = prompt("What is your name?")
    alert("Hello " + userName + "! I hope you enjoy your experience.")

}

welcomeScreen()