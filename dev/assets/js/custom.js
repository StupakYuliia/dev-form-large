$(document).ready(function() {
	$('select').niceSelect();
	$('[type="tel"]').mask('+38(000)-000-00-00');
	$('[data-index]').mask('00000');

	$('[data-calendar]').wrap('<div class="calendar-container"></div>');

	$( '[data-calendar]' ).datepicker({
		showOn: "button",
		buttonImage: "assets/img/icon-calendar.svg",
		buttonImageOnly: true,
	});

})


