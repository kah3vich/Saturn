export const IndexCase = () => {
	$(() => {
		$('select.indexCaseSelect').each(function () {
			let $this = $(this)

			let html = '<div class="indexCaseSelect"><div class="indexCaseSelect-placeholder">'
			html += $this.find('option:eq(0)').text()
			html +=
				'</div><div class="indexCaseSelect-block display-n"><div class="indexCaseSelect-wrapper">'
			$this.find('option:eq(0)').css('display', 'none')
			$this.find('option').each(function () {
				html +=
					'<button class="indexCaseSelect-element" data-val="' +
					$(this).attr('value') +
					'" type="button">' +
					$(this).text() +
					'</button>'
			})
			html += '</div></div></div></div>'
			$(html).insertAfter($this.hide())

			$('.indexCaseSelect-element:eq(0)').addClass('indexCaseSelect-element-active')

			let $next = $this.next()
			$next
				.find('.indexCaseSelect-placeholder')
				.on('click', function (e) {
					e.preventDefault()
					$next.find('.indexCaseSelect-block').toggleClass('display-n'),
						$next.toggleClass('indexCaseSelect-item-active')
				})
				.end()
				.find('.indexCaseSelect-element')
				.on('click', function (e) {
					e.preventDefault()
					$('.indexCaseSelect-element').removeClass('indexCaseSelect-element-active')
					$(this).addClass('indexCaseSelect-element-active')
					$next.find('.indexCaseSelect-placeholder').text($(this).text())
					$this.val($(this).data('val')).trigger('change')
					$next.find('.indexCaseSelect-placeholder').trigger('click')
				})
		})
	})

	const indexCaseSlider = new Swiper('.indexCaseSlider', {
		navigation: {
			nextEl: '.indexCase__slider .swiper-controls .swiper-button-next',
			prevEl: '.indexCase__slider .swiper-controls .swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 35
	})
}
