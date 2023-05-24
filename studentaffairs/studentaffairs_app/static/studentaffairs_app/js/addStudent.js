function validInputs() {
  let name = document.getElementById("name").value;
  const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  if (!name.match(nameRegex)) {
    alert("Invalid Name:\nThe name should begin with a capital letter then separated by a space");
    document.getElementById("name").focus();
    return false;
  }

  let ID = document.getElementById("ID").value;
  if (ID.length !== 8) {
    alert("Invalid ID:\nThe ID must be 8 digits");
    document.getElementById("ID").focus();
    return false;
  }

  let level = document.getElementById("Level").value;
  let Department = document.getElementById("Department").value;
  if (level === "Level 1" || level === "Level 2") {
    if (Department !== "None") {
      alert("Student Level is less than 3:\nPlease select None");
      document.getElementById("Department").focus();
      return false;
    }
  }

  let GPA = document.getElementById("GPA").value;
  if (GPA === "") {
    alert("Please enter a valid GPA");
    document.getElementById("GPA").focus();
    return false;
  }

  let Email = document.getElementById("Email").value;
  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/;
  if (!Email.match(emailRegex)) {
    alert("Invalid Email:\nPlease enter a valid email address");
    document.getElementById("Email").focus();
    return false;
  }

  let Phone = document.getElementById("Phone").value;
  const phoneRegex = /^\d{11}$/;
  if (!Phone.match(phoneRegex)) {
    alert("Invalid Phone:\nThe Phone must be 11 digits");
    document.getElementById("Phone").focus();
    return false;
  }

  let BirthDate = document.getElementById("BirthDate").value;
  if (BirthDate === "") {
    alert("Please enter Birth Date");
    document.getElementById("BirthDate").focus();
    return false;
  }

  return true;
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addStudentForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validate the inputs
    if (!validInputs()) {
      return;
    } else {
      let formData = new FormData(form);
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(this.responseText);
          // Handle the response data
          if (response.message === "Student added successfully") {
            alert(response.message);
            form.reset();
          } else {
            alert(response.message);
          }
        }
      };
      xhttp.open("POST", "add_student/", true);
      xhttp.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
      xhttp.send(formData);
    }
  });
});

// Helper function to get the CSRF token
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
