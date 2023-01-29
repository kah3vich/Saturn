export const ModalFeedback = () => {
	const modalFeedbackSliderSwiper = new Swiper('.modalFeedbackSlider', {
		navigation: {
			nextEl: '.modalFeedback__wrapper  .swiper-controls .swiper-button-next',
			prevEl: '.modalFeedback__wrapper  .swiper-controls .swiper-button-prev'
		},
		effect: 'fade'
	})

	$('.feedback__slider .swiper-slide').on('click', function () {
		const activeElement = $(this).attr('aria-label').split(' / ')[0]
		$('.modalFeedback').removeClass('display-n')
		$('body').css('overflow', 'hidden')
		modalFeedbackSliderSwiper.activeIndex = +activeElement + 1
	})

	$('.modalFeedback__close').on('click', () => {
		$('body').css('overflow', 'visible')
		$('.modalFeedback').addClass('display-n')
	})
}
