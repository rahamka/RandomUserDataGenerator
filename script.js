// userData
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let userImage = document.getElementById("userImage");
let userMail = document.getElementById("userMail");
let userPhone = document.getElementById("userPhone");
let userAge = document.getElementById("userAge");
let button = document.querySelector("button");
let userLocation = document.getElementById("userLocation");

// by default load user
let getRandomUser = Math.floor(Math.random() * 30);
const xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.addEventListener("load", () => {
  firstName.innerText = xhr.response.users[getRandomUser].firstName;
  lastName.innerText = xhr.response.users[getRandomUser].lastName;
  userImage.src = xhr.response.users[getRandomUser].image;
  userMail.innerText = xhr.response.users[getRandomUser].email;
  userPhone.innerText = xhr.response.users[getRandomUser].phone;
  userAge.innerText = xhr.response.users[getRandomUser].age;
  userImage.src = xhr.response.users[getRandomUser].image;
  userLocation.innerText = xhr.response.users[getRandomUser].address.address;
});
xhr.open("GET", "https://dummyjson.com/users");
xhr.send();
// on button click load new user
button.addEventListener("click", () => {
  let getRandomUser = Math.floor(Math.random() * 30);
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    firstName.innerText = xhr.response.users[getRandomUser].firstName;
    lastName.innerText = xhr.response.users[getRandomUser].lastName;
    userImage.src = xhr.response.users[getRandomUser].image;
    userMail.innerText = xhr.response.users[getRandomUser].email;
    userPhone.innerText = xhr.response.users[getRandomUser].phone;
    userAge.innerText = xhr.response.users[getRandomUser].age;
    userImage.src = xhr.response.users[getRandomUser].image;
    userLocation.innerText = xhr.response.users[getRandomUser].address.address;
    console.log(xhr.response.users[getRandomUser]);
  });
  xhr.open("GET", "https://dummyjson.com/users");
  xhr.send();
});
