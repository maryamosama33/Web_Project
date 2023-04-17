let ArrayOfStudents = JSON.parse(localStorage.getItem('ArrayOfStudents')) || [];

function store(){
    const name = document.getElementById("name");
    const ID = document.getElementById("ID");
    const Level = document.getElementById("Level");
    const Department = document.getElementById("Department");
    const GPA = document.getElementById("GPA");
    const Email = document.getElementById("Email");
    const Phone = document.getElementById("Phone");
    const Address = document.getElementById("Address");
    const BirthDate = document.getElementById("BirthDate");
    const Gender = document.getElementById("Gender");
    const Status = document.getElementById("Status");
    
    let newObj = {};
    
    if (name !== null) newObj.name = name.value;
    if (ID !== null) newObj.ID = ID.value;
    if (Level !== null) newObj.level = Level.value;
    if (Department !== null) newObj.department = Department.value;
    if (GPA !== null) newObj.GPA = GPA.value;
    if (Email !== null) newObj.email = Email.value;
    if (Phone !== null) newObj.phone = Phone.value;
    if (Address !== null) newObj.address = Address.value;
    if (BirthDate !== null) newObj.birthDate = BirthDate.value;
    if (Gender !== null) newObj.Gender = Gender.value;
    if (Status !== null) newObj.Status = Status.value;
    
    ArrayOfStudents.push(newObj);
    localStorage.setItem('ArrayOfStudents' , JSON.stringify(ArrayOfStudents));

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("submit");
    myButton.addEventListener("click", function(e) {
      e.preventDefault();
      if(store()){
        location.reload();
      }
    });
  });
