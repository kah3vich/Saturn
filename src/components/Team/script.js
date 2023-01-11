export const Team = () => {
	const teamSwiper = new Swiper('.teamSwiper', {
		navigation: {
			nextEl: '.team .team__controls .swiper-button-next',
			prevEl: '.team .team__controls .swiper-button-prev'
		},
		slidesPerView: 4,
		spaceBetween: 35
	})
}
