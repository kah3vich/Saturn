export const CatalogCase = () => {
	const catalogCaseSlider = new Swiper('.catalogCaseSlider', {
		navigation: {
			nextEl: '.catalog-case__slider .swiper-controls .swiper-button-next',
			prevEl: '.catalog-case__slider .swiper-controls .swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 35
	})
}
