let divAddStudents = document.getElementById("divAddStudents");//
let buttonAddTable = document.getElementById("buttonAddTable");
let addStringButtan = document.getElementById("addStringButtan");



divAddStudents.classList.add("hidden"); 
buttonAddTable.addEventListener("click", (e) => {
    addHtmlTableRow();
})

addStringButtan.addEventListener("click", function(){//
    divAddStudents.classList.remove("hidden");
})
function addHtmlTableRow() {

    let table = document.getElementById("table");
    let newRow = table.insertRow(table.length); // die funktion gibts in der DOM
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let sID = document.getElementById("sID").value;
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let birthday = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let department = document.getElementById("department").value;
    let email = document.getElementById("email").value;
    console.log(sID, fName, gender, birthday, department, email);
    cell1.innerHTML = sID;  // ey mach mal in html rein in <td>
    cell2.innerHTML = fName;
    cell3.innerHTML = lName;
    cell4.innerHTML = birthday;
    cell5.innerHTML = gender;
    cell6.innerHTML = department;
    cell7.innerHTML = email;

    
}