import './style.css';
import bgImage from './images/hero-bg-min.jpg';

function heroBackground() {
  const background = new Image();
  background.src = bgImage;
  const bgHero = document.querySelector('.hero');
  bgHero.appendChild(background);
  return bgHero;
}

heroBackground();
