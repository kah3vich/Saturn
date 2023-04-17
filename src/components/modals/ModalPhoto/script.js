export const ModalPhoto = () => {
	$('.slider__show, .articleDetailCard__show').on('click', function () {
		const dataPhoto = $(this).attr('aria-photo');
		$('.modalPhoto__wrapper img').attr('src', dataPhoto);

		$('.modalPhoto').removeClass('display-n');
		$('body').css('overflow', 'hidden');
	});

	$('.modalPhoto__close').on('click', () => {
		$('body').css('overflow', 'visible');
		$('.modalPhoto').addClass('display-n');
	});
};
