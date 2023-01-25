export const CatalogAddition = () => {
	const arrListSlider = ['addition', 'goods']

	for (let i = 0; i <= arrListSlider.length; i++) {
		const catalogAdditionSlider = new Swiper('.catalogAdditionSlider', {
			pagination: {
				el: `.catalog-addition__slider.${arrListSlider[i]} .swiper-controls .swiper-pagination`
			},
			navigation: {
				nextEl: `.catalog-addition__slider.${arrListSlider[i]} .swiper-controls .swiper-button-next`,
				prevEl: `.catalog-addition__slider.${arrListSlider[i]} .swiper-controls .swiper-button-prev`
			},
			mousewheel: true,
			keyboard: true,
			slidesPerView: 4,
			spaceBetween: 44
		})
	}
}
