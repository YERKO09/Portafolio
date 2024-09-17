document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footers = document.querySelectorAll(".footer-container");
      footers.forEach((footer) => {
        footer.innerHTML = data;
      });
    });
});
