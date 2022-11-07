const firebaseConfig = {
  apiKey: "AIzaSyDOh0-PRXTn1aQGx8nVM4wCBu4USUvcr7M",
  authDomain: "fir-frontend-7cedc.firebaseapp.com",
  databaseURL: "https://fir-frontend-7cedc-default-rtdb.firebaseio.com",
  projectId: "fir-frontend-7cedc",
  storageBucket: "fir-frontend-7cedc.appspot.com",
  messagingSenderId: "519335019483",
  appId: "1:519335019483:web:448c2caf720ff829e61dfe",
  measurementId: "G-BP8FK4QL0M",
};

const form = document.getElementById("studentData");
const district = document.getElementById("district");
const number = document.getElementById("number");
const collegeName = document.getElementById("collegename");
const fullName = document.getElementById("name");
const gender = document.getElementById("gender");
const courseYear = document.getElementById("courseyear");
const successfullOverlay = document.getElementById("successfull-overlay");
// firebase config
firebase.initializeApp(firebaseConfig);

const dataFormDb = firebase.database().ref("userData");
// ////////////

const submitForm = (e) => {
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
  // database pushing
  savemessage(
    fullName.value,
    collegeName.value,
    gender.value,
    district.value,
    courseYear.value,
    number.value
  );
  successfullOverlay.style.display = "block";
  setTimeout(() => {
    successfullOverlay.style.display = "none";
  }, 3000);
  console.log("successfully submited");
  form.reset();
};

function savemessage(
  name,
  collegeName,
  gender,
  district,
  courseYear,
  mobileNum
) {
  const userData = dataFormDb.push();
  userData.set({
    name,
    gender,
    collegeName,
    district,
    courseYear,
    mobileNum,
  });
}
// dynamic option render
const districtList = [
  "srikakulam",
  "vizanagaram",
  "visakhapatnam",
  "E-godavari",
  "kurnool",
  "guntur",
  "Nellore",
  "chitoor",
];

district.innerHTML = districtList
  .map((dis) => {
    return `<option value= ${dis}>${dis}</option>
  </select>`;
  })
  .join("");

form.addEventListener("submit", submitForm);
