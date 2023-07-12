export const IndexCatalogLink = () => {
	$('.indexCatalogLink__content-item').hover(function () {
		$('.indexCatalogLink__banner-container img').attr('src', $(this).attr('aria-photo'));
		const title = $(this).children().find('.indexCatalogLink__content-subtitle').text();
		$('.indexCatalogLink__banner-text p').text(title);
	});
};
