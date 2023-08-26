"use strict";

const error = document.getElementById("error");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const view = document.getElementById("view");
const signup = document.getElementById("signup");
const success = document.getElementById("success");
const reset = document.getElementById("reset");
const illus = document.getElementById("illus");

function valid(e) {
  e.preventDefault();
  let pattern = /^[a-zA-Z0-9]{1,}@[a-z]{2,10}[.]com$/;
  if (!pattern.test(email.value)) {
    error.style.display = "block";
    email.style.border = "1px solid hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(5, 42%, 89%)";
    email.style.caretColor = "black";
  } else {
    signup.style.display = "none";
    success.style.display = "flex";
    view.textContent = email.value;
  }
}

submit.addEventListener("click", valid);

email.addEventListener("input", () => {
  error.style.display = "none";
  email.style.border = "1px solid black";
  email.style.color = "black";
  email.style.backgroundColor = "white";
});

reset.addEventListener("click", () => {
  location.reload();
});

