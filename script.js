// grap ur dom elements id
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// define error handling functions
function showError(input, message) {
  // get the form-control div inorder to attach a class to it
  const formControl = input.parentElement;
  // overide the form-control class
  formControl.className = 'form-control error';

  //   get the small element inorder to pass our messsage
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  // get the parent element of the username input field
  const formControl = input.parentElement;
  //   add a class of success to form-control
  formControl.className = 'form-control success';
}

// check if email is vaild

// stack overflow email regex check
// function isEmailValid(email) {
// this returns true if email is valid else false
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// add an event listener to the dom form element
form.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(username.value);
  if (username.value === '') {
    showError(username, 'username is required');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'email is required');

    // if isEmailValid returns false false
  } else if (!validateEmail(email.value)) {
    showError(email, 'email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'password is required');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'confirm password is required');
  } else {
    showSuccess(password2);
  }
});
