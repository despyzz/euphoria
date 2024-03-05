let showHidden = document.getElementById("showHidden");

if (showHidden) {
  showHidden.addEventListener("click", function () {
    let hiddenContent = document.getElementById("hiddenContent")

    window.addEventListener("resize", function () {
      let width = window.innerWidth;

      // notebook size
      if (width >= 1024) {
        hiddenContent.style.display = "none";
      }
    });

    if (hiddenContent.style.display === "flex") {
      hiddenContent.style.display = "none";
    } else {
      hiddenContent.style.display = "flex";
    }
  });
}

const languageSelector = document.querySelector(".language-selector");
if (languageSelector) {
  const dropbtn = languageSelector.querySelector(".dropbtn");
  const dropdownContent = languageSelector.querySelector(".dropdown-content");

  dropdownContent.style.display = "none";

  // open/close menu
  dropbtn.addEventListener("click", function () {
    if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "flex";
    } else {
      dropdownContent.style.display = "none";
    }
  });

  // close when losing focus
  document.addEventListener("click", function (event) {
    const isClickInside = dropdownContent.contains(event.target) || dropbtn.contains(event.target);

    if (!isClickInside && dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    }
  });
}
