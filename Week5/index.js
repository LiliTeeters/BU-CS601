var my_education = [
    {
        "school": "University of Phoenix",
        "major": "General Studies",
        "type": "AA",
        "year": "2011"
    },
    {
        "school": "University of North Carolina at Wilmington",
        "major": "Therapeutic Recreation",
        "type": "BA",
        "year": "2014"
    },
    {
        "school": "Boston University Metropolitan College",
        "major": "Software Development",
        "type": "MS",
        "year": "2022"
    }
]

document.getElementById('myTable').innerHTML = 'Hi'


for( var i in my_education) {
    var row = <tr>
        <td>$[my_education[i].school]</td> 
        <td>$[my_education[i].year]</td> 
        <td>$[my_education[i].type]</td> 
        </tr>
    
    var table = $('#myTable')
    table.append(row)
}
