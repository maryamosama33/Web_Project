let ArrayOfStudents = JSON.parse(localStorage.getItem('ArrayOfStudents'));
function store(){
    var form=document.getElementsByName("form");
    const Name = document.getElementsByName("name").value;
    const ID = document.getElementsByName("ID").value;
    const Level = document.getElementsByName("Level").value;
    const Department = document.getElementsByName("Department").value;
    const GPA = document.getElementsByName("GPA").value;
    const Email = document.getElementsByName("Email").value;
    const Phone = document.getElementsByName("Phone").value;
    const Address = document.getElementsByName("Address").value;
    const BirthDate = document.getElementsByName("BirthDate").value;
    const Status = document.getElementsByName("Status").value;

    let newObj = {
        Name,
        ID,
        Level,
        Department,
        GPA,
        Email,
        Phone,
        Address,
        BirthDate,
        Status
    }

    ArrayOfStudents.push(newObj);
    localStorage.setItem('ArrayOfStudents' , JSON.stringify(ArrayOfStudents));
}

///May have a problem
document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("submit");
    myButton.addEventListener("click", function(e) {
      e.preventDefault();
      if(store()){
        location.reload();
      }
    });
  });