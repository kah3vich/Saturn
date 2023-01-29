export const ModalCollection = () => {
	const modalCollectionSliderSwiper = new Swiper('.modalCollectionSlider', {
		navigation: {
			nextEl: '.modalCollection__wrapper  .swiper-controls .swiper-button-next',
			prevEl: '.modalCollection__wrapper  .swiper-controls .swiper-button-prev'
		},
		effect: 'fade'
	})

	$('.catalogCollectionCard').on('click', function () {
		const activeElement = $(this).attr('aria-label')
		$('.modalCollection').removeClass('display-n')
		$('body').css('overflow', 'hidden')
		console.log('activeElement    ', activeElement)
		modalCollectionSliderSwiper.activeIndex = +activeElement
	})

	$('.modalCollection__close').on('click', () => {
		$('body').css('overflow', 'visible')
		$('.modalCollection').addClass('display-n')
	})
}
