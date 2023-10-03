const tabLinks = document.querySelectorAll('.project-tab')

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', (event) => {
    console.log('Tab link clicked');
    tabLinks.forEach((link) => {
      link.classList.remove('active-tab');
    });

    tabLink.classList.add('active-tab');
  });
});
