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

document.addEventListener('input', function(event) {
	if (event.target.type === 'number') {
	event.target.value = event.target.value.replace(/[^\d.]/g, '');
	}
});


let x = 10

const msg1 = "x==1"
const msg2 = "x==2"
const msg3 = "x==3"
const msg4 = "undefined"

function write_1 () {
	console.log(msg1)
}

function write_2 () {
	console.log(msg2)
}

function write_3 () {
	console.log(msg3)
}

if (x == 1) {
	write_1 ();
} else if (x == 2) {
	write_2 ();
} else if (x == 3) {
	write_3 ()
} else {
	console.log(msg4)
}

