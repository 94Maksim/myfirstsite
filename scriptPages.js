var slideIndex = 1;
showSlides(slideIndex, true);

function plusSlide(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides (n, timeout = false) {
	var i;
	var slides = document.getElementsByClassName('header__slide');
	var dots = document.getElementsByClassName('header__dot');
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" header__active", "");
    }
	slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " header__active";

	if (timeout) {
		setInterval(function() {
			slideIndex++;
			if (slideIndex > slides.length) {
			  slideIndex = 1;
			}
			showSlides(true);
		}, 7000);
	}

}

 

