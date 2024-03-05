"use strict"

// Size selector
const sizeItems = document.querySelectorAll(".product__infoSizeSelectorOptionsItem");
sizeItems.forEach(function (item) {

  item.addEventListener("click", function () {
    let baseCol = item.style.color;
    let baseBgc = item.style.backgroundColor;

    // Deactivate other
    sizeItems.forEach(function (other) {
      other.style.color = baseCol;
      other.style.backgroundColor = baseBgc;
    });

    if (item.style.color === baseCol && item.style.backgroundColor === baseBgc) {
      item.style.color = "#ffffff"
      item.style.backgroundColor = "#3C4242";
    } else {
      item.style.color = baseCol;
      item.style.backgroundColor = baseBgc;
    }
  });
});

// Color selector
const colorItems = document.querySelectorAll(".product__infoColorSelectorOptionsItem");
colorItems.forEach(function (item) {

  item.addEventListener("click", function () {
    let baseBorder = item.style.border;

    // Deactivate other
    colorItems.forEach(function (other) {
      other.style.border = baseBorder;
    });

    if (item.style.border === baseBorder) {
      item.style.border = "5px solid grey"
    } else {
      item.style.border = baseBorder;
    }
  });
});
