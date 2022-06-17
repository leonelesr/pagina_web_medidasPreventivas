	let nav = document.getElementById("nav");
	let logo = document.getElementById("logo");
	let menu = document.getElementById("enlaces");

	function menus() {
		let desplazamiento_actual = window.pageYOffset;
		if (desplazamiento_actual >= 100) {
			logo.classList.remove('logo');
			logo.className = ('disap');
			nav.style.transition = '2s';
		}
	}

	window.addEventListener('load', function () {
		$('#onload').fadeOut(); /* cuando la ventana se cargue por completo */
		$('body').removeClass('hidden');
		menus();

	});
	window.addEventListener('scroll', function () {
		menus();
	});
