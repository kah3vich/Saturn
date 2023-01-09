export const Header = () => {
	$('.headerCitySelect').on('click', function () {
		if ($(this).hasClass('headerCitySelect-item-active')) {
			$(this).removeClass('headerCitySelect-item-active')
			$('.headerCitySelect-block').css('display', 'none')
		} else {
			$(this).addClass('headerCitySelect-item-active')
			$('.headerCitySelect-block').css('display', 'block')
		}
	})
}
