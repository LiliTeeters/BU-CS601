
function validateForm() {
    var firstName = document.forms["firstForm"]["firstName"].value;
    var lastName = document.forms["firstForm"]["lastname"].value;
    var facilitatorName = document.forms["firstForm"]["facilitator"].value;
    
    if ((firstName == '') || (firstName.length <=2)) {
        alert("Name must be filled out and have two or more characters");
        return false

    }else if ((lastName =='') || (lastName.length <= 2)) {
        alert("Last Name must be filled out and have two or more characters");
        return false

    }else if ((facilitatorName == '') || (facilitatorName != "Laura") || (facilitatorName != "Fazil") || (facilitatorName != "Harsh")){
        alert("Please enter a valid facilitator name")
        return false
        
    }else{
        return true
    }

}