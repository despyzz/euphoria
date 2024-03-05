const quantityElements = document.querySelectorAll(".quantity");
if (quantityElements) {
  quantityElements.forEach(function (quantity) {
    const increase = quantity.querySelector(".quantity__increase");
    const decrease = quantity.querySelector(".quantity__decrease");
    const count = quantity.querySelector(".quantity__count");

    increase.addEventListener("click", function () {
      count.value = parseInt(count.value) + 1;
    });

    decrease.addEventListener("click", function () {
       let newValue = parseInt(count.value) - 1;
      if (newValue >= 1) {
        count.value = newValue
      }
    });
  });
}