export const CatalogAddition = () => {
	const catalogAdditionSlider = new Swiper('.catalogAdditionSlider', {
		navigation: {
			nextEl: '.catalog-addition__slider  .swiper-controls .swiper-button-next',
			prevEl: '.catalog-addition__slider  .swiper-controls .swiper-button-prev'
		},
		pagination: {
			el: '.catalog-addition__slider  .swiper-controls .swiper-pagination'
		},
		mousewheel: true,
		keyboard: true,
		slidesPerView: 4,
		spaceBetween: 44
	})
}
