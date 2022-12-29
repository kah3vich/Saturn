export const Header = () => {
	$(() => {
		$('select.c_select').each(function () {
			let $this = $(this)

			let html = '<div class="c_select"><div class="c_select-placeholder">'
			html += $this.find('option:eq(0)').text()
			html += '</div><div class="c_select-block display-n"><div class="c_select-wrapper">'
			$this.find('option:eq(0)').css('display', 'none')
			$this.find('option').each(function () {
				html +=
					'<button class="c_select-element" data-val="' +
					$(this).attr('value') +
					'" type="button">' +
					$(this).text() +
					'</button>'
			})
			html += '</div></div></div></div>'
			$(html).insertAfter($this.hide())

			$('.c_select-element:eq(0)').addClass('c_select-element-active')

			let $next = $this.next()
			$next
				.find('.c_select-placeholder')
				.on('click', function (e) {
					e.preventDefault()
					$next.find('.c_select-block').toggleClass('display-n'),
						$next.toggleClass('c_select-item-active')
				})
				.end()
				.find('.c_select-element')
				.on('click', function (e) {
					e.preventDefault()
					$('.c_select-element').removeClass('c_select-element-active')
					$(this).addClass('c_select-element-active')
					$next.find('.c_select-placeholder').text($(this).text())
					$this.val($(this).data('val')).trigger('change')
					$next.find('.c_select-placeholder').trigger('click')
				})
		})
	})
}
