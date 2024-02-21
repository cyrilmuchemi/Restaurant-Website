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
import topPic1 from './images/top-row-1.png';
import topPic2 from './images/top-row-2.png';
import bottomPic1 from './images/bottom-row-1.png';
import bottomPic2 from './images/bottom-row-2.png';
import bottomPic3 from './images/bottom-row-3.png';
import bottomPic4 from './images/bottom-row-4.png';
import whyChooseUS from './images/Why Choose us.png';
import hamburger from './images/Hamburger.png';
import cookie from './images/Cookie.png';
import wine from './images/Wine.png';
import chef from './images/chefs.png';
import foodItems from './images/food-items.png';
import forks from './images/forks.png';
import pizza from './images/pizza.png';

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

  static topImage1() {
    const topImg1Box = document.querySelector('.top-row-1');
    const topImg1 = new Image();
    topImg1.src = topPic1;
    topImg1Box.appendChild(topImg1);
    return topImg1Box;
  }

  static topImage2() {
    const topImg2Box = document.querySelector('.top-row-2');
    const topImg2 = new Image();
    topImg2.src = topPic2;
    topImg2Box.appendChild(topImg2);
    return topImg2Box;
  }

  static bottomImage1() {
    const bottomImageBox1 = document.querySelector('.bottom-row-1');
    const imgBox1 = new Image();
    imgBox1.src = bottomPic1;
    bottomImageBox1.appendChild(imgBox1);
    return bottomImageBox1;
  }

  static bottomImage2() {
    const bottomImageBox2 = document.querySelector('.bottom-row-2');
    const imgBox2 = new Image();
    imgBox2.src = bottomPic2;
    bottomImageBox2.appendChild(imgBox2);
    return bottomImageBox2;
  }

  static bottomImage3() {
    const bottomImageBox3 = document.querySelector('.bottom-row-3');
    const imgBox3 = new Image();
    imgBox3.src = bottomPic3;
    bottomImageBox3.appendChild(imgBox3);
    return bottomImageBox3;
  }

  static bottomImage4() {
    const bottomImageBox4 = document.querySelector('.bottom-row-4');
    const imgBox4 = new Image();
    imgBox4.src = bottomPic4;
    bottomImageBox4.appendChild(imgBox4);
    return bottomImageBox4;
  }

  static whyChooseUS() {
    const whyChooseUSBox = document.querySelector('.why-choose-us');
    const chooseImg = new Image();
    chooseImg.src = whyChooseUS;
    whyChooseUSBox.appendChild(chooseImg);
    return whyChooseUSBox;
  }

  static hamburger() {
    const fastFood = document.querySelector('.fast-food');
    const fastFoodImg = new Image();
    fastFoodImg.src = hamburger;
    fastFood.appendChild(fastFoodImg);
    return fastFood;
  }

  static cookie() {
    const lunch = document.querySelector('.lunch');
    const cookieImg = new Image();
    cookieImg.src = cookie;
    lunch.appendChild(cookieImg);
    return lunch;
  }

  static wine() {
    const wineBox = document.querySelector('.dinner');
    const wineImg = new Image();
    wineImg.src = wine;
    wineBox.appendChild(wineImg);
    return wineBox;
  }

  static chefs() {
    const chefBox = document.querySelector('.professional-chefs');
    const chefImg = new Image();
    chefImg.src = chef;
    chefBox.appendChild(chefImg);
    return chefBox;
  }

  static foodItems() {
    const foodItemBox = document.querySelector('.items-of-food');
    const foodItemImg = new Image();
    foodItemImg.src = foodItems;
    foodItemBox.appendChild(foodItemImg);
    return foodItemBox;
  }

  static experience() {
    const experienceBox = document.querySelector('.years-of-experience');
    const experienceImg = new Image();
    experienceImg.src = forks;
    experienceBox.appendChild(experienceImg);
    return experienceBox;
  }

  static customer() {
    const customerBox = document.querySelector('.happy-customers');
    const pizzaImage = new Image();
    pizzaImage.src = pizza;
    customerBox.appendChild(pizzaImage);
    return customerBox;
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
Background.topImage1();
Background.topImage2();
Background.bottomImage1();
Background.bottomImage2();
Background.bottomImage3();
Background.bottomImage4();
Background.whyChooseUS();
Background.hamburger();
Background.cookie();
Background.wine();
Background.chefs();
Background.foodItems();
Background.experience();
Background.customer();