let input1 = document.getElementById('pwd-first');
let input2 = document.getElementById('pwd-second');

let error = document.getElementById('pwd-error');

if (input1 && input2 && error) {
  input1.addEventListener("input", compare);
  input2.addEventListener("input", compare);
}

function compare() {
  let value1 = input1.value;
  let value2 = input2.value;

  if (value1 !== value2) {
    error.style.opacity = '1';
  } else {
    error.style.opacity = '0';
  }
}