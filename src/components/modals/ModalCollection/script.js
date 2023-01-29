export const ModalCollection = () => {
	const modalCollectionSlider = new Swiper('.modalCollectionSlider', {
		navigation: {
			nextEl: '.modalCollection__wrapper  .swiper-controls .swiper-button-next',
			prevEl: '.modalCollection__wrapper  .swiper-controls .swiper-button-prev'
		},
		observer: true,
		observeParents: true,
		effect: 'fade'
	})

	const modalCollectionSlideSlider = new Swiper('.modalCollectionSlideSlider', {
		pagination: {
			el: '.modalCollectionSlide__slider .swiper-control .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<div class="modalCollectionSlide__slider-button ${className}"> <img src="./img/pages/catalog/catalogMain/card-1.png" alt=""></div>`
			}
		},
		effect: 'fade',
		navigation: {
			nextEl: '.modalCollectionSlide__slider .swiper-control .swiper-button-next',
			prevEl: '.modalCollectionSlide__slider .swiper-control .swiper-button-prev'
		}
	})

	$('.catalogCollectionCard').on('click', function () {
		const activeElement = $(this).attr('aria-label')
		$('.modalCollection').removeClass('display-n')
		$('body').css('overflow', 'hidden')

		modalCollectionSlider.activeIndex = Number(activeElement) - 1
	})

	$('.modalCollection__close').on('click', () => {
		$('body').css('overflow', 'visible')
		$('.modalCollection').addClass('display-n')
	})
}
