const swiper = new Swiper ('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',
 function() {
   burger.classList.toggle('burger--active');
   menu.classList.toggle('header__nav--active');
   document.body.classList.toggle('stop-scroll');
 });
menulinks.forEach(function(el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
        tabsBtn.classList.remove ('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion');

const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
}

cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
}
