const studentList = document.getElementById("table-body");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


function displayStudents() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let students = JSON.parse(this.responseText);
      renderStudents(students);
    }
  };
  xhr.open("GET", "/get-students/", true);
  xhr.send();
}


function renderStudents(students) {
  studentList.innerHTML = ""; 
  students.forEach((student) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.student_id}</td>
      <td>${student.department} <button onclick="editDepartment('${student.student_id}', '${student.name}', '${student.department}')">Edit</button></td>
      <td>${student.email}</td>
      <td>${student.gpa}</td>
      <td>${student.phone}</td>
      <td>${student.date_of_birth}</td>
      <td>${student.level}</td>
      <td>${student.gender}</td>
      <td>${student.status}</td>
      <td><button onclick="editStudent('${student.student_id}', '${student.name}', '${student.department}', '${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.date_of_birth}', '${student.gender}', '${student.status}')">Edit</button></td>
    `;
    studentList.appendChild(row);
  });
}

function searchStudents() {
  const searchParam = searchInput.value.toLowerCase();
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let students = JSON.parse(this.responseText);
      if (Array.isArray(students)) {
        let filteredStudents = students.filter(student => {
          return student.name.toLowerCase().includes(searchParam) || student.department.toLowerCase().includes(searchParam);
        });
        renderStudents(filteredStudents);
      } else {
        console.error("Invalid response: students is not an array.");
      }
    }
  };
  xhr.open("GET", `/search_students/?search_param=${searchParam}`, true);
  xhr.send();
}

searchButton.addEventListener("click", searchStudents);


displayStudents();

function editDepartment(studentId, studentName, studentDepartment) {
  if (studentDepartment == "None") {
    alert("Student Level is less than 3 and cannot be assigned a department");
  }
  else {
    const url = `/StuDepartment?id=${studentId}&name=${encodeURIComponent(studentName)}&department=${encodeURIComponent(studentDepartment)}`;
    window.location.href = url;
  }
}
function editStudent(studentId, studentName, studentDepartment, studentLevel, studentGpa, studentEmail,
  studentPhone, studentDateOfBirth, studentGender, studentStatus) {
  const url = `/edit?id=${studentId}&name=${encodeURIComponent(studentName)}&department=${encodeURIComponent(studentDepartment)}&level=${encodeURIComponent(studentLevel)}&gpa=${encodeURIComponent(studentGpa)}&email=${encodeURIComponent(studentEmail)}&phone=${encodeURIComponent(studentPhone)}&dob=${encodeURIComponent(studentDateOfBirth)}&gender=${encodeURIComponent(studentGender)}&status=${encodeURIComponent(studentStatus)}`;
  window.location.href = url;
}

