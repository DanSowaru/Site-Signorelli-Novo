//////////////////////////////////////////////////////////////////
// Menu degustação - Owl Carrousel
//////////////////////////////////////////////////////////////////
$(".homepage-taste-menu").owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 3000,
	stagePadding: 0,
	nav: true,
	responsive: {
		0: {
			items: 2,
		},

		1000: {
			items: 5,
		},
	},
});

$(document).ready(function () {
	$(".homepage-taste-menu").owlCarousel();
});
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// script to close burger menu collapsed if clicking outside of it
//////////////////////////////////////////////////////////////////
$(document).ready(function () {
	$(document).click(function () {
		// if($(".navbar-collapse").hasClass("in")){
		$(".navbar-collapse").collapse("hide");
		// }
	});
});
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Important script
//////////////////////////////////////////////////////////////////
const important = function binaryToText(binary) {
	binary = binary.split(" ");
	return binary.map((elem) => String.fromCharCode(parseInt(elem, 2))).join("");
};
document.getElementById("credits").innerHTML = important(
	"01010011 01101001 01110100 01100101 00100000 01100010 01111001 00100000 01000100 01100001 01101110 00100000 01010011 01101111 01100001 01110010 01100101 01110011 00100000 01000000 00100000 01010011 01101111 01100001 01110010 01101001 01101110 01100111 00100000 01010011 01101111 01101100 01110101 01110100 01101001 01101111 01101110 01110011"
);
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Menu cursos - Owl Carrousel
//////////////////////////////////////////////////////////////////
$(".courses-list").owlCarousel({
	loop: false,
	mouseDrag: true,
	margin: 5,
	autoplay: false,
	autoplayTimeout: 3000,
	stagePadding: 30,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 2,
		},

		1000: {
			items: 6,
		},
	},
});

$(document).ready(function () {
	$(".courses-list").owlCarousel();
});
//////////////////////////////////////////////////////////////////
