function submitForm() {
  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Check if any of the fields are empty or invalid
  if (
    firstName === "" ||
    lastName === "" ||
    dob === "" ||
    country === "" ||
    !gender ||
    profession === "" ||
    email === "" ||
    mobile === ""
  ) {
    alert(
      "Please fill out all the fields in the form. All fields are required."
    );
    return;
  }

  // Create a result message
  const resultMessage = `First Name: ${firstName}<br>Last Name: ${lastName}<br>Date of Birth: ${dob}<br>Country: ${country}<br>Gender: ${gender}<br>Profession: ${profession}<br>Email: ${email}<br>Mobile Number: ${mobile}`;

  // Display the result in the modal
  document.getElementById("result").innerHTML = resultMessage;
  openModal();
}

//for reseting the form
function resetForm() {
  document.getElementById("surveyForm").reset();
}

//open when submit
function openModal() {
  document.getElementById("modal").style.display = "block";
}

//close the output
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    closeModal();
  }
};

//For selecting country from json
document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country");

  // Load the JSON data
  fetch("countries.json")
    .then((response) => response.json())
    .then((data) => {
      // Populate the select element with options
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
      });
    })
    .catch((error) => console.error(error));
});
