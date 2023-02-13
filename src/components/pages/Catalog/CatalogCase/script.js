export const CatalogCase = () => {
	const arrListSlider = ['catalog', 'caseDetail', 'goods']

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
		})
	}
}
