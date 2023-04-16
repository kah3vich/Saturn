export const ButtonTop = () => {
	$('.buttonTop').on('click', () => {
		goToTopScroll()
	})

	const checkPositionScrollForShowButton = () => {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			$('.buttonTop').css('display', 'block')
		} else {
			$('.buttonTop').css('display', 'none')
		}
	}

	const goToTopScroll = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	window.onscroll = () => {
		checkPositionScrollForShowButton()
	}
}
