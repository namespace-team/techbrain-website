document.addEventListener("DOMContentLoaded", function () {
  // Get all the tab links
  const tabLinks = document.querySelectorAll(".header-tab");

  // Add click event listeners to each tab
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Remove the active class from all tabs
      tabLinks.forEach(function (link) {
        link.classList.remove("active-tab");
      });

      // Add the active class to the clicked tab
      this.classList.add("active-tab");
    });
  });
});
