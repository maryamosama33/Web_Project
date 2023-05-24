const urlParams = new URLSearchParams(window.location.search);
const nameInput = document.getElementById('name');
const idInput = document.getElementById('id');
const DPSelect = document.getElementById('department')
const saveButton = document.getElementById('save-button');

// pre-fill form fields with student data from URL parameters
nameInput.value = urlParams.get('name');
idInput.value = urlParams.get('id');
DPSelect.value = urlParams.get('department');

saveButton.addEventListener('click', function(event) {
  event.preventDefault();

  const form = document.getElementById('dept-form');
  let formData = new FormData(form);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      // Handle the response data
      if (response.message === "Department updated successfully") {
        alert(response.message);
        window.location.href='/Search';
      } else {
        alert(response.message);
      }
    }
  };
  xhttp.open("POST", "update_department/", true);
  xhttp.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
  xhttp.send(formData);
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
