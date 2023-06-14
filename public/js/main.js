/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ButtonTop/script.js":
/*!********************************************!*\
  !*** ./src/components/ButtonTop/script.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonTop": function() { return /* binding */ ButtonTop; }
/* harmony export */ });
var ButtonTop = function ButtonTop() {
  $('.buttonTop').on('click', function () {
    goToTopScroll();
  });
  var checkPositionScrollForShowButton = function checkPositionScrollForShowButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('.buttonTop').css('display', 'block');
    } else {
      $('.buttonTop').css('display', 'none');
    }
  };
  var goToTopScroll = function goToTopScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  window.onscroll = function () {
    checkPositionScrollForShowButton();
  };
};

/***/ }),

/***/ "./src/components/Feedback/script.js":
/*!*******************************************!*\
  !*** ./src/components/Feedback/script.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feedback": function() { return /* binding */ Feedback; }
/* harmony export */ });
var Feedback = function Feedback() {
  var feedbackSwiper = new Swiper('.feedbackSwiper', {
    navigation: {
      nextEl: '.feedback .feedback__controls .swiper-button-next',
      prevEl: '.feedback .feedback__controls .swiper-button-prev'
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
      el: '.feedback .feedback__controls .swiper-pagination'
    },
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      310: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1000: {
        slidesPerView: 4
      },
      1400: {
        slidesPerView: 5
      }
    },
    slidesPerView: 5,
    spaceBetween: 35
  });
};

/***/ }),

/***/ "./src/components/Footer/script.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/script.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* binding */ Footer; }
/* harmony export */ });
var Footer = function Footer() {};

/***/ }),

/***/ "./src/components/FormBase/script.js":
/*!*******************************************!*\
  !*** ./src/components/FormBase/script.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBase": function() { return /* binding */ FormBase; }
/* harmony export */ });
var FormBase = function FormBase() {};

/***/ }),

/***/ "./src/components/FormFile/script.js":
/*!*******************************************!*\
  !*** ./src/components/FormFile/script.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormFile": function() { return /* binding */ FormFile; }
/* harmony export */ });
var FormFile = function FormFile() {};

/***/ }),

/***/ "./src/components/Header/script.js":
/*!*****************************************!*\
  !*** ./src/components/Header/script.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
var Header = function Header() {
  $('.headerCitySelect').on('click', function () {
    if ($(this).hasClass('headerCitySelect-item-active')) {
      $(this).removeClass('headerCitySelect-item-active');
      $('.headerCitySelect-block').css('display', 'none');
    } else {
      $(this).addClass('headerCitySelect-item-active');
      $('.headerCitySelect-block').css('display', 'block');
    }
  });

  // Navbar

  var arrActiveNavbar = ['navbarArrowProject', 'navbarArrowCompony', 'navbarArrowBuy', 'navbarArrowHelper'];
  arrActiveNavbar.forEach(function (el) {
    $("#".concat(el)).hover(function () {
      $("#".concat(el, " .navbar__arrow-list")).addClass('navbar__arrow-list__active');
      $('.navbar__background').addClass('navbar__background-active');
      $('body').css('overflow', 'hidden');
    }, function () {
      $("#".concat(el, " .navbar__arrow-list")).removeClass('navbar__arrow-list__active');
      $('.navbar__background').removeClass('navbar__background-active');
      $('body').css('overflow', 'visible');
    });
  });
  $('#navbarArrowCatalog, .navbar__arrow-block').hover(function () {
    $('.navbar__arrow-block').addClass('navbar__arrow-block__active');
    $('body').css('overflow', 'hidden');
    $('.navbar__background').addClass('navbar__background-active');
  }, function () {
    $('.navbar__arrow-block').removeClass('navbar__arrow-block__active');
    $('body').css('overflow', 'visible');
    $('.navbar__background').removeClass('navbar__background-active');
  });
  $('.navbar__arrow-nav').hover(function () {
    $('.navbar__arrow-nav').removeClass('navbar__arrow-nav__active');
    $(this).addClass('navbar__arrow-nav__active');
    $('.navbar__arrow-con').removeClass('navbar__arrow-con__active');
    $(".navbar__arrow-con[data-content=\"".concat($(this).attr('data-con'), "\"]")).addClass('navbar__arrow-con__active');
  });

  // Menu

  $('.header__menu').on('click', function () {
    $('.menu__mobile').removeClass('display-n');
    $('.header__close').removeClass('display-n');
    $('.header__menu').addClass('display-n');
    $('body').css('overflow', 'hidden');
  });
  $('.header__close').on('click', function () {
    $('body').css('overflow', 'visible');
    $('.menu__mobile').addClass('display-n');
    $('.header__menu').removeClass('display-n');
    $('.header__close').addClass('display-n');
  });
  $('.menu__mobile-accordion__header').on('click', function () {
    if ($('.menu__mobile-accordion').hasClass('menu__mobile-accordion__active')) {
      $('.menu__mobile-accordion').removeClass('menu__mobile-accordion__active');
    } else {
      $('.menu__mobile-accordion').addClass('menu__mobile-accordion__active');
    }
  });
  $('.menu__mobile-accord__header').on('click', function () {
    if ($('.menu__mobile-accord').hasClass('menu__mobile-accord__active')) {
      $('.menu__mobile-accord').removeClass('menu__mobile-accord__active');
    } else {
      $('.menu__mobile-accord').addClass('menu__mobile-accord__active');
    }
  });
};

/***/ }),

/***/ "./src/components/Helper/script.js":
/*!*****************************************!*\
  !*** ./src/components/Helper/script.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helper": function() { return /* binding */ Helper; }
/* harmony export */ });
var Helper = function Helper() {};

/***/ }),

/***/ "./src/components/MainBanner/script.js":
/*!*********************************************!*\
  !*** ./src/components/MainBanner/script.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainBanner": function() { return /* binding */ MainBanner; }
/* harmony export */ });
var MainBanner = function MainBanner() {};

/***/ }),

/***/ "./src/components/Slider/script.js":
/*!*****************************************!*\
  !*** ./src/components/Slider/script.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": function() { return /* binding */ Slider; }
/* harmony export */ });
var Slider = function Slider() {
  var mainSliderSwiper = new Swiper('.mainSliderSwiper', {
    navigation: {
      nextEl: '.slider__container .swiper-controls .swiper-button-next',
      prevEl: '.slider__container .swiper-controls .swiper-button-prev'
    },
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
      el: '.slider__container .swiper-controls .swiper-pagination'
    }
  });
};

/***/ }),

/***/ "./src/components/Space/script.js":
/*!****************************************!*\
  !*** ./src/components/Space/script.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Space": function() { return /* binding */ Space; }
/* harmony export */ });
var Space = function Space() {};

/***/ }),

/***/ "./src/components/Team/script.js":
/*!***************************************!*\
  !*** ./src/components/Team/script.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Team": function() { return /* binding */ Team; }
/* harmony export */ });
var Team = function Team() {
  var teamSwiper = new Swiper('.teamSwiper', {
    navigation: {
      nextEl: '.team .team__controls .swiper-button-next',
      prevEl: '.team .team__controls .swiper-button-prev'
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
      el: '.team .team__controls .swiper-pagination'
    },
    slidesPerView: 4,
    spaceBetween: 35,
    breakpoints: {
      310: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      700: {
        slidesPerView: 2
      },
      1050: {
        slidesPerView: 3
      },
      1350: {
        slidesPerView: 4
      }
    }
  });
};

/***/ }),

/***/ "./src/components/modals/ModalCollection/script.js":
/*!*********************************************************!*\
  !*** ./src/components/modals/ModalCollection/script.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCollection": function() { return /* binding */ ModalCollection; }
/* harmony export */ });
var ModalCollection = function ModalCollection() {
  var modalCollectionSlider = new Swiper('.modalCollectionSlider', {
    navigation: {
      nextEl: '.modalCollection__wrapper  .swiper-controls .swiper-button-next',
      prevEl: '.modalCollection__wrapper  .swiper-controls .swiper-button-prev'
    },
    observer: true,
    observeParents: true,
    effect: 'fade'
  });
  var modalCollectionSlideSlider = new Swiper('.modalCollectionSlideSlider', {
    pagination: {
      el: '.modalCollectionSlide__slider .swiper-control .swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"modalCollectionSlide__slider-button ".concat(className, "\"> <img src=\"./img/pages/catalog/catalogMain/card-1.png\" alt=\"\"></div>");
      }
    },
    effect: 'fade',
    navigation: {
      nextEl: '.modalCollectionSlide__slider .swiper-control .swiper-button-next',
      prevEl: '.modalCollectionSlide__slider .swiper-control .swiper-button-prev'
    }
  });
  $('.catalogCollectionCard').on('click', function () {
    var activeElement = $(this).attr('aria-label');
    $('.modalCollection').removeClass('display-n');
    $('body').css('overflow', 'hidden');
    modalCollectionSlider.activeIndex = Number(activeElement) - 1;
  });
  $('.modalCollection__close').on('click', function () {
    $('body').css('overflow', 'visible');
    $('.modalCollection').addClass('display-n');
  });
};

/***/ }),

/***/ "./src/components/modals/ModalFeedback/script.js":
/*!*******************************************************!*\
  !*** ./src/components/modals/ModalFeedback/script.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalFeedback": function() { return /* binding */ ModalFeedback; }
/* harmony export */ });
var ModalFeedback = function ModalFeedback() {
  var modalFeedbackSliderSwiper = new Swiper('.modalFeedbackSlider', {
    navigation: {
      nextEl: '.modalFeedback__wrapper  .swiper-controls .swiper-button-next',
      prevEl: '.modalFeedback__wrapper  .swiper-controls .swiper-button-prev'
    },
    effect: 'fade'
  });
  $('.feedback__slider .swiper-slide').on('click', function () {
    var activeElement = $(this).attr('aria-label').split(' / ')[0];
    $('.modalFeedback').removeClass('display-n');
    $('body').css('overflow', 'hidden');
    modalFeedbackSliderSwiper.activeIndex = +activeElement + 1;
  });
  $('.modalFeedback__close').on('click', function () {
    $('body').css('overflow', 'visible');
    $('.modalFeedback').addClass('display-n');
  });
};

/***/ }),

/***/ "./src/components/modals/ModalPhoto/script.js":
/*!****************************************************!*\
  !*** ./src/components/modals/ModalPhoto/script.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPhoto": function() { return /* binding */ ModalPhoto; }
/* harmony export */ });
var ModalPhoto = function ModalPhoto() {
  $('.slider__item, .articleDetailCard__banner, .productionStages__banner').on('click', function () {
    var dataPhoto = $(this).attr('aria-photo');
    $('.modalPhoto__wrapper img').attr('src', dataPhoto);
    $('.modalPhoto').removeClass('display-n');
    $('body').css('overflow', 'hidden');
  });
  $('.modalPhoto__close').on('click', function () {
    $('body').css('overflow', 'visible');
    $('.modalPhoto').addClass('display-n');
  });
};

/***/ }),

/***/ "./src/components/modals/ModalVideo/script.js":
/*!****************************************************!*\
  !*** ./src/components/modals/ModalVideo/script.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalVideo": function() { return /* binding */ ModalVideo; }
/* harmony export */ });
var ModalVideo = function ModalVideo() {
  $('.goods-video__video, .catalog-description__block-video, .about-description__video, .indexAbout__content-video, .indexMain__right-video').on('click', function () {
    var dataVideo = $(this).attr('aria-video');
    $('.modalVideo__wrapper iframe').attr('src', dataVideo);
    $('.modalVideo').removeClass('display-n');
    $('body').css('overflow', 'hidden');
  });
  $('.modalVideo__close').on('click', function () {
    $('body').css('overflow', 'visible');
    $('.modalVideo').addClass('display-n');
  });
};

/***/ }),

/***/ "./src/components/pages/About/AboutDescription/script.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/About/AboutDescription/script.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutDescription": function() { return /* binding */ AboutDescription; }
/* harmony export */ });
var AboutDescription = function AboutDescription() {
  var aboutDescriptionSwiper = new Swiper('.aboutDescriptionSwiper', {
    navigation: {
      nextEl: '.about-description__slider .swiper-controls .swiper-button-next',
      prevEl: '.about-description__slider .swiper-controls .swiper-button-prev'
    },
    pagination: {
      el: '.about-description__slider .swiper-controls .swiper-pagination'
    },
    effect: 'fade'
  });
};

/***/ }),

/***/ "./src/components/pages/About/AboutLink/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/About/AboutLink/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutLink": function() { return /* binding */ AboutLink; }
/* harmony export */ });
var AboutLink = function AboutLink() {};

/***/ }),

/***/ "./src/components/pages/About/AboutMission/script.js":
/*!***********************************************************!*\
  !*** ./src/components/pages/About/AboutMission/script.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMission": function() { return /* binding */ AboutMission; }
/* harmony export */ });
var AboutMission = function AboutMission() {};

/***/ }),

/***/ "./src/components/pages/About/AboutSng/script.js":
/*!*******************************************************!*\
  !*** ./src/components/pages/About/AboutSng/script.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutSng": function() { return /* binding */ AboutSng; }
/* harmony export */ });
var AboutSng = function AboutSng() {};

/***/ }),

/***/ "./src/components/pages/About/AboutСharact/script.js":
/*!***********************************************************!*\
  !*** ./src/components/pages/About/AboutСharact/script.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutCharact": function() { return /* binding */ AboutCharact; }
/* harmony export */ });
var AboutCharact = function AboutCharact() {};

/***/ }),

/***/ "./src/components/pages/Add/AddCatalog/script.js":
/*!*******************************************************!*\
  !*** ./src/components/pages/Add/AddCatalog/script.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCatalog": function() { return /* binding */ AddCatalog; }
/* harmony export */ });
var AddCatalog = function AddCatalog() {};

/***/ }),

/***/ "./src/components/pages/Add/AddDescription/script.js":
/*!***********************************************************!*\
  !*** ./src/components/pages/Add/AddDescription/script.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDescription": function() { return /* binding */ AddDescription; }
/* harmony export */ });
var AddDescription = function AddDescription() {
  var addDescriptionSliderSwiper = new Swiper('.addDescriptionSliderSwiper', {
    navigation: {
      nextEl: '.add-description__slider .swiper-controls .swiper-button-next',
      prevEl: '.add-description__slider .swiper-controls .swiper-button-prev'
    },
    pagination: {
      el: '.add-description__slider .swiper-controls .swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"add-description__slider-button ".concat(className, "\"> <img src=\"./img/pages/catalog/catalogMain/card-1.png\" alt=\"\"></div>");
      }
    },
    mousewheel: true,
    keyboard: true,
    effect: 'fade'
  });
};

/***/ }),

/***/ "./src/components/pages/ArticleDetail/script.js":
/*!******************************************************!*\
  !*** ./src/components/pages/ArticleDetail/script.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetail": function() { return /* binding */ ArticleDetail; }
/* harmony export */ });
var ArticleDetail = function ArticleDetail() {};

/***/ }),

/***/ "./src/components/pages/Articles/ArticlesMain/script.js":
/*!**************************************************************!*\
  !*** ./src/components/pages/Articles/ArticlesMain/script.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesMain": function() { return /* binding */ ArticlesMain; }
/* harmony export */ });
var ArticlesMain = function ArticlesMain() {};

/***/ }),

/***/ "./src/components/pages/CaseDetail/CaseDetailDescription/script.js":
/*!*************************************************************************!*\
  !*** ./src/components/pages/CaseDetail/CaseDetailDescription/script.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseDetailDescription": function() { return /* binding */ CaseDetailDescription; }
/* harmony export */ });
var CaseDetailDescription = function CaseDetailDescription() {};

/***/ }),

/***/ "./src/components/pages/Cases/CasesBase/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/Cases/CasesBase/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CasesBase": function() { return /* binding */ CasesBase; }
/* harmony export */ });
var CasesBase = function CasesBase() {};

/***/ }),

/***/ "./src/components/pages/Cases/CasesDescription/script.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/Cases/CasesDescription/script.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CasesDescription": function() { return /* binding */ CasesDescription; }
/* harmony export */ });
var CasesDescription = function CasesDescription() {};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogAddition/script.js":
/*!****************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogAddition/script.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogAddition": function() { return /* binding */ CatalogAddition; }
/* harmony export */ });
var CatalogAddition = function CatalogAddition() {
  var arrListSlider = ['addition', 'goods', 'catalog'];
  for (var i = 0; i <= arrListSlider.length; i++) {
    var catalogAdditionSlider = new Swiper('.catalogAdditionSlider', {
      pagination: {
        clickable: true,
        dynamicBullets: true,
        el: ".catalog-addition__slider.".concat(arrListSlider[i], " .swiper-controls .swiper-pagination")
      },
      navigation: {
        nextEl: ".catalog-addition__slider.".concat(arrListSlider[i], " .swiper-controls .swiper-button-next"),
        prevEl: ".catalog-addition__slider.".concat(arrListSlider[i], " .swiper-controls .swiper-button-prev")
      },
      fadeEffect: {
        crossFade: true
      },
      mousewheel: true,
      keyboard: true,
      slidesPerView: 4,
      spaceBetween: 44,
      observer: true,
      observeParents: true,
      breakpoints: {
        310: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        700: {
          slidesPerView: 2
        },
        1050: {
          slidesPerView: 3
        },
        1350: {
          slidesPerView: 4
        }
      }
    });
  }
};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogBanner/script.js":
/*!**************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogBanner/script.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogBanner": function() { return /* binding */ CatalogBanner; }
/* harmony export */ });
var CatalogBanner = function CatalogBanner() {};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogCase/script.js":
/*!************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogCase/script.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogCase": function() { return /* binding */ CatalogCase; }
/* harmony export */ });
var CatalogCase = function CatalogCase() {
  var arrListSlider = ['catalog', 'caseDetail', 'goods'];
  for (var i = 0; i <= arrListSlider.length; i++) {
    var catalogCaseSlider = new Swiper('.catalogCaseSlider', {
      pagination: {
        el: ".catalog-case__slider.".concat(arrListSlider[i], " .swiper-controls .swiper-pagination")
      },
      navigation: {
        nextEl: ".catalog-case__slider.".concat(arrListSlider[i], " .swiper-controls .swiper-button-next"),
        prevEl: ".catalog-case__slider.".concat(arrListSlider[i], " .swiper-controls .swiper-button-prev")
      },
      mousewheel: true,
      keyboard: true,
      slidesPerView: 3,
      spaceBetween: 35,
      breakpoints: {
        310: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        1050: {
          slidesPerView: 2
        },
        1350: {
          slidesPerView: 3
        }
      }
    });
  }
};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogCollection/script.js":
/*!******************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogCollection/script.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogCollection": function() { return /* binding */ CatalogCollection; }
/* harmony export */ });
var CatalogCollection = function CatalogCollection() {
  var catalogCollectionSteps = new Swiper('.catalogCollectionSlider', {
    navigation: {
      nextEl: '.catalog-collection .catalog-collection__control .swiper-button-next',
      prevEl: '.catalog-collection .catalog-collection__control .swiper-button-prev'
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
      el: '.catalog-collection .catalog-collection__control .swiper-pagination'
    },
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      310: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 2
      },
      1400: {
        slidesPerView: 2
      }
    },
    slidesPerView: 2,
    spaceBetween: 35
  });
};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogDescription/script.js":
/*!*******************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogDescription/script.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogDescription": function() { return /* binding */ CatalogDescription; }
/* harmony export */ });
var CatalogDescription = function CatalogDescription() {};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogList/script.js":
/*!************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogList/script.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogList": function() { return /* binding */ CatalogList; }
/* harmony export */ });
var CatalogList = function CatalogList() {};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogMain/script.js":
/*!************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogMain/script.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogMain": function() { return /* binding */ CatalogMain; }
/* harmony export */ });
var CatalogMain = function CatalogMain() {
  var catalogMainSlider = new Swiper('.catalogMainSlider', {
    pagination: {
      el: '.catalog-main__slider  .swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"catalog-main__slider-button ".concat(className, "\"> <img src=\"./img/pages/catalog/catalogMain/card-1.png\" alt=\"\"></div>");
      }
    },
    navigation: {
      nextEl: '.catalog-main__slider  .swiper-controls .swiper-button-next',
      prevEl: '.catalog-main__slider  .swiper-controls .swiper-button-prev'
    }
  });
};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogRequest/script.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogRequest/script.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogRequest": function() { return /* binding */ CatalogRequest; }
/* harmony export */ });
var CatalogRequest = function CatalogRequest() {};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogStages/script.js":
/*!**************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogStages/script.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogStages": function() { return /* binding */ CatalogStages; }
/* harmony export */ });
var CatalogStages = function CatalogStages() {};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogTable/script.js":
/*!*************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogTable/script.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogTable": function() { return /* binding */ CatalogTable; }
/* harmony export */ });
var CatalogTable = function CatalogTable() {};

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogText/script.js":
/*!************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogText/script.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogText": function() { return /* binding */ CatalogText; }
/* harmony export */ });
var CatalogText = function CatalogText() {};

/***/ }),

/***/ "./src/components/pages/Connect/ConnectContent/script.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/Connect/ConnectContent/script.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectContent": function() { return /* binding */ ConnectContent; }
/* harmony export */ });
var ConnectContent = function ConnectContent() {};

/***/ }),

/***/ "./src/components/pages/Contact/ContactGeo/script.js":
/*!***********************************************************!*\
  !*** ./src/components/pages/Contact/ContactGeo/script.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactGeo": function() { return /* binding */ ContactGeo; }
/* harmony export */ });
var ContactGeo = function ContactGeo() {};

/***/ }),

/***/ "./src/components/pages/Contact/ContactMain/script.js":
/*!************************************************************!*\
  !*** ./src/components/pages/Contact/ContactMain/script.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactMain": function() { return /* binding */ ContactMain; }
/* harmony export */ });
var ContactMain = function ContactMain() {};

/***/ }),

/***/ "./src/components/pages/Decision/DecisionDescription/script.js":
/*!*********************************************************************!*\
  !*** ./src/components/pages/Decision/DecisionDescription/script.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecisionDescription": function() { return /* binding */ DecisionDescription; }
/* harmony export */ });
var DecisionDescription = function DecisionDescription() {};

/***/ }),

/***/ "./src/components/pages/EquipmentDetail/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/EquipmentDetail/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentDetail": function() { return /* binding */ EquipmentDetail; }
/* harmony export */ });
var EquipmentDetail = function EquipmentDetail() {};

/***/ }),

/***/ "./src/components/pages/Goods/GoodsDescription/script.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/Goods/GoodsDescription/script.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsDescription": function() { return /* binding */ GoodsDescription; }
/* harmony export */ });
var GoodsDescription = function GoodsDescription() {};

/***/ }),

/***/ "./src/components/pages/Goods/GoodsMain/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/Goods/GoodsMain/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsMain": function() { return /* binding */ GoodsMain; }
/* harmony export */ });
var GoodsMain = function GoodsMain() {
  var goodsMainSliderSwiper = new Swiper('.goodsMainSliderSwiper', {
    pagination: {
      el: '.goods-main__slider .swiper-controls .swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"goods-main__slider-button ".concat(className, "\"> <img src=\"./img/pages/catalog/catalogMain/card-1.png\" alt=\"\"></div>");
      }
    },
    effect: 'fade',
    navigation: {
      nextEl: '.goods-main__slider .swiper-controls .swiper-button-next',
      prevEl: '.goods-main__slider .swiper-controls .swiper-button-prev'
    }
  });
};

/***/ }),

/***/ "./src/components/pages/Goods/GoodsVideo/script.js":
/*!*********************************************************!*\
  !*** ./src/components/pages/Goods/GoodsVideo/script.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsVideo": function() { return /* binding */ GoodsVideo; }
/* harmony export */ });
var GoodsVideo = function GoodsVideo() {};

/***/ }),

/***/ "./src/components/pages/Helper/HelperArticles/script.js":
/*!**************************************************************!*\
  !*** ./src/components/pages/Helper/HelperArticles/script.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperArticles": function() { return /* binding */ HelperArticles; }
/* harmony export */ });
var HelperArticles = function HelperArticles() {};

/***/ }),

/***/ "./src/components/pages/Helper/HelperDocument/script.js":
/*!**************************************************************!*\
  !*** ./src/components/pages/Helper/HelperDocument/script.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperDocument": function() { return /* binding */ HelperDocument; }
/* harmony export */ });
var HelperDocument = function HelperDocument() {};

/***/ }),

/***/ "./src/components/pages/Helper/HelperQuestion/script.js":
/*!**************************************************************!*\
  !*** ./src/components/pages/Helper/HelperQuestion/script.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperQuestion": function() { return /* binding */ HelperQuestion; }
/* harmony export */ });
var HelperQuestion = function HelperQuestion() {
  $('.helperAccordion').on('click', function () {
    if ($(this).hasClass('helperAccordion__active')) {
      $(this).removeClass('helperAccordion__active');
    } else {
      $(this).addClass('helperAccordion__active');
    }
  });
};

/***/ }),

/***/ "./src/components/pages/Index/IndexAbout/script.js":
/*!*********************************************************!*\
  !*** ./src/components/pages/Index/IndexAbout/script.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "indexAbout": function() { return /* binding */ indexAbout; }
/* harmony export */ });
var indexAbout = function indexAbout() {};

/***/ }),

/***/ "./src/components/pages/Index/IndexCase/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/Index/IndexCase/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexCase": function() { return /* binding */ IndexCase; }
/* harmony export */ });
var IndexCase = function IndexCase() {
  $('.indexCaseSelect').on('click', function () {
    if ($(this).hasClass('indexCaseSelect-item-active')) {
      $(this).removeClass('indexCaseSelect-item-active');
      $('.indexCaseSelect-block').css('display', 'none');
    } else {
      $(this).addClass('indexCaseSelect-item-active');
      $('.indexCaseSelect-block').css('display', 'block');
    }
  });
  var indexCaseSlider = new Swiper('.indexCaseSlider', {
    navigation: {
      nextEl: '.indexCase__slider .swiper-controls .swiper-button-next',
      prevEl: '.indexCase__slider .swiper-controls .swiper-button-prev'
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
      el: '.indexCase__slider .swiper-controls .swiper-pagination'
    },
    slidesPerView: 3,
    spaceBetween: 35,
    breakpoints: {
      300: {
        slidesPerView: 1
      },
      1150: {
        slidesPerView: 2
      },
      1350: {
        slidesPerView: 3
      }
    }
  });
};

/***/ }),

/***/ "./src/components/pages/Index/IndexCatalogLink/script.js":
/*!***************************************************************!*\
  !*** ./src/components/pages/Index/IndexCatalogLink/script.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexCatalogLink": function() { return /* binding */ IndexCatalogLink; }
/* harmony export */ });
var IndexCatalogLink = function IndexCatalogLink() {
  $('.indexCatalogLink__content-item').hover(function () {
    $('.indexCatalogLink__banner-container img').attr('src', $(this).attr('aria-photo'));
  });
};

/***/ }),

/***/ "./src/components/pages/Index/IndexEquipment/script.js":
/*!*************************************************************!*\
  !*** ./src/components/pages/Index/IndexEquipment/script.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexEquipment": function() { return /* binding */ IndexEquipment; }
/* harmony export */ });
var IndexEquipment = function IndexEquipment() {};

/***/ }),

/***/ "./src/components/pages/Index/IndexLink/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/Index/IndexLink/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "indexLink": function() { return /* binding */ indexLink; }
/* harmony export */ });
var indexLink = function indexLink() {};

/***/ }),

/***/ "./src/components/pages/Index/IndexMain/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/Index/IndexMain/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexMain": function() { return /* binding */ IndexMain; }
/* harmony export */ });
var IndexMain = function IndexMain() {
  var addedZeroTextPaginationFraction = function addedZeroTextPaginationFraction(className) {
    var current = $("".concat(className, " .swiper-pagination-current"));
    var total = $("".concat(className, " .swiper-pagination-total"));
    current.text(current.text() < 10 ? "0".concat(current.text()) : current.text());
    total.text(total.text() < 10 ? "0".concat(total.text()) : total.text());
  };
  var handlerPaginationChange = function handlerPaginationChange(id) {
    $('.indexMainSwiper .swiper-slide .swiper-pagination-item').removeClass('swiper-pagination-item-active');
    $(".indexMainSwiper .swiper-slide #swiperPagin_".concat(id)).addClass('swiper-pagination-item-active');
    indexMainSwiper.slideTo(id);
  };
  var indexMainSwiper = new Swiper('.indexMainSwiper', {
    effect: 'fade',
    pagination: {
      el: '.swiper-counter',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      slideChange: function slideChange() {
        addedZeroTextPaginationFraction('.indexMain');
        handlerPaginationChange(indexMainSwiper.realIndex);
      }
    }
  });
  addedZeroTextPaginationFraction('.indexMainSwiper');
  var indexMainSwiperLengthSlide = $('.indexMainSwiper .swiper-wrapper .swiper-slide').length;
  for (var i = 0; i < indexMainSwiperLengthSlide; i++) {
    $('.indexMainSwiper .swiper-pagination').append("<div class=\"swiper-pagination-item\" id=\"swiperPagin_".concat(i, "\"></div>"));
  }
  $('.indexMainSwiper .swiper-pagination-item').on('click', function (e) {
    handlerPaginationChange(+e.target.id.replace('swiperPagin_', ''));
  });
  $(".indexMainSwiper .swiper-slide #swiperPagin_0").addClass('swiper-pagination-item-active');
};

/***/ }),

/***/ "./src/components/pages/Index/IndexNews/script.js":
/*!********************************************************!*\
  !*** ./src/components/pages/Index/IndexNews/script.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexNews": function() { return /* binding */ IndexNews; }
/* harmony export */ });
var IndexNews = function IndexNews() {};

/***/ }),

/***/ "./src/components/pages/Index/IndexSteps/script.js":
/*!*********************************************************!*\
  !*** ./src/components/pages/Index/IndexSteps/script.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexSteps": function() { return /* binding */ IndexSteps; }
/* harmony export */ });
var IndexSteps = function IndexSteps() {
  var IndexSteps = new Swiper('.indexStepsSwiper', {
    navigation: {
      nextEl: '.indexSteps .indexSteps__control .swiper-button-next',
      prevEl: '.indexSteps .indexSteps__control .swiper-button-prev'
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
      el: '.indexSteps .indexSteps__control .swiper-pagination'
    },
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      310: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 2
      },
      1400: {
        slidesPerView: 2
      }
    },
    slidesPerView: 2,
    spaceBetween: 35
  });
};

/***/ }),

/***/ "./src/components/pages/NewsDetail/script.js":
/*!***************************************************!*\
  !*** ./src/components/pages/NewsDetail/script.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetail": function() { return /* binding */ NewsDetail; }
/* harmony export */ });
var NewsDetail = function NewsDetail() {};

/***/ }),

/***/ "./src/components/pages/News/NewsList/script.js":
/*!******************************************************!*\
  !*** ./src/components/pages/News/NewsList/script.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsList": function() { return /* binding */ NewsList; }
/* harmony export */ });
var NewsList = function NewsList() {};

/***/ }),

/***/ "./src/components/pages/Production/ProductionDescription/script.js":
/*!*************************************************************************!*\
  !*** ./src/components/pages/Production/ProductionDescription/script.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductionDescription": function() { return /* binding */ ProductionDescription; }
/* harmony export */ });
var ProductionDescription = function ProductionDescription() {};

/***/ }),

/***/ "./src/components/pages/Production/ProductionStages/script.js":
/*!********************************************************************!*\
  !*** ./src/components/pages/Production/ProductionStages/script.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductionStages": function() { return /* binding */ ProductionStages; }
/* harmony export */ });
var ProductionStages = function ProductionStages() {};

/***/ }),

/***/ "./src/components/pages/Production/ProductionText/script.js":
/*!******************************************************************!*\
  !*** ./src/components/pages/Production/ProductionText/script.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductionText": function() { return /* binding */ ProductionText; }
/* harmony export */ });
var ProductionText = function ProductionText() {};

/***/ }),

/***/ "./src/components/script.js":
/*!**********************************!*\
  !*** ./src/components/script.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutCharact": function() { return /* reexport safe */ _pages_About_About_haract_script_js__WEBPACK_IMPORTED_MODULE_19__.AboutCharact; },
/* harmony export */   "AboutDescription": function() { return /* reexport safe */ _pages_About_AboutDescription_script_js__WEBPACK_IMPORTED_MODULE_15__.AboutDescription; },
/* harmony export */   "AboutLink": function() { return /* reexport safe */ _pages_About_AboutLink_script_js__WEBPACK_IMPORTED_MODULE_16__.AboutLink; },
/* harmony export */   "AboutMission": function() { return /* reexport safe */ _pages_About_AboutMission_script_js__WEBPACK_IMPORTED_MODULE_17__.AboutMission; },
/* harmony export */   "AboutSng": function() { return /* reexport safe */ _pages_About_AboutSng_script_js__WEBPACK_IMPORTED_MODULE_18__.AboutSng; },
/* harmony export */   "AddCatalog": function() { return /* reexport safe */ _pages_Add_AddCatalog_script_js__WEBPACK_IMPORTED_MODULE_20__.AddCatalog; },
/* harmony export */   "AddDescription": function() { return /* reexport safe */ _pages_Add_AddDescription_script_js__WEBPACK_IMPORTED_MODULE_21__.AddDescription; },
/* harmony export */   "ArticleDetail": function() { return /* reexport safe */ _pages_ArticleDetail_script_js__WEBPACK_IMPORTED_MODULE_22__.ArticleDetail; },
/* harmony export */   "ArticlesMain": function() { return /* reexport safe */ _pages_Articles_ArticlesMain_script_js__WEBPACK_IMPORTED_MODULE_23__.ArticlesMain; },
/* harmony export */   "ButtonTop": function() { return /* reexport safe */ _ButtonTop_script_js__WEBPACK_IMPORTED_MODULE_0__.ButtonTop; },
/* harmony export */   "CaseDetailDescription": function() { return /* reexport safe */ _pages_CaseDetail_CaseDetailDescription_script_js__WEBPACK_IMPORTED_MODULE_24__.CaseDetailDescription; },
/* harmony export */   "CasesBase": function() { return /* reexport safe */ _pages_Cases_CasesBase_script_js__WEBPACK_IMPORTED_MODULE_25__.CasesBase; },
/* harmony export */   "CasesDescription": function() { return /* reexport safe */ _pages_Cases_CasesDescription_script_js__WEBPACK_IMPORTED_MODULE_26__.CasesDescription; },
/* harmony export */   "CatalogAddition": function() { return /* reexport safe */ _pages_Catalog_CatalogAddition_script_js__WEBPACK_IMPORTED_MODULE_27__.CatalogAddition; },
/* harmony export */   "CatalogBanner": function() { return /* reexport safe */ _pages_Catalog_CatalogBanner_script_js__WEBPACK_IMPORTED_MODULE_28__.CatalogBanner; },
/* harmony export */   "CatalogCase": function() { return /* reexport safe */ _pages_Catalog_CatalogCase_script_js__WEBPACK_IMPORTED_MODULE_29__.CatalogCase; },
/* harmony export */   "CatalogCollection": function() { return /* reexport safe */ _pages_Catalog_CatalogCollection_script_js__WEBPACK_IMPORTED_MODULE_30__.CatalogCollection; },
/* harmony export */   "CatalogDescription": function() { return /* reexport safe */ _pages_Catalog_CatalogDescription_script_js__WEBPACK_IMPORTED_MODULE_31__.CatalogDescription; },
/* harmony export */   "CatalogList": function() { return /* reexport safe */ _pages_Catalog_CatalogList_script_js__WEBPACK_IMPORTED_MODULE_32__.CatalogList; },
/* harmony export */   "CatalogMain": function() { return /* reexport safe */ _pages_Catalog_CatalogMain_script_js__WEBPACK_IMPORTED_MODULE_33__.CatalogMain; },
/* harmony export */   "CatalogRequest": function() { return /* reexport safe */ _pages_Catalog_CatalogRequest_script_js__WEBPACK_IMPORTED_MODULE_34__.CatalogRequest; },
/* harmony export */   "CatalogStages": function() { return /* reexport safe */ _pages_Catalog_CatalogStages_script_js__WEBPACK_IMPORTED_MODULE_35__.CatalogStages; },
/* harmony export */   "CatalogTable": function() { return /* reexport safe */ _pages_Catalog_CatalogTable_script_js__WEBPACK_IMPORTED_MODULE_36__.CatalogTable; },
/* harmony export */   "CatalogText": function() { return /* reexport safe */ _pages_Catalog_CatalogText_script_js__WEBPACK_IMPORTED_MODULE_37__.CatalogText; },
/* harmony export */   "ConnectContent": function() { return /* reexport safe */ _pages_Connect_ConnectContent_script_js__WEBPACK_IMPORTED_MODULE_38__.ConnectContent; },
/* harmony export */   "ContactGeo": function() { return /* reexport safe */ _pages_Contact_ContactGeo_script_js__WEBPACK_IMPORTED_MODULE_39__.ContactGeo; },
/* harmony export */   "ContactMain": function() { return /* reexport safe */ _pages_Contact_ContactMain_script_js__WEBPACK_IMPORTED_MODULE_40__.ContactMain; },
/* harmony export */   "DecisionDescription": function() { return /* reexport safe */ _pages_Decision_DecisionDescription_script_js__WEBPACK_IMPORTED_MODULE_41__.DecisionDescription; },
/* harmony export */   "EquipmentDetail": function() { return /* reexport safe */ _pages_EquipmentDetail_script_js__WEBPACK_IMPORTED_MODULE_42__.EquipmentDetail; },
/* harmony export */   "Feedback": function() { return /* reexport safe */ _Feedback_script_js__WEBPACK_IMPORTED_MODULE_1__.Feedback; },
/* harmony export */   "Footer": function() { return /* reexport safe */ _Footer_script_js__WEBPACK_IMPORTED_MODULE_2__.Footer; },
/* harmony export */   "FormBase": function() { return /* reexport safe */ _FormBase_script_js__WEBPACK_IMPORTED_MODULE_3__.FormBase; },
/* harmony export */   "FormFile": function() { return /* reexport safe */ _FormFile_script_js__WEBPACK_IMPORTED_MODULE_4__.FormFile; },
/* harmony export */   "GoodsDescription": function() { return /* reexport safe */ _pages_Goods_GoodsDescription_script_js__WEBPACK_IMPORTED_MODULE_43__.GoodsDescription; },
/* harmony export */   "GoodsMain": function() { return /* reexport safe */ _pages_Goods_GoodsMain_script_js__WEBPACK_IMPORTED_MODULE_44__.GoodsMain; },
/* harmony export */   "GoodsVideo": function() { return /* reexport safe */ _pages_Goods_GoodsVideo_script_js__WEBPACK_IMPORTED_MODULE_45__.GoodsVideo; },
/* harmony export */   "Header": function() { return /* reexport safe */ _Header_script_js__WEBPACK_IMPORTED_MODULE_5__.Header; },
/* harmony export */   "Helper": function() { return /* reexport safe */ _Helper_script_js__WEBPACK_IMPORTED_MODULE_6__.Helper; },
/* harmony export */   "HelperArticles": function() { return /* reexport safe */ _pages_Helper_HelperArticles_script_js__WEBPACK_IMPORTED_MODULE_46__.HelperArticles; },
/* harmony export */   "HelperDocument": function() { return /* reexport safe */ _pages_Helper_HelperDocument_script_js__WEBPACK_IMPORTED_MODULE_47__.HelperDocument; },
/* harmony export */   "HelperQuestion": function() { return /* reexport safe */ _pages_Helper_HelperQuestion_script_js__WEBPACK_IMPORTED_MODULE_48__.HelperQuestion; },
/* harmony export */   "IndexCase": function() { return /* reexport safe */ _pages_Index_IndexCase_script_js__WEBPACK_IMPORTED_MODULE_50__.IndexCase; },
/* harmony export */   "IndexCatalogLink": function() { return /* reexport safe */ _pages_Index_IndexCatalogLink_script_js__WEBPACK_IMPORTED_MODULE_51__.IndexCatalogLink; },
/* harmony export */   "IndexEquipment": function() { return /* reexport safe */ _pages_Index_IndexEquipment_script_js__WEBPACK_IMPORTED_MODULE_52__.IndexEquipment; },
/* harmony export */   "IndexMain": function() { return /* reexport safe */ _pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_54__.IndexMain; },
/* harmony export */   "IndexNews": function() { return /* reexport safe */ _pages_Index_IndexNews_script_js__WEBPACK_IMPORTED_MODULE_55__.IndexNews; },
/* harmony export */   "IndexSteps": function() { return /* reexport safe */ _pages_Index_IndexSteps_script_js__WEBPACK_IMPORTED_MODULE_56__.IndexSteps; },
/* harmony export */   "MainBanner": function() { return /* reexport safe */ _MainBanner_script_js__WEBPACK_IMPORTED_MODULE_7__.MainBanner; },
/* harmony export */   "ModalCollection": function() { return /* reexport safe */ _modals_ModalCollection_script_js__WEBPACK_IMPORTED_MODULE_11__.ModalCollection; },
/* harmony export */   "ModalFeedback": function() { return /* reexport safe */ _modals_ModalFeedback_script_js__WEBPACK_IMPORTED_MODULE_12__.ModalFeedback; },
/* harmony export */   "ModalPhoto": function() { return /* reexport safe */ _modals_ModalPhoto_script_js__WEBPACK_IMPORTED_MODULE_13__.ModalPhoto; },
/* harmony export */   "ModalVideo": function() { return /* reexport safe */ _modals_ModalVideo_script_js__WEBPACK_IMPORTED_MODULE_14__.ModalVideo; },
/* harmony export */   "NewsDetail": function() { return /* reexport safe */ _pages_NewsDetail_script_js__WEBPACK_IMPORTED_MODULE_58__.NewsDetail; },
/* harmony export */   "NewsList": function() { return /* reexport safe */ _pages_News_NewsList_script_js__WEBPACK_IMPORTED_MODULE_57__.NewsList; },
/* harmony export */   "ProductionDescription": function() { return /* reexport safe */ _pages_Production_ProductionDescription_script_js__WEBPACK_IMPORTED_MODULE_59__.ProductionDescription; },
/* harmony export */   "ProductionStages": function() { return /* reexport safe */ _pages_Production_ProductionStages_script_js__WEBPACK_IMPORTED_MODULE_60__.ProductionStages; },
/* harmony export */   "ProductionText": function() { return /* reexport safe */ _pages_Production_ProductionText_script_js__WEBPACK_IMPORTED_MODULE_61__.ProductionText; },
/* harmony export */   "Slider": function() { return /* reexport safe */ _Slider_script_js__WEBPACK_IMPORTED_MODULE_8__.Slider; },
/* harmony export */   "Space": function() { return /* reexport safe */ _Space_script_js__WEBPACK_IMPORTED_MODULE_9__.Space; },
/* harmony export */   "Team": function() { return /* reexport safe */ _Team_script_js__WEBPACK_IMPORTED_MODULE_10__.Team; },
/* harmony export */   "indexAbout": function() { return /* reexport safe */ _pages_Index_IndexAbout_script_js__WEBPACK_IMPORTED_MODULE_49__.indexAbout; },
/* harmony export */   "indexLink": function() { return /* reexport safe */ _pages_Index_IndexLink_script_js__WEBPACK_IMPORTED_MODULE_53__.indexLink; }
/* harmony export */ });
/* harmony import */ var _ButtonTop_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonTop/script.js */ "./src/components/ButtonTop/script.js");
/* harmony import */ var _Feedback_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback/script.js */ "./src/components/Feedback/script.js");
/* harmony import */ var _Footer_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/script.js */ "./src/components/Footer/script.js");
/* harmony import */ var _FormBase_script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormBase/script.js */ "./src/components/FormBase/script.js");
/* harmony import */ var _FormFile_script_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormFile/script.js */ "./src/components/FormFile/script.js");
/* harmony import */ var _Header_script_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/script.js */ "./src/components/Header/script.js");
/* harmony import */ var _Helper_script_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Helper/script.js */ "./src/components/Helper/script.js");
/* harmony import */ var _MainBanner_script_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainBanner/script.js */ "./src/components/MainBanner/script.js");
/* harmony import */ var _Slider_script_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Slider/script.js */ "./src/components/Slider/script.js");
/* harmony import */ var _Space_script_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Space/script.js */ "./src/components/Space/script.js");
/* harmony import */ var _Team_script_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Team/script.js */ "./src/components/Team/script.js");
/* harmony import */ var _modals_ModalCollection_script_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/ModalCollection/script.js */ "./src/components/modals/ModalCollection/script.js");
/* harmony import */ var _modals_ModalFeedback_script_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/ModalFeedback/script.js */ "./src/components/modals/ModalFeedback/script.js");
/* harmony import */ var _modals_ModalPhoto_script_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/ModalPhoto/script.js */ "./src/components/modals/ModalPhoto/script.js");
/* harmony import */ var _modals_ModalVideo_script_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/ModalVideo/script.js */ "./src/components/modals/ModalVideo/script.js");
/* harmony import */ var _pages_About_AboutDescription_script_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/About/AboutDescription/script.js */ "./src/components/pages/About/AboutDescription/script.js");
/* harmony import */ var _pages_About_AboutLink_script_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/About/AboutLink/script.js */ "./src/components/pages/About/AboutLink/script.js");
/* harmony import */ var _pages_About_AboutMission_script_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/About/AboutMission/script.js */ "./src/components/pages/About/AboutMission/script.js");
/* harmony import */ var _pages_About_AboutSng_script_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/About/AboutSng/script.js */ "./src/components/pages/About/AboutSng/script.js");
/* harmony import */ var _pages_About_About_haract_script_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/About/AboutСharact/script.js */ "./src/components/pages/About/AboutСharact/script.js");
/* harmony import */ var _pages_Add_AddCatalog_script_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/Add/AddCatalog/script.js */ "./src/components/pages/Add/AddCatalog/script.js");
/* harmony import */ var _pages_Add_AddDescription_script_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/Add/AddDescription/script.js */ "./src/components/pages/Add/AddDescription/script.js");
/* harmony import */ var _pages_ArticleDetail_script_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/ArticleDetail/script.js */ "./src/components/pages/ArticleDetail/script.js");
/* harmony import */ var _pages_Articles_ArticlesMain_script_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/Articles/ArticlesMain/script.js */ "./src/components/pages/Articles/ArticlesMain/script.js");
/* harmony import */ var _pages_CaseDetail_CaseDetailDescription_script_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/CaseDetail/CaseDetailDescription/script.js */ "./src/components/pages/CaseDetail/CaseDetailDescription/script.js");
/* harmony import */ var _pages_Cases_CasesBase_script_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/Cases/CasesBase/script.js */ "./src/components/pages/Cases/CasesBase/script.js");
/* harmony import */ var _pages_Cases_CasesDescription_script_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/Cases/CasesDescription/script.js */ "./src/components/pages/Cases/CasesDescription/script.js");
/* harmony import */ var _pages_Catalog_CatalogAddition_script_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/Catalog/CatalogAddition/script.js */ "./src/components/pages/Catalog/CatalogAddition/script.js");
/* harmony import */ var _pages_Catalog_CatalogBanner_script_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/Catalog/CatalogBanner/script.js */ "./src/components/pages/Catalog/CatalogBanner/script.js");
/* harmony import */ var _pages_Catalog_CatalogCase_script_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/Catalog/CatalogCase/script.js */ "./src/components/pages/Catalog/CatalogCase/script.js");
/* harmony import */ var _pages_Catalog_CatalogCollection_script_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/Catalog/CatalogCollection/script.js */ "./src/components/pages/Catalog/CatalogCollection/script.js");
/* harmony import */ var _pages_Catalog_CatalogDescription_script_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/Catalog/CatalogDescription/script.js */ "./src/components/pages/Catalog/CatalogDescription/script.js");
/* harmony import */ var _pages_Catalog_CatalogList_script_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/Catalog/CatalogList/script.js */ "./src/components/pages/Catalog/CatalogList/script.js");
/* harmony import */ var _pages_Catalog_CatalogMain_script_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/Catalog/CatalogMain/script.js */ "./src/components/pages/Catalog/CatalogMain/script.js");
/* harmony import */ var _pages_Catalog_CatalogRequest_script_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/Catalog/CatalogRequest/script.js */ "./src/components/pages/Catalog/CatalogRequest/script.js");
/* harmony import */ var _pages_Catalog_CatalogStages_script_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/Catalog/CatalogStages/script.js */ "./src/components/pages/Catalog/CatalogStages/script.js");
/* harmony import */ var _pages_Catalog_CatalogTable_script_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/Catalog/CatalogTable/script.js */ "./src/components/pages/Catalog/CatalogTable/script.js");
/* harmony import */ var _pages_Catalog_CatalogText_script_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/Catalog/CatalogText/script.js */ "./src/components/pages/Catalog/CatalogText/script.js");
/* harmony import */ var _pages_Connect_ConnectContent_script_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/Connect/ConnectContent/script.js */ "./src/components/pages/Connect/ConnectContent/script.js");
/* harmony import */ var _pages_Contact_ContactGeo_script_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/Contact/ContactGeo/script.js */ "./src/components/pages/Contact/ContactGeo/script.js");
/* harmony import */ var _pages_Contact_ContactMain_script_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/Contact/ContactMain/script.js */ "./src/components/pages/Contact/ContactMain/script.js");
/* harmony import */ var _pages_Decision_DecisionDescription_script_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/Decision/DecisionDescription/script.js */ "./src/components/pages/Decision/DecisionDescription/script.js");
/* harmony import */ var _pages_EquipmentDetail_script_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/EquipmentDetail/script.js */ "./src/components/pages/EquipmentDetail/script.js");
/* harmony import */ var _pages_Goods_GoodsDescription_script_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/Goods/GoodsDescription/script.js */ "./src/components/pages/Goods/GoodsDescription/script.js");
/* harmony import */ var _pages_Goods_GoodsMain_script_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/Goods/GoodsMain/script.js */ "./src/components/pages/Goods/GoodsMain/script.js");
/* harmony import */ var _pages_Goods_GoodsVideo_script_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/Goods/GoodsVideo/script.js */ "./src/components/pages/Goods/GoodsVideo/script.js");
/* harmony import */ var _pages_Helper_HelperArticles_script_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/Helper/HelperArticles/script.js */ "./src/components/pages/Helper/HelperArticles/script.js");
/* harmony import */ var _pages_Helper_HelperDocument_script_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/Helper/HelperDocument/script.js */ "./src/components/pages/Helper/HelperDocument/script.js");
/* harmony import */ var _pages_Helper_HelperQuestion_script_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/Helper/HelperQuestion/script.js */ "./src/components/pages/Helper/HelperQuestion/script.js");
/* harmony import */ var _pages_Index_IndexAbout_script_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/Index/IndexAbout/script.js */ "./src/components/pages/Index/IndexAbout/script.js");
/* harmony import */ var _pages_Index_IndexCase_script_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/Index/IndexCase/script.js */ "./src/components/pages/Index/IndexCase/script.js");
/* harmony import */ var _pages_Index_IndexCatalogLink_script_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/Index/IndexCatalogLink/script.js */ "./src/components/pages/Index/IndexCatalogLink/script.js");
/* harmony import */ var _pages_Index_IndexEquipment_script_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/Index/IndexEquipment/script.js */ "./src/components/pages/Index/IndexEquipment/script.js");
/* harmony import */ var _pages_Index_IndexLink_script_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/Index/IndexLink/script.js */ "./src/components/pages/Index/IndexLink/script.js");
/* harmony import */ var _pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/Index/IndexMain/script.js */ "./src/components/pages/Index/IndexMain/script.js");
/* harmony import */ var _pages_Index_IndexNews_script_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/Index/IndexNews/script.js */ "./src/components/pages/Index/IndexNews/script.js");
/* harmony import */ var _pages_Index_IndexSteps_script_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pages/Index/IndexSteps/script.js */ "./src/components/pages/Index/IndexSteps/script.js");
/* harmony import */ var _pages_News_NewsList_script_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pages/News/NewsList/script.js */ "./src/components/pages/News/NewsList/script.js");
/* harmony import */ var _pages_NewsDetail_script_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/NewsDetail/script.js */ "./src/components/pages/NewsDetail/script.js");
/* harmony import */ var _pages_Production_ProductionDescription_script_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/Production/ProductionDescription/script.js */ "./src/components/pages/Production/ProductionDescription/script.js");
/* harmony import */ var _pages_Production_ProductionStages_script_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/Production/ProductionStages/script.js */ "./src/components/pages/Production/ProductionStages/script.js");
/* harmony import */ var _pages_Production_ProductionText_script_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/Production/ProductionText/script.js */ "./src/components/pages/Production/ProductionText/script.js");































































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pages_Index_IndexCase_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/pages/Index/IndexCase/script.js */ "./src/components/pages/Index/IndexCase/script.js");
/* harmony import */ var _components_pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pages/Index/IndexMain/script.js */ "./src/components/pages/Index/IndexMain/script.js");
/* harmony import */ var _components_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/script.js */ "./src/components/script.js");



(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.Header)();
(0,_components_pages_Index_IndexCase_script_js__WEBPACK_IMPORTED_MODULE_0__.IndexCase)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.CatalogCase)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.Feedback)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.CatalogCollection)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.Team)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.Slider)();
(0,_components_pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_1__.IndexMain)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.CatalogMain)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.IndexSteps)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.HelperQuestion)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.CatalogAddition)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.ModalFeedback)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.ModalCollection)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.AboutDescription)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.GoodsMain)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.AddDescription)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.ButtonTop)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.ModalVideo)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.ModalPhoto)();
(0,_components_script_js__WEBPACK_IMPORTED_MODULE_2__.IndexCatalogLink)();
$(document).ready(function () {
  $('.b24-web-form-popup-btn-40').click(function () {
    $('.b24-web-form-popup-btn-5dsrxs').click();
  });
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map