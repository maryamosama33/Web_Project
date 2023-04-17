
let students = JSON.parse(localStorage.getItem('ArrayOfStudents'));


let tableBody = document.querySelector('tbody');


tableBody.innerHTML = '';


students.forEach(student => {
  let row = tableBody.insertRow();

 
  let nameCell = row.insertCell();
  let idCell = row.insertCell();
  let deptCell = row.insertCell();
  let emailCell = row.insertCell();
  let gpaCell = row.insertCell();
  let phoneCell = row.insertCell();
  let birthCell = row.insertCell();
  let levelCell = row.insertCell();
  let genderCell = row.insertCell();
  let statusCell = row.insertCell();
  let editCell = row.insertCell();

  
  nameCell.innerHTML = student.name;
  idCell.innerHTML = student.ID;
  deptCell.innerHTML = student.Departement;
  emailCell.innerHTML = student.Email;
  gpaCell.innerHTML = student.GPA;
  phoneCell.innerHTML = student.Phone;
  birthCell.innerHTML = student.BirthDate;
  levelCell.innerHTML = student.level;
  genderCell.innerHTML = student.gender;
  statusCell.innerHTML = student.Status;
  editCell.innerHTML = '<button><a href="Edit.html">Edit</a></button>';
});
