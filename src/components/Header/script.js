export const Header = () => {
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

	const arrActiveNavbar = [
		'navbarArrowProject',
		'navbarArrowCompony',
		'navbarArrowBuy',
		'navbarArrowHelper',
	];

	arrActiveNavbar.forEach(el => {
		$(`#${el}`).hover(
			() => {
				$(`#${el} .navbar__arrow-list`).addClass('navbar__arrow-list__active');
				$('.navbar__background').addClass('navbar__background-active');
				// $('body').css('overflow', 'hidden');
			},
			() => {
				$(`#${el} .navbar__arrow-list`).removeClass('navbar__arrow-list__active');
				$('.navbar__background').removeClass('navbar__background-active');
				$('body').css('overflow', 'visible');
			},
		);
	});

	$('#navbarArrowCatalog, .navbar__arrow-block').hover(
		() => {
			$('.navbar__arrow-block').addClass('navbar__arrow-block__active');
			// $('body').css('overflow', 'hidden');
			$('.navbar__background').addClass('navbar__background-active');
		},
		() => {
			$('.navbar__arrow-block').removeClass('navbar__arrow-block__active');
			// $('body').css('overflow', 'visible');
			$('.navbar__background').removeClass('navbar__background-active');
		},
	);

	$('.navbar__arrow-nav').hover(function () {
		$('.navbar__arrow-nav').removeClass('navbar__arrow-nav__active');
		$(this).addClass('navbar__arrow-nav__active');
		$('.navbar__arrow-con').removeClass('navbar__arrow-con__active');
		$(`.navbar__arrow-con[data-content="${$(this).attr('data-con')}"]`).addClass(
			'navbar__arrow-con__active',
		);
	});

	// Menu

	$('.header__menu').on('click', () => {
		$('.menu__mobile').removeClass('display-n');
		$('.header__close').removeClass('display-n');
		$('.header__menu').addClass('display-n');
		$('body').css('overflow', 'hidden');
	});
	$('.header__close').on('click', () => {
		$('body').css('overflow', 'visible');
		$('.menu__mobile').addClass('display-n');
		$('.header__menu').removeClass('display-n');
		$('.header__close').addClass('display-n');
	});

	$('.menu__mobile-accordion__header').on('click', () => {
		if ($('.menu__mobile-accordion').hasClass('menu__mobile-accordion__active')) {
			$('.menu__mobile-accordion').removeClass('menu__mobile-accordion__active');
		} else {
			$('.menu__mobile-accordion').addClass('menu__mobile-accordion__active');
		}
	});

	$('.menu__mobile-accord__header').on('click', () => {
		if ($('.menu__mobile-accord').hasClass('menu__mobile-accord__active')) {
			$('.menu__mobile-accord').removeClass('menu__mobile-accord__active');
		} else {
			$('.menu__mobile-accord').addClass('menu__mobile-accord__active');
		}
	});
};
