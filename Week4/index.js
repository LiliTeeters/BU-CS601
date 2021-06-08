
function validateForm() {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const facilitatorName = document.getElementById("facilitator").value

    if (firstName.length <=2 || firstName == null) {
        alert("Name must be filled out and have two or more characters");
        firstName.focus()
        return false

    }
     else if (lastName.length <= 2 || lastName == null) {
        alert("Last Name must be filled out and have two or more characters");
        lastName.focus()
        return false

    }
     else if (facilitatorName.length <=2 || facilitatorName == null) {
        alert("Facilitator name must be filled out and have two or more characters");
        facilitatorName.focus()
        return false
     }
     else if (facilitatorName.value != "Fazil" || facilitatorName.value != "Laura" || facilitatorName.value != "Harsh"){
         alert("Please enter a valid facilitator name")
         facilitatorName.focus()
         return false    
         
     } else {
     
     return true
     }
     
    }