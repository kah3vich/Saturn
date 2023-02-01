export const CatalogCase = () => {
	const arrListSlider = ['catalog', 'caseDetail']

	for (let i = 0; i <= arrListSlider.length; i++) {
		const catalogCaseSlider = new Swiper('.catalogCaseSlider', {
			pagination: {
				el: `.catalog-case__slider.${arrListSlider[i]} .swiper-controls .swiper-pagination`
			},
			navigation: {
				nextEl: `.catalog-case__slider.${arrListSlider[i]} .swiper-controls .swiper-button-next`,
				prevEl: `.catalog-case__slider.${arrListSlider[i]} .swiper-controls .swiper-button-prev`
			},
			mousewheel: true,
			keyboard: true,
			slidesPerView: 3,
			spaceBetween: 35
		})
	}
}
