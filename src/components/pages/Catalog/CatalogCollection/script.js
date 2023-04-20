export const CatalogCollection = () => {
	const catalogCollectionSteps = new Swiper('.catalogCollectionSlider', {
		navigation: {
			nextEl: '.catalog-collection .catalog-collection__control .swiper-button-next',
			prevEl: '.catalog-collection .catalog-collection__control .swiper-button-prev',
		},
		pagination: {
			dynamicBullets: true,
			clickable: true,
			el: '.catalog-collection .catalog-collection__control .swiper-pagination',
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
