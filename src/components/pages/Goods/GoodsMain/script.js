export const GoodsMain = () => {
	const goodsMainSliderSwiper = new Swiper('.goodsMainSliderSwiper', {
		pagination: {
			el: '.goods-main__slider .swiper-controls .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				const tabs = $('.goods-main__slider-tab');

				return `<div class="goods-main__slider-button ${className}"> <img src="${tabs[
					index
				].getAttribute('src')}" alt=""></div>`;
			},
		},
		effect: 'fade',
		navigation: {
			nextEl: '.goods-main__slider .swiper-controls .swiper-button-next',
			prevEl: '.goods-main__slider .swiper-controls .swiper-button-prev',
		},
	});
};
