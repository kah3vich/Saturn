export const Slider = () => {
	const mainSliderSwiper = new Swiper('.mainSliderSwiper', {
		navigation: {
			nextEl: '.slider__container .swiper-controls .swiper-button-next',
			prevEl: '.slider__container .swiper-controls .swiper-button-prev'
		},
		pagination: {
			el: '.slider__container .swiper-controls .swiper-pagination'
		}
	})
}
