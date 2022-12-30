export const IndexMain = () => {
	const swiper = new Swiper('.indexMainSwiper', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		on: {
			slideChange: function () {
				const index_currentSlide = swiper.realIndex
				const currentSlide =
					index_currentSlide % 3 === 0 ? swiper.slides[index_currentSlide] : swiper.slides[0]
				currentSlide.style.background = 'red'
			}
		}
	})
}
