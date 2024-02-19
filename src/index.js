/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import bgImage from './images/hero-bg-min.jpg';
import topLine from './images/line-top.png';
import bottomLine from './images/line-bottom.png';
import quick from './images/quick-amusing.png';
import food from './images/hero-food.png';
import '@fortawesome/fontawesome-free/css/all.css';

class Background {
  static heroBackground() {
    const background = new Image();
    background.src = bgImage;
    const bgHero = document.querySelector('.hero');
    bgHero.appendChild(background);
    return bgHero;
  }

  static heroContent1() {
    const line1 = document.querySelector('.line-1');
    const firstLine = new Image();
    firstLine.src = topLine;
    line1.appendChild(firstLine);
    return line1;
  }

  static heroContent2() {
    const line2 = document.querySelector('.line-2');
    const secondLine = new Image();
    secondLine.src = bottomLine;
    line2.appendChild(secondLine);
    return line2;
  }

  static heroTextImage() {
    const quickBox = document.querySelector('.stylistic-heading');
    const quickImage = new Image();
    quickImage.src = quick;
    quickBox.appendChild(quickImage);
    return quickBox;
  }

  static heroFood() {
    const foodDiv = document.querySelector('.hero-image');
    const foodImage = new Image();
    foodImage.src = food;
    foodDiv.appendChild(foodImage);
    return foodDiv;
  }
}

Background.heroBackground();
Background.heroContent1();
Background.heroContent2();
Background.heroTextImage();
Background.heroFood();
