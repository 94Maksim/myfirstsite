var open1 = document.getElementById('open-1');
var open2 = document.getElementById('open-2');
var open3 = document.getElementById('open-3');
var open4 = document.getElementById('open-4');
var open5 = document.getElementById('open-5');

var modal1 = document.getElementById('modal-1');
var modal2 = document.getElementById('modal-2');
var modal3 = document.getElementById('modal-3');
var modal4 = document.getElementById('modal-4');
var modal5 = document.getElementById('modal-5');

var closeImg1 = document.getElementById('closeImg1');
var closeImg2 = document.getElementById('closeImg2');
var closeImg3 = document.getElementById('closeImg3');
var closeImg4 = document.getElementById('closeImg4');
var closeImg5 = document.getElementById('closeImg5');

var closeDiv1 = document.getElementById('closeDiv1');
var closeDiv2 = document.getElementById('closeDiv2');
var closeDiv3 = document.getElementById('closeDiv3');
var closeDiv4 = document.getElementById('closeDiv4');
var closeDiv5 = document.getElementById('closeDiv5');


open1.onclick = function() {
	modal1.classList.add('active');
	closeImg1.onclick = function() {
		modal1.classList.remove('active');
	};
	closeDiv1.onclick = function() {
		modal1.classList.remove('active');
	};	
};
open2.onclick = function() {
	modal2.classList.add('active');
	closeImg2.onclick = function() {
		modal2.classList.remove('active');
	};
	closeDiv2.onclick = function() {
		modal2.classList.remove('active');
	};		
};
open3.onclick = function() {
	modal3.classList.add('active');
	closeImg3.onclick = function() {
		modal3.classList.remove('active');
	};
	closeDiv3.onclick = function() {
		modal3.classList.remove('active');
	};		
};
open4.onclick = function() {
	modal4.classList.add('active');
	closeImg4.onclick = function() {
		modal4.classList.remove('active');
	};
	closeDiv4.onclick = function() {
		modal4.classList.remove('active');
	};			
};
open5.onclick = function() {
	modal5.classList.add('active');
	closeImg5.onclick = function() {
		modal5.classList.remove('active');
	};
	closeDiv5.onclick = function() {
		modal5.classList.remove('active');
	};			
};

window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.classList.remove('active');
	}
	else if (event.target == modal2) {
		modal2.classList.remove('active');
	}
	else if (event.target == modal3) {
		modal3.classList.remove('active');
	}
	else if (event.target == modal4) {
		modal4.classList.remove('active');
	}
	else if (event.target == modal5) {
		modal5.classList.remove('active');
	}
	
};
window.onkeyup = function(event) {
	if (event.keyCode == 27) {
		modal1.classList.remove('active');
		modal2.classList.remove('active');
		modal3.classList.remove('active');
		modal4.classList.remove('active');
		modal5.classList.remove('active');
	}
};








