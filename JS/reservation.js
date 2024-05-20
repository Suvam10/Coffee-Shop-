let date = new Date();
let tdate = date.getDate();
let month = date.getMonth() + 1;

if (date < 10) {
  tdate = "0" + tdate;
}
if (month < 10) {
  month = "0" + month;
}
let year = date.getUTCFullYear();
let minDate = year + "-" + month + "-" + tdate;
document.querySelector("#dob").setAttribute("min", minDate);

// TODO form validation
let firstNameError = document.querySelector("#firstname-error");
let numberError = document.querySelector("#number-error");
let timeError = document.querySelector("#time-error");
let dateError = document.querySelector("#date-error");
let emailError = document.querySelector("#email-error");
let submitError = document.querySelector("#submit-error");
const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

const validFirstName = () => {
  let firstName = document.querySelector("#first-name").value;
  if (firstName.length == 0) {
    firstNameError.innerHTML = "first name is required";
    firstNameError.classList.add("text-danger");
    return false;
  }
  if (!firstName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    firstNameError.innerHTML = "write full name";
    firstNameError.classList.add("text-danger");
    return false;
  }
  firstNameError.innerHTML = "";
  return true;
};

const validNumber = () => {
  const number = document.querySelector("#phone-no").value;
  if (number.length == 0) {
    numberError.innerHTML = "number is required";
    numberError.classList.add("text-danger");
    return false;
  }
  if (number.length !== 10) {
    numberError.innerHTML = "phone no should be 10 digits";
    numberError.classList.add("text-danger");
    return false;
  }
  if (!number.match(/^[0-9]{10}$/)) {
    numberError.innerHTML = "only digits please";
    numberError.classList.add("text-danger");
    return false;
  }
  numberError.innerHTML = "";
  return true;
};

const validDate = () => {
  const date = document.querySelector("#dob").value;

  if (date.length == 0) {
    dateError.innerHTML = "date is required";
    dateError.classList.add("text-danger");
    return false;
  }
  dateError.innerHTML = "";
  return true;
};
const validTime = () => {
  const time = document.querySelector("#time").value;
  if (time.length == 0) {
    timeError.innerHTML = "time is required";
    timeError.classList.add("text-danger");
    return false;
  }
  timeError.innerHTML = "";
  return true;
};

const validEmail = () => {
  const email = document.querySelector("#email").value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    emailError.classList.add("text-danger");
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "email invalid";
    return false;
  }
  emailError.innerHTML = "";
  return true;
};

const validForm = () => {
  if (
    !validFirstName() ||
    !validEmail() ||
    !validNumber() ||
    !validDate() ||
    !validTime()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error to submit";
    submitError.classList.add("text-danger");
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  setTimeout(() => {
    firstNameError.innerHTML = "";
    numberError.innerHTML = "";
    timeError.innerHTML = "";
    dateError.innerHTML = "";
    emailError.innerHTML = "";
    submitError.innerHTML = "";
    form.reset();
  }, 3000);

  setTimeout(() => {
    toastBootstrap.show();
  }, 3000);
  return true;
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyXI4sjBeo8iQw5tzpfXWEFXMeeTJPfGdvVVPls03aXtAtTCP5MwJ6PyLZHu489ie3V3A/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
