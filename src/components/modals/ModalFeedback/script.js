export const ModalFeedback = () => {
	const modalFeedbackSliderSwiper = new Swiper('.modalFeedbackSlider', {
		navigation: {
			nextEl: '.modalFeedback__wrapper  .swiper-controls .swiper-button-next',
			prevEl: '.modalFeedback__wrapper  .swiper-controls .swiper-button-prev',
		},
		effect: 'fade',
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
	});

	$('.feedback__slider .swiper-slide').on('click', function () {
		const activeElement = $(this).attr('aria-label').split(' / ')[0] - 1;
		$('.modalFeedback').removeClass('display-n');
		$('body').css('overflow', 'hidden');
		console.log('✅ activeElement    ', activeElement);
		modalFeedbackSliderSwiper.activeIndex = activeElement;
	});

	$('.modalFeedback__close').on('click', () => {
		$('body').css('overflow', 'visible');
		$('.modalFeedback').addClass('display-n');
	});
};
