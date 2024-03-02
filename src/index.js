/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import images from './dom';
import nav from './navlinks';

nav();
images();
window.addEventListener('scroll', () => {
  const header = document.querySelector('.hero-navigation');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const hambaga = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation-list');

hambaga.addEventListener('click', () => {
  hambaga.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navlist').forEach((n) => n.addEventListener('click', () => {
  hambaga.classList.remove('active');
  navMenu.classList.remove('active');
}));