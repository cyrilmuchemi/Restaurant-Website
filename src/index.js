/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import bgImage from './images/hero-bg-min.jpg';
import '@fortawesome/fontawesome-free/css/all.css';

function heroBackground() {
  const background = new Image();
  background.src = bgImage;
  const bgHero = document.querySelector('.hero');
  bgHero.appendChild(background);
  return bgHero;
}

heroBackground();
