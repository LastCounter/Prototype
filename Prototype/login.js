const staffUnInput = document.getElementById("staffUnInput");
const staffPwInput = document.getElementById("staffPwInput");
const staffButtom = document.getElementById("staffButtom");
const adminUnInput = document.getElementById("adminUnInput");
const adminPwInput = document.getElementById("adminPwInput");
const adminButtom = document.getElementById("adminButtom");
const messageContainer = document.getElementById("messageContainer");
const adminPage = document.getElementById("adminPage");
let firstCounter = {value:0};
let secondCounter = {value:0};



adminButtom.addEventListener("click", (e) =>{
    e.preventDefault(); // die Seite wird nicht neu geladen
    checkLogin(adminButtom, adminUnInput, adminPwInput, true, firstCounter);
})

staffButtom.addEventListener("click", (e)=>{
    e.preventDefault();
    checkLogin(staffButtom, staffUnInput, staffPwInput, false, secondCounter);
})



function checkLogin(LoginButtom, usernameField, passwordField, isAdmin, counter){

    if(counter.value < 2) { //wenn der Zähler Wert höher 2 ist
        let correctUser = checkUser(usernameField.value, passwordField.value, isAdmin);
        let password = passwordField.value; //speichere des Passwords
        let errors = findErrors(password); //function in var gespeichert die die Eingabe nach Fehlern untersucht
        console.log(counter.value); //Test Zähler
        console.log(correctUser); // user check
        if( !correctUser ){ // ------------------------------------
            counter.value++;
        }
        else{
            window.location = "admin.html";
            
            
        }
      
    }
    else {
        LoginButtom.disabled = true;
        usernameField.disabled = true;
        passwordField.disabled = true;
    }
}

function checkUser(username, password, isAdmin) {
    if(isAdmin){
        if(username === "admin" && password === "admin"){
            return true;
        }
        return false;
    }
    else {
        if (username === "user" && password === "user") {
            return true;
        }
        return false;
    }
}

function findErrors(password) { // hier drin sind Fehlermedungen mit if-Abfrage
    let errorMessages = []; // speichere die Fehlermedungen

    if(password === '' || password == null){ //keiner Eingabe/null
    errorMessages.push("Login Credentials Incorrect"); //fügt einem Array über push eine Fehlermeldung hinzu
    }
    else if (password.length < 8){
        errorMessages.push("password to short");
    }

    return errorMessages;
}
