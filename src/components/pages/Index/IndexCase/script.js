export const IndexCase = () => {
	$('.indexCaseSelect').on('click', function () {
		if ($(this).hasClass('indexCaseSelect-item-active')) {
			$(this).removeClass('indexCaseSelect-item-active')
			$('.indexCaseSelect-block').css('display', 'none')
		} else {
			$(this).addClass('indexCaseSelect-item-active')
			$('.indexCaseSelect-block').css('display', 'block')
		}
	})

	const indexCaseSlider = new Swiper('.indexCaseSlider', {
		navigation: {
			nextEl: '.indexCase__slider .swiper-controls .swiper-button-next',
			prevEl: '.indexCase__slider .swiper-controls .swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 35
	})
}
