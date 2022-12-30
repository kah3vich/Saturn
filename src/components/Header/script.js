export const Header = () => {
	$(() => {
		$('select.headerCitySelect').each(function () {
			let $this = $(this)

			let html = '<div class="headerCitySelect"><div class="headerCitySelect-placeholder">'
			html += $this.find('option:eq(0)').text()
			html +=
				'</div><div class="headerCitySelect-block display-n"><div class="headerCitySelect-wrapper">'
			$this.find('option:eq(0)').css('display', 'none')
			$this.find('option').each(function () {
				html +=
					'<button class="headerCitySelect-element" data-val="' +
					$(this).attr('value') +
					'" type="button">' +
					$(this).text() +
					'</button>'
			})
			html += '</div></div></div></div>'
			$(html).insertAfter($this.hide())

			$('.headerCitySelect-element:eq(0)').addClass('headerCitySelect-element-active')

			let $next = $this.next()
			$next
				.find('.headerCitySelect-placeholder')
				.on('click', function (e) {
					e.preventDefault()
					$next.find('.headerCitySelect-block').toggleClass('display-n'),
						$next.toggleClass('headerCitySelect-item-active')
				})
				.end()
				.find('.headerCitySelect-element')
				.on('click', function (e) {
					e.preventDefault()
					$('.headerCitySelect-element').removeClass('headerCitySelect-element-active')
					$(this).addClass('headerCitySelect-element-active')
					$next.find('.headerCitySelect-placeholder').text($(this).text())
					$this.val($(this).data('val')).trigger('change')
					$next.find('.headerCitySelect-placeholder').trigger('click')
				})
		})
	})
}
