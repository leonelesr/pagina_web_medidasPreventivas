$(function () {
	let logo = document.getElementById("logo");
	let cifras = $('#cifras').offset().top,
		preventivas = $('#preventivas').offset().top,
		comportamientos = $('#comportamientos').offset().top,
		acercade = $('#acercade').offset().top;


	window.addEventListener('resize', function () {
		let cifras = $('#cifras').offset().top,
			preventivas = $('#preventivas').offset().top,
			comportamientos = $('#comportamientos').offset().top,
			acercade = $('#acercade').offset().top;
	});

	$('#enlace-inicio').on('click', function (e) {
		let logo = document.getElementById("logo");
		logo.classList.remove('disap');
		logo.className = ('logo');
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
	});

	$('#enlace-cifras').on('click', function (e) {
		let cifras = $('#cifras').offset().top,
			preventivas = $('#preventivas').offset().top,
			comportamientos = $('#comportamientos').offset().top,
			acercade = $('#acercade').offset().top;
		e.preventDefault();
		$('html, body').animate({
			scrollTop: cifras - 80
		}, 600);
	});

	$('#enlace-preventivas').on('click', function (e) {
		let cifras = $('#cifras').offset().top,
			preventivas = $('#preventivas').offset().top,
			comportamientos = $('#comportamientos').offset().top,
			acercade = $('#acercade').offset().top;
		e.preventDefault();
		$('html, body').animate({
			scrollTop: preventivas - 80
		}, 600);
	});

	$('#enlace-comportamientos').on('click', function (e) {
		let cifras = $('#cifras').offset().top,
			preventivas = $('#preventivas').offset().top,
			comportamientos = $('#comportamientos').offset().top,
			acercade = $('#acercade').offset().top;
		e.preventDefault();
		$('html, body').animate({
			scrollTop: comportamientos - 80
		}, 600);
	});

	$('#enlace-acercade').on('click', function (e) {
		let cifras = $('#cifras').offset().top,
			preventivas = $('#preventivas').offset().top,
			comportamientos = $('#comportamientos').offset().top,
			acercade = $('#acercade').offset().top;
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercade - 80
		}, 600);
	});
});
