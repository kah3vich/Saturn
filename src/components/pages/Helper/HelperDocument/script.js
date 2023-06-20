export const HelperDocument = () => {
	for (let i = 0; i <= $('.helper-document__filter .indexCaseSelect-element').length; i++) {
		$('.helper-document__filter .indexCaseSelect-element')
			.eq(i)
			.attr('data-index', i + 1);
		$('.helper-document__filter .indexCaseSelect-element').eq(i).removeAttr('href');
	}

	$('.helper-document__filter .indexCaseSelect-element').on('click', function () {
		$('.helper-document__list').addClass('display-n');

		$('.helper-document__list')
			.eq($(this).attr('data-index') - 1)
			.removeClass('display-n');
		$('.helper-document__filter .indexCaseSelect-placeholder').text($(this).text());
	});
};
