export const IndexMain = () => {
	const addedZeroTextPaginationFraction = className => {
		const current = $(`${className} .swiper-pagination-current`)
		const total = $(`${className} .swiper-pagination-total`)

		current.text(current.text() < 10 ? `0${current.text()}` : current.text())
		total.text(total.text() < 10 ? `0${total.text()}` : total.text())
	}

	const handlerPaginationChange = id => {
		$('.indexMainSwiper .swiper-slide .swiper-pagination-item').removeClass(
			'swiper-pagination-item-active'
		)
		$(`.indexMainSwiper .swiper-slide #swiperPagin_${id}`).addClass('swiper-pagination-item-active')

		indexMainSwiper.slideTo(id)
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
				handlerPaginationChange(indexMainSwiper.realIndex)
			}
		}
	})

	addedZeroTextPaginationFraction('.indexMainSwiper')

	const indexMainSwiperLengthSlide = $('.swiper-wrapper .swiper-slide').length

	for (let i = 0; i < indexMainSwiperLengthSlide; i++) {
		$('.indexMainSwiper .swiper-pagination').append(
			`<div class="swiper-pagination-item" id="swiperPagin_${i}"></div>`
		)
	}

	$('.indexMainSwiper .swiper-pagination-item').on('click', function (e) {
		handlerPaginationChange(+e.target.id.replace('swiperPagin_', ''))
	})

	handlerPaginationChange(0)
}
