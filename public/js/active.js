document.addEventListener('DOMContentLoaded', function () {
  const tabLinks = document.querySelectorAll('.active-tab');
  let activeSectionId = null;

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', (event) => {
      tabLinks.forEach((link) => {
        link.setAttribute('aria-selected', 'false');
      });

      tabLink.setAttribute('aria-selected', 'true');
    });
  });

  const homeLink = document.querySelector('#home-link');

  homeLink.addEventListener('click', function (e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (activeSectionId) {
      const previousSection = document.getElementById(activeSectionId);
      if (previousSection) {
        previousSection.removeAttribute('id');
      }
    }

    activeSectionId = null;

    history.pushState(null, null, window.location.pathname);
  });

  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        activeSectionId = section.id;
      }
    });
  });
});
