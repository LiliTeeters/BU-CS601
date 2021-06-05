function validateFirstlName() {
    var firstName = document.getElementById("firstName")
    if(firstName.nodeValue.length <=2) {
        alert("Your name must contain two or more characters.") 
        firstName.focus()
        return false
    }else {
        return true
    }
}

function validateLastName() {
    var lastName = document.getElementByIdI("lastName")
    if(lastName.nodeValue.length <=2) {
        alert("Your last name must contain two or more characters.")
        lastName.focus()
        return false
    }else{
        return true
    }
}



function validateFacilitator() {

}



function validateCompletion() {

}