export const IndexMain = () => {
	const addedZeroTextPaginationFraction = className => {
		const current = $(`${className} .swiper-pagination-current`)
		const total = $(`${className} .swiper-pagination-total`)

		current.text(current.text() < 9 ? `0${current.text()}` : current.text())
		total.text(total.text() < 9 ? `0${total.text()}` : total.text())
	}

	const indexMainSwiper = new Swiper('.indexMainSwiper', {
		effect: 'fade',
		pagination: {
			el: '.swiper-counter',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		on: {
			slideChange: function () {
				addedZeroTextPaginationFraction('.indexMain')
				const index_currentSlide = indexMainSwiper.realIndex
				$('.indexMainSwiper .swiper-pagination-item').removeClass('swiper-pagination-item-active')
				$(`.indexMainSwiper .swiper-pagination-item:eq(${index_currentSlide})`).addClass(
					'swiper-pagination-item-active'
				)
			}
		}
	})

	addedZeroTextPaginationFraction('.indexMainSwiper')

	const indexMainSwiperLengthSlide = $('.swiper-wrapper .swiper-slide').length

	for (let i = 1; i <= indexMainSwiperLengthSlide; i++) {
		$('.indexMainSwiper .swiper-pagination').append('<div class="swiper-pagination-item"></div>')
	}

	$(`.indexMainSwiper .swiper-pagination-item:eq(${0})`).addClass('swiper-pagination-item-active')
}
