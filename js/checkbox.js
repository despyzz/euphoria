const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(function (checkbox) {
  let label = checkbox.querySelector("label");
  let icon = checkbox.querySelector(".checkbox__icon");
  let input = checkbox.querySelector("input");

  input.value = "false";
  icon.style.opacity = 0;

  label.addEventListener("click", function () {
    if (input.value === "false") {
      input.value = "true";
      icon.style.opacity = 1;
    } else {
      input.value = "false";
      icon.style.opacity = 0;
    }
  });
});