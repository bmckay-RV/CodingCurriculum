
function parse() {
    var names;
    var sorted;
    console.log("function call")
    var inputVal = document.getElementById("inputtedNames").value;
    names = inputVal.split(', ')
    console.log(names)
    sorted = names.sort(compare);
    console.log(sorted)
    inject(sorted);

    



}

function compare(a,b){
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[1];
    var lastB = splitB[1];
    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

function inject(s) {
    var table = document.getElementById("myTable");
    s.forEach(e => {
        var sortedNames = e.split(" ");
        var row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        cell1.className = "colorMe"
        let text1 = document.createTextNode(sortedNames[1]);
        console.log("adding: " + text1.textContent)
        cell1.appendChild(text1);
       
       
        var cell2 = row.insertCell(0);
        let text2 = document.createTextNode(sortedNames[0]);
        console.log("adding: " +text2.textContent)
        cell2.appendChild(text2);  
    });
    // Find a <table> element with id="myTable":
    
   

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    

}