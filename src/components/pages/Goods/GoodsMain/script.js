export const GoodsMain = () => {
	const goodsMainSliderSwiper = new Swiper('.goodsMainSliderSwiper', {
		pagination: {
			el: '.goods-main__slider .swiper-controls .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<div class="goods-main__slider-button ${className}"> <img src="./img/pages/catalog/catalogMain/card-1.png" alt=""></div>`
			}
		},
		effect: 'fade',
		navigation: {
			nextEl: '.goods-main__slider .swiper-controls .swiper-button-next',
			prevEl: '.goods-main__slider .swiper-controls .swiper-button-prev'
		}
	})
}
