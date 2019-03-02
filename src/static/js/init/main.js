import GLOBAL from '../global/global';
import Menu from '../components/Menu';
import './data';
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

function initSwiper() {
 
  const common = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }; 

  Array.prototype.forEach.call(document.getElementsByClassName('JS-Slider'), function(elem) {
    if (!elem.classList.contains("JS-Slider-Ready")) {
      const elParams = GLOBAL.parseData(elem.dataset.sliderParams);
      const params = Object.assign({}, common, elParams);

      new Swiper(elem, params);
    }
  });
}


function initMenu() {
  if (typeof Menu === 'undefined') {
    return false;
  }

  const common = {};

  Array.prototype.forEach.call(document.getElementsByClassName('JS-Menu'), function(elem) {
    if (!elem.classList.contains("JS-Menu-Ready")) {
      const elParams = GLOBAL.parseData(elem.dataset.menuParams);
      const params = Object.assign({}, common, elParams);

      new Menu(elem, params);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initMenu();
  initSwiper();
});




