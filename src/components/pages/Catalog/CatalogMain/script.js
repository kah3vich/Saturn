export const CatalogMain = () => {
	const catalogMainSlider = new Swiper('.catalogMainSlider', {
		pagination: {
			el: '.catalog-main__slider  .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<div class="catalog-main__slider-button ${className}"> <img src="./img/pages/catalog/catalogMain/card-1.png" alt=""></div>`
			}
		},
		navigation: {
			nextEl: '.catalog-main__slider  .swiper-controls .swiper-button-next',
			prevEl: '.catalog-main__slider  .swiper-controls .swiper-button-prev'
		}
	})
}
