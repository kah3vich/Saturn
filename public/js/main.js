/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  $(function () {
    $('select.headerCitySelect').each(function () {
      var $this = $(this);
      var html = '<div class="headerCitySelect"><div class="headerCitySelect-placeholder">';
      html += $this.find('option:eq(0)').text();
      html += '</div><div class="headerCitySelect-block display-n"><div class="headerCitySelect-wrapper">';
      $this.find('option:eq(0)').css('display', 'none');
      $this.find('option').each(function () {
        html += '<button class="headerCitySelect-element" data-val="' + $(this).attr('value') + '" type="button">' + $(this).text() + '</button>';
      });
      html += '</div></div></div></div>';
      $(html).insertAfter($this.hide());
      $('.headerCitySelect-element:eq(0)').addClass('headerCitySelect-element-active');
      var $next = $this.next();
      $next.find('.headerCitySelect-placeholder').on('click', function (e) {
        e.preventDefault();
        $next.find('.headerCitySelect-block').toggleClass('display-n'), $next.toggleClass('headerCitySelect-item-active');
      }).end().find('.headerCitySelect-element').on('click', function (e) {
        e.preventDefault();
        $('.headerCitySelect-element').removeClass('headerCitySelect-element-active');
        $(this).addClass('headerCitySelect-element-active');
        $next.find('.headerCitySelect-placeholder').text($(this).text());
        $this.val($(this).data('val')).trigger('change');
        $next.find('.headerCitySelect-placeholder').trigger('click');
      });
    });
  });
};

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
    current.text(current.text() < 9 ? "0".concat(current.text()) : current.text());
    total.text(total.text() < 9 ? "0".concat(total.text()) : total.text());
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
        var index_currentSlide = indexMainSwiper.realIndex;
        $('.indexMainSwiper .swiper-pagination-item').removeClass('swiper-pagination-item-active');
        $(".indexMainSwiper .swiper-pagination-item:eq(".concat(index_currentSlide, ")")).addClass('swiper-pagination-item-active');
      }
    }
  });
  addedZeroTextPaginationFraction('.indexMainSwiper');
  var indexMainSwiperLengthSlide = $('.swiper-wrapper .swiper-slide').length;
  for (var i = 1; i <= indexMainSwiperLengthSlide; i++) {
    $('.indexMainSwiper .swiper-pagination').append('<div class="swiper-pagination-item"></div>');
  }
  $(".indexMainSwiper .swiper-pagination-item:eq(".concat(0, ")")).addClass('swiper-pagination-item-active');
};

/***/ }),

/***/ "./src/components/pages/PickUp/script.js":
/*!***********************************************!*\
  !*** ./src/components/pages/PickUp/script.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/components/script.js":
/*!**********************************!*\
  !*** ./src/components/script.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* reexport safe */ _Footer_script_js__WEBPACK_IMPORTED_MODULE_0__.Footer; },
/* harmony export */   "Header": function() { return /* reexport safe */ _Header_script_js__WEBPACK_IMPORTED_MODULE_1__.Header; },
/* harmony export */   "IndexMain": function() { return /* reexport safe */ _pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_2__.IndexMain; }
/* harmony export */ });
/* harmony import */ var _Footer_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer/script.js */ "./src/components/Footer/script.js");
/* harmony import */ var _Header_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/script.js */ "./src/components/Header/script.js");
/* harmony import */ var _pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Index/IndexMain/script.js */ "./src/components/pages/Index/IndexMain/script.js");
/* harmony import */ var _pages_PickUp_script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/PickUp/script.js */ "./src/components/pages/PickUp/script.js");





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
/* harmony import */ var _components_pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/pages/Index/IndexMain/script.js */ "./src/components/pages/Index/IndexMain/script.js");
/* harmony import */ var _components_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/script.js */ "./src/components/script.js");


(0,_components_script_js__WEBPACK_IMPORTED_MODULE_1__.Header)();
(0,_components_pages_Index_IndexMain_script_js__WEBPACK_IMPORTED_MODULE_0__.IndexMain)();
}();
/******/ })()
;
//# sourceMappingURL=main.js.map