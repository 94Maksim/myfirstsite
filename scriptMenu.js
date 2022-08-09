function fun1() {
	var checkbox = document.getElementById('header__toggle');
	var menu = document.getElementById('hamburger');
	var body = document.querySelector('body');
	if (checkbox.checked) {
		menu.style.visibility = 'visible',
		body.style.overflow = 'hidden'
	}
	else {
		menu.style.visibility = 'hidden',
		body.style.overflow = 'visible'
	}
}