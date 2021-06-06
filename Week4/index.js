
function validateForm() {
    const firstName = document.getElementById("firstName")
    const lastName = document.getElementById("lastName")
    const facilitatorName = document.getElementById("facilitator")
    
    
    if (firstName.value.length <=2 || firstName.value == null) {
        alert("Name must be filled out and have two or more characters");
        firstName.focus()
        return false

    }if (lastName.value.length <= 2 || lastName.value == null) {
        alert("Last Name must be filled out and have two or more characters");
        lastName.focus()
        return false

    } if ((facilitatorName.value.length <=2) || facilitatorName.value == null || (facilitatorName.value != "Laura") || (facilitatorName.value != "Fazil") || (facilitatorName.value != "Harsh")){
        alert("Please enter a valid facilitator name");
        facilitatorName.focus()
        return false

    }
    return true

}