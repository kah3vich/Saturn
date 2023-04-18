export const ModalVideo = () => {
	$(
		'.goods-video__video, .catalog-description__block-video, .about-description__video, .indexAbout__content-video',
	).on('click', function () {
		const dataVideo = $(this).attr('aria-video');
		$('.modalVideo__wrapper iframe').attr('src', dataVideo);

		$('.modalVideo').removeClass('display-n');
		$('body').css('overflow', 'hidden');
	});

	$('.modalVideo__close').on('click', () => {
		$('body').css('overflow', 'visible');
		$('.modalVideo').addClass('display-n');
	});
};
