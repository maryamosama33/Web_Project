
const studentForm = document.getElementById("student-form");
studentForm.addEventListener("submit", addStudent);

function addStudent(event) {
  event.preventDefault(); 
  
  
  const name = studentForm.elements["Name"].value;
  const id = studentForm.elements["ID"].value;
  const department = studentForm.elements["department"].value;
  
  
  const students = JSON.parse(localStorage.getItem("ArrayOfStudents"));
  const level = students.find(s => s.ID === id)?.level;
  if (level !== "Level 3" && level !== "Level 4") {
    alert("Error: Students in level less than 3 cannot have a department.");
    return;
  }
  
  const newStudent = { name, ID: id, Department: department };
  students.push(newStudent);
  
  localStorage.setItem("ArrayOfStudents", JSON.stringify(students));
  
  alert("Student added successfully!");
  studentForm.reset(); 
}
