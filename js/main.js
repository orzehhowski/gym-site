document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navbar = document.querySelector('#navbarNav');

	function addShadow() {
		if (window.scrollY >= 200) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) => item.addEventListener('click', () => navbar.classList.remove('show')));

	window.addEventListener('scroll', addShadow);
});

