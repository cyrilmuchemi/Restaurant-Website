class Navigation {
  static testimonyNav() {
    const testList = document.querySelectorAll('.testimony-li');

    testList.forEach((list) => {
      list.addEventListener('click', () => {
        testList.forEach((item) => {
          item.classList.remove('active');
        });

        list.classList.add('active');
      });
    });
  }

  static heroLinks() {
    const heroNav = document.querySelectorAll('.navlist');

    heroNav.forEach((nav) => {
      nav.addEventListener('click', () => {
        heroNav.forEach((item) => {
          item.classList.remove('active-link');
        });

        nav.classList.add('active-link');
      });
    });
  }

  static menuLinks() {
    const links = document.querySelectorAll('.menu-link');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        links.forEach((item) => {
          item.classList.remove('active-link');
        });

        link.classList.add('active-link');
      });
    });
  }
}

export default function nav() {
  Navigation.testimonyNav();
  Navigation.heroLinks();
  Navigation.menuLinks();
}