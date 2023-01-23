export const HelperQuestion = () => {
	$('.helperAccordion').on('click', function () {
		if ($(this).hasClass('helperAccordion__active')) {
			$(this).removeClass('helperAccordion__active')
		} else {
			$(this).addClass('helperAccordion__active')
		}
	})
}
