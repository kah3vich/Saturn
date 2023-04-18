export const IndexCatalogLink = () => {
	$('.indexCatalogLink__content-item').hover(function () {
		$('.indexCatalogLink__banner-container img').attr('src', $(this).attr('aria-photo'));
	});
};
