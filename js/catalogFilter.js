// Catalog direction
const catalogDirection = document.getElementById("catalogDirection");
let catalogDirectionInput = document.getElementById("catalogDirectionInput")

let directionUp = document.getElementById("directionUp");
let directionDown = document.getElementById("directionDown");

directionUp.style.display = "none";
directionDown.style.display = "block";
catalogDirectionInput.value = "down"

catalogDirection.addEventListener("click", function () {
  if (directionUp.style.display === "none" && directionDown.style.display === "block") {
    directionUp.style.display = "block";
    directionDown.style.display = "none";

    catalogDirectionInput.value = "up";
  }
  else
  {
    directionUp.style.display = "none";
    directionDown.style.display = "block";

    catalogDirectionInput.value = "down";
  }
});

// Expanding blocks
let mainBlocks = document.querySelectorAll(".main-block");
mainBlocks.forEach(function (block) {
  let title = block.querySelector(".main-block__title");
  let content = block.querySelector(".main-block__content")

  let collapseIcon = title.querySelector(".fa-chevron-up");
  let expandIcon = title.querySelector(".fa-chevron-down");

  content.style.display = "none";

  collapseIcon.style.display = "none";
  expandIcon.style.display = "block";

  title.addEventListener("click", function () {
    if (content.style.display === "none") {
      content.style.display = "flex";

      collapseIcon.style.display = "block";
      expandIcon.style.display = "none";

    } else {
      content.style.display = "none";

      collapseIcon.style.display = "none";
      expandIcon.style.display = "block";

    }
  });
});

// Color items
const colorItems = document.querySelectorAll(".catalog__filterColorsSelectorItemRectangle");
colorItems.forEach(function (item) {
  let base = item.style.border;

  item.addEventListener("click", function () {
    if (item.style.border === base) {
      item.style.border = "solid grey 5px";
    } else {
      item.style.border = base;
    }
  });
});

// Size items
const sizeItems = document.querySelectorAll(".catalog__filterSizeSelectorItem");
sizeItems.forEach(function (item) {
  let base = item.style.border;

  item.addEventListener("click", function () {
    if (item.style.border === base) {
      item.style.border = "solid grey 3px";
    } else {
      item.style.border = base;
    }
  });
});
