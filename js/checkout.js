const radioItems = document.querySelectorAll(".radio");
radioItems.forEach(function (radio) {
  const fill = radio.querySelector(".radio-fill")

  fill.style.display = "none"

  radio.addEventListener("click", function () {
    if (fill.style.display === "none") {
      fill.style.display = "block";
    } else {
      fill.style.display = "none";
    }
  });
});