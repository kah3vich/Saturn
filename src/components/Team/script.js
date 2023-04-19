export const Team = () => {
	const teamSwiper = new Swiper('.teamSwiper', {
		navigation: {
			nextEl: '.team .team__controls .swiper-button-next',
			prevEl: '.team .team__controls .swiper-button-prev',
		},
		pagination: {
			dynamicBullets: true,
			clickable: true,
			el: '.team .team__controls .swiper-pagination',
		},
		slidesPerView: 4,
		spaceBetween: 35,
		breakpoints: {
			310: {
				spaceBetween: 0,
				slidesPerView: 1,
			},
			700: {
				slidesPerView: 2,
			},
			1050: {
				slidesPerView: 3,
			},
			1350: {
				slidesPerView: 4,
			},
		},
	});
};
