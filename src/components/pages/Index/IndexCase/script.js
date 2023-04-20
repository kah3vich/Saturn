export const IndexCase = () => {
	$('.indexCaseSelect').on('click', function () {
		if ($(this).hasClass('indexCaseSelect-item-active')) {
			$(this).removeClass('indexCaseSelect-item-active');
			$('.indexCaseSelect-block').css('display', 'none');
		} else {
			$(this).addClass('indexCaseSelect-item-active');
			$('.indexCaseSelect-block').css('display', 'block');
		}
	});

	const indexCaseSlider = new Swiper('.indexCaseSlider', {
		navigation: {
			nextEl: '.indexCase__slider .swiper-controls .swiper-button-next',
			prevEl: '.indexCase__slider .swiper-controls .swiper-button-prev',
		},
		pagination: {
			dynamicBullets: true,
			clickable: true,
			el: '.indexCase__slider .swiper-controls .swiper-pagination',
		},
		slidesPerView: 3,
		spaceBetween: 35,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			1150: {
				slidesPerView: 2,
			},
			1350: {
				slidesPerView: 3,
			},
		},
	});
};
