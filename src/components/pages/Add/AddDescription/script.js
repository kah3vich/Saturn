export const AddDescription = () => {
	const addDescriptionSliderSwiper = new Swiper('.addDescriptionSliderSwiper', {
		navigation: {
			nextEl: '.add-description__slider .swiper-controls .swiper-button-next',
			prevEl: '.add-description__slider .swiper-controls .swiper-button-prev'
		},
		pagination: {
			el: '.add-description__slider .swiper-controls .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<div class="add-description__slider-button ${className}"> <img src="./img/pages/catalog/catalogMain/card-1.png" alt=""></div>`
			}
		},
		mousewheel: true,
		keyboard: true,
		effect: 'fade'
	})
}
