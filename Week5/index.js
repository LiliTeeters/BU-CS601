
var urlToEducation = "https://api.jsonbin.io/b/60c6aa8fb274176a77e71749"

(function () {
    var httpRequest;
    document.getElementById("button").onclick = function() {
        makeRequest("education.html");
    }


function makeRequest(urlToEducation) {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("error")
        return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', urlToEducation)
    httpRequest.send()
}

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText)
        } else {
            alert('problem')
        }
    }
}
})()