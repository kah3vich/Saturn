export const Feedback = () => {
	const feedbackSwiper = new Swiper('.feedbackSwiper', {
		navigation: {
			nextEl: '.feedback .feedback__controls .swiper-button-next',
			prevEl: '.feedback .feedback__controls .swiper-button-prev'
		},
		pagination: {
			dynamicBullets: true,
			clickable: true,
			el: '.feedback .feedback__controls .swiper-pagination'
		},
		fadeEffect: {
			crossFade: true
		},
		breakpoints: {
			310: {
				slidesPerView: 1
			},
			640: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			},
			1000: {
				slidesPerView: 4
			},
			1400: {
				slidesPerView: 5
			}
		},
		slidesPerView: 5,
		spaceBetween: 35
	})
}
