export const Feedback = () => {
	const feedbackSwiper = new Swiper('.feedbackSwiper', {
		navigation: {
			nextEl: '.feedback .feedback__controls .swiper-button-next',
			prevEl: '.feedback .feedback__controls .swiper-button-prev'
		},
		slidesPerView: 5,
		spaceBetween: 35
	})
}
