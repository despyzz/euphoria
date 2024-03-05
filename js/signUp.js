const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(function (checkbox) {
  const check = checkbox.querySelector('.fa-check');

  console.log(checkbox)
  check.style.opacity = 0;

  checkbox.addEventListener('click', function () {
    if (check.style.opacity === 0) {
      check.style.opacity = 1;
    } else {
      check.style.opacity = 0;
    }
  });
});