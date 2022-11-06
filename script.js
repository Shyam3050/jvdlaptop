const form = document.getElementById("studentData");
const district = document.getElementById("district");
const number = document.getElementById("number");
const collegeName = document.getElementById("collegename");
const fullName = document.getElementById("name");
const gender = document.getElementById("gender");
const courseYear = document.getElementById("courseyear");
const successfullOverlay = document.getElementById("successfull-overlay");

// ////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (number.value > 9999999999 || !number.value || number.value < 999999999) {
    alert("enter correct number");
    return;
  } else if (!collegeName.value) {
    alert("enter college name");
    return;
  } else if (!fullName.value) {
    alert("enter full name");
    return;
  }
  successfullOverlay.style.display = "block";
  setTimeout(() => {
    successfullOverlay.style.display = "none";
  }, 3000);
  console.log("successfully submited");
});

const districtList = [];
