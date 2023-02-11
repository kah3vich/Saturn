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

	// Navbar

	const arrActiveNavbar = ['navbarArrowProject', 'navbarArrowCompony', 'navbarArrowHelper']

	arrActiveNavbar.forEach(el => {
		$(`#${el}`).hover(
			() => {
				$(`#${el} .navbar__arrow-list`).addClass('navbar__arrow-list__active')
				$('.navbar__background').addClass('navbar__background-active')
				$('body').css('overflow', 'hidden')
			},
			() => {
				$(`#${el} .navbar__arrow-list`).removeClass('navbar__arrow-list__active')
				$('.navbar__background').removeClass('navbar__background-active')
				$('body').css('overflow', 'visible')
			}
		)
	})

	$('#navbarArrowCatalog, .navbar__arrow-block').hover(
		() => {
			$('.navbar__arrow-block').addClass('navbar__arrow-block__active')
			$('body').css('overflow', 'hidden')
		},
		() => {
			$('.navbar__arrow-block').removeClass('navbar__arrow-block__active')
			$('body').css('overflow', 'visible')
		}
	)

	$('.navbar__arrow-nav').hover(function () {
		$('.navbar__arrow-nav').removeClass('navbar__arrow-nav__active')
		$(this).addClass('navbar__arrow-nav__active')
		$('.navbar__arrow-con').removeClass('navbar__arrow-con__active')
		$(`.navbar__arrow-con[data-content="${$(this).attr('data-con')}"]`).addClass(
			'navbar__arrow-con__active'
		)
	})
}
