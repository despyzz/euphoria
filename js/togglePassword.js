const passwords = document.querySelectorAll('.password');
passwords.forEach(function (password) {
  const toggle = password.querySelector('.hide');
  const toggleIcon = password.querySelector('.fa-eye-slash');
  const toggleSlashIcon = password.querySelector('.fa-eye');
  const toggleShowText = password.querySelector('.show__text');
  const toggleHideText = password.querySelector('.hide__text');

  const input = password.querySelector('input');

  input.type = "password";

  toggleSlashIcon.style.display = "block";
  toggleShowText.style.display = "block";

  toggleHideText.style.display = "none";
  toggleIcon.style.display = "none";

  toggle.addEventListener("click", function () {
    if (input.type === "password") {
      input.type = "text";

      toggleHideText.style.display = "block";
      toggleIcon.style.display = "block";

      toggleSlashIcon.style.display = "none";
      toggleShowText.style.display = "none";

    } else {
      input.type = "password";
      toggleSlashIcon.style.display = "block";
      toggleShowText.style.display = "block";

      toggleHideText.style.display = "none";
      toggleIcon.style.display = "none";
    }
  });
});