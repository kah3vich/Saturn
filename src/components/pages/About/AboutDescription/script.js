export const AboutDescription = () => {
	const aboutDescriptionSwiper = new Swiper('.aboutDescriptionSwiper', {
		navigation: {
			nextEl: '.about-description__slider .swiper-controls .swiper-button-next',
			prevEl: '.about-description__slider .swiper-controls .swiper-button-prev'
		},
		pagination: {
			el: '.about-description__slider .swiper-controls .swiper-pagination'
		},
		effect: 'fade'
	})
}
