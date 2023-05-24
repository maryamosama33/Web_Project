
let studentList = document.getElementById("student-list");


let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let students = JSON.parse(this.responseText);

    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      let row = document.createElement("tr");

      
      row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.student_id}</td>
            <td>${student.level}</td>
            <td>${student.department}</td>
            <td>${student.gpa}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.date_of_birth}</td>
            <td>${student.gender}</td>
            <td>${student.status}</td>
            <td><button onclick="editStudent('${student.student_id}', '${student.name}', '${student.department}','${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.date_of_birth}', '${student.gender}', '${student.status}')">Edit</button></td>
        `;
      // Add the row to the table
      studentList.appendChild(row);
    }
  }
};
xhr.open("GET", "/get-students/", true);
xhr.send();

// Add event listener to the edit button to redirect to the edit page and pass the student id
function editStudent(studentId, studentName, studentDepartment, studentLevel, studentGpa, studentEmail,
  studentPhone, studentDateOfBirth, studentGender, studentStatus) {
  const url = `/edit?id=${studentId}&name=${encodeURIComponent(studentName)}&department=${encodeURIComponent(studentDepartment)}&level=${encodeURIComponent(studentLevel)}&gpa=${encodeURIComponent(studentGpa)}&email=${encodeURIComponent(studentEmail)}&phone=${encodeURIComponent(studentPhone)}&dob=${encodeURIComponent(studentDateOfBirth)}&gender=${encodeURIComponent(studentGender)}&status=${encodeURIComponent(studentStatus)}`;
  window.location.href = url;
}