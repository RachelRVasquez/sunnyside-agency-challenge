(function () {
	const hamburger = document.querySelector('.hamburger'),
		headerMenu = document.querySelector('.off-screen-mobile');

	if ('undefined' === typeof hamburger || 'undefined' === typeof headerMenu) {
		return;
	}

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		headerMenu.classList.toggle('active');

		if (hamburger.getAttribute('aria-expanded') === 'true') {
			hamburger.setAttribute('aria-expanded', 'false');
		} else {
			hamburger.setAttribute('aria-expanded', 'true');
		}
	});
})();