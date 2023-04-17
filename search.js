
const searchInput = document.getElementById('Search');
const tableBody = document.querySelector('table tbody');

let arrayOfStudents = JSON.parse(localStorage.getItem('ArrayOfStudents'));


document.querySelector('button').addEventListener('click', searchStudents);


function searchStudents() {
 
    while (tableBody.rows.length > 1) {
        tableBody.deleteRow(1);
      }

  const query = searchInput.value.toLowerCase();

 
  arrayOfStudents.forEach(student => {
    const name = student.name.toLowerCase();
    const department = student.Department.toLowerCase();

    if (name.includes(query) || department.includes(query)) {
     
      const row = tableBody.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      const cell3 = row.insertCell();
      const cell4 = row.insertCell();
      const cell5 = row.insertCell();
      const cell6 = row.insertCell();
      const cell7 = row.insertCell();
      const cell8 = row.insertCell();
      const cell9 = row.insertCell();
      const cell10 = row.insertCell();

      cell1.innerHTML = student.name;
      cell2.innerHTML = student.ID;
      cell3.innerHTML = student.Department +'<button><a href="StuDepartment.html">Change</a></button>' ;
      cell4.innerHTML = student.Email;
      cell5.innerHTML = student.GPA;
      cell6.innerHTML = student.Phone;
      cell7.innerHTML = student.BirthDate;
      cell8.innerHTML = student.level;
      cell9.innerHTML = student.Status;
      cell10.innerHTML = '<button><a href="Edit.html">Edit</a></button>';
    }
  });
}
