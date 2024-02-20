/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import bgImage from './images/hero-bg-min.jpg';
import topLine from './images/line-top.png';
import bottomLine from './images/line-bottom.png';
import quick from './images/quick-amusing.png';
import food from './images/hero-food.png';
import '@fortawesome/fontawesome-free/css/all.css';
import check from './images/check.png';
import aboutImg from './images/About-us.png';
import imgTop from './images/img-top.png';
import bottomLeft from './images/bottom-img-left.png';
import bottomRight from './images/bottom-img-right.png';

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

  static checkAppend() {
    const checkDivs = document.querySelectorAll('.check');
    checkDivs.forEach((checkDiv) => {
      const checkImage = new Image();
      checkImage.src = check;
      checkDiv.appendChild(checkImage);
    });
    return checkDivs;
  }

  static aboutTextImage() {
    const aboutHead = document.querySelector('.about-head');
    const aboutImage = new Image();
    aboutImage.src = aboutImg;
    aboutHead.appendChild(aboutImage);
    return aboutHead;
  }

  static topAboutImg() {
    const aboutTop = document.querySelector('.about-us-img-top');
    const topImg = new Image();
    topImg.src = imgTop;
    aboutTop.appendChild(topImg);
    return aboutTop;
  }

  static bottomLeftImg() {
    const aboutImgLeft = document.querySelector('.img-bottom-left');
    const leftImg = new Image();
    leftImg.src = bottomLeft;
    aboutImgLeft.appendChild(leftImg);
    return aboutImgLeft;
  }

  static bottomRightImg() {
    const aboutImgRight = document.querySelector('.img-bottom-right');
    const rightImg = new Image();
    rightImg.src = bottomRight;
    aboutImgRight.appendChild(rightImg);
    return aboutImgRight;
  }
}

Background.heroBackground();
Background.heroContent1();
Background.heroContent2();
Background.heroTextImage();
Background.heroFood();
Background.aboutTextImage();
Background.checkAppend();
Background.topAboutImg();
Background.bottomLeftImg();
Background.bottomRightImg();