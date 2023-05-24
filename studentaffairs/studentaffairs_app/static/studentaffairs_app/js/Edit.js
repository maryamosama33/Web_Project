const urlParams = new URLSearchParams(window.location.search);
const nameInput = document.getElementById('name');
const idInput = document.getElementById('id');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const DPSelect = document.getElementById('DP');
const gpaInput = document.getElementById('GPA');
const dobInput = document.getElementById('dob');
const levelInput = document.getElementById('Level');
const StatusSelect = document.getElementById('Status');
const genderSelect = document.getElementById('Gender');
const saveButton = document.getElementById('save-button');

// Pre-fill form fields with student data from URL parameters
nameInput.value = urlParams.get('name');
idInput.value = urlParams.get('id');
emailInput.value = urlParams.get('email');
phoneInput.value = urlParams.get('phone');
DPSelect.value = urlParams.get('department');
gpaInput.value = urlParams.get('gpa');
dobInput.value = urlParams.get('dob');
levelInput.value = urlParams.get('level');
StatusSelect.value = urlParams.get('status');
genderSelect.value = urlParams.get('gender');

saveButton.addEventListener('click', function(event) {
  event.preventDefault();

  const form = document.getElementById('user-form');
  let formData = new FormData(form);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      // Handle the response data
      if (response.message === "Student updated successfully") {
        alert(response.message);
        window.location.href='/information';
      } else {
        alert(response.message);
      }
    }
  };
  xhttp.open("POST", "update_student/", true);
  xhttp.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
  xhttp.send(formData);
});

const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (confirm("Are you sure you want to delete this student?")){
  const form = document.getElementById('user-form');
  let formData = new FormData(form);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      // Handle the response data
      if (response.message === "Student deleted successfully") {
        alert(response.message);
        window.location.href='/information';
      } else {
        alert(response.message);
      }
    }
  };
  xhttp.open("POST", "delete_student/", true);
  xhttp.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
  xhttp.send(formData);
  }
});


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}