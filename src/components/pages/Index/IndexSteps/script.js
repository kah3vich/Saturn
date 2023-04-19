export const IndexSteps = () => {
	const IndexSteps = new Swiper('.indexStepsSwiper', {
		navigation: {
			nextEl: '.indexSteps .indexSteps__control .swiper-button-next',
			prevEl: '.indexSteps .indexSteps__control .swiper-button-prev',
		},
		pagination: {
			dynamicBullets: true,
			clickable: true,
			el: '.indexSteps .indexSteps__control .swiper-pagination',
		},
		fadeEffect: {
			crossFade: true,
		},
		breakpoints: {
			310: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2,
			},
		},
		slidesPerView: 2,
		spaceBetween: 35,
	});
};
