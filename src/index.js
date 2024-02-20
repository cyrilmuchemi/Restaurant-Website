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
import foodCategory from './images/Food Category.png';
import category1 from './images/category-1.png';
import category2 from './images/category-2.png';
import category3 from './images/category-3.png';
import category4 from './images/category-4.png';

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

  static foodCategory() {
    const foodCategoryBox = document.querySelector('.food-category');
    const foodCat = new Image();
    foodCat.src = foodCategory;
    foodCategoryBox.appendChild(foodCat);
    return foodCategoryBox;
  }

  static category1() {
    const firstCategory = document.querySelector('.category-image-1');
    const firstImage = new Image();
    firstImage.src = category1;
    firstCategory.appendChild(firstImage);
    return firstCategory;
  }

  static category2() {
    const secondCategory = document.querySelector('.category-image-2');
    const secondImage = new Image();
    secondImage.src = category2;
    secondCategory.appendChild(secondImage);
    return secondCategory;
  }

  static category3() {
    const thirdCategory = document.querySelector('.category-image-3');
    const thirdImage = new Image();
    thirdImage.src = category3;
    thirdCategory.appendChild(thirdImage);
    return thirdCategory;
  }

  static category4() {
    const fourthCategory = document.querySelector('.category-image-4');
    const fourthImage = new Image();
    fourthImage.src = category4;
    fourthCategory.appendChild(fourthImage);
    return fourthCategory;
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
Background.foodCategory();
Background.category1();
Background.category2();
Background.category3();
Background.category4();