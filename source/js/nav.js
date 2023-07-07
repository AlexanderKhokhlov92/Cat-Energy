window.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const navigationLinks = document.querySelectorAll('.navigation_link');

  for (let i = 0; i < navigationLinks.length; i++) {
    const link = navigationLinks[i];

    if (link.getAttribute('href') === '#') {
      link.classList.add('active-link');
      link.addEventListener('click', function (event) {
        event.preventDefault();
      });
    } else {
      link.classList.remove('active-link');
    }
  }
});
