const tabLinks = document.querySelectorAll('.project-tab')

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', (event) => {
    console.log('Tab link clicked');
    tabLinks.forEach((link) => {
      link.classList.remove('active-tab');
      link.classList.add('inactive-tab');
    });

    tabLink.classList.add('active-tab');
    tabLink.classList.remove('inactive-tab');
  });
});
