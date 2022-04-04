// Menu degustação - Owl Carrousel
$(".owl-carousel").owlCarousel({
	loop: false,
	margin: 10,
	autoplay: false,
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
	$(".owl-carousel").owlCarousel();
});
