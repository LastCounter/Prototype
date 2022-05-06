const goStudentPage = document.getElementById("goStudentPage");
const goStaffPage = document.getElementById("goStaffPage");

goStudentPage.addEventListener("click", (e) =>{
  
    window.location = "studentPage.html";
    e.preventDefault();
})

goStaffPage.addEventListener("click", (e) =>{
  
    window.location = "staffPage.html";
    e.preventDefault();
})