export const CatalogAddition = () => {
	const arrListSlider = ['addition', 'goods', 'catalog']

	for (let i = 0; i <= arrListSlider.length; i++) {
		const catalogAdditionSlider = new Swiper('.catalogAdditionSlider', {
			pagination: {
				clickable: true,
				dynamicBullets: true,
				el: `.catalog-addition__slider.${arrListSlider[i]} .swiper-controls .swiper-pagination`
			},
			navigation: {
				nextEl: `.catalog-addition__slider.${arrListSlider[i]} .swiper-controls .swiper-button-next`,
				prevEl: `.catalog-addition__slider.${arrListSlider[i]} .swiper-controls .swiper-button-prev`
			},
			fadeEffect: {
				crossFade: true
			},
			mousewheel: true,
			keyboard: true,
			slidesPerView: 4,
			spaceBetween: 44,
			observer: true,
			observeParents: true,
			breakpoints: {
				310: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				700: {
					slidesPerView: 2
				},
				1050: {
					slidesPerView: 3
				},
				1350: {
					slidesPerView: 4
				}
			}
		})
	}
}
