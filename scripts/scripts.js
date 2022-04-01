// Menu degustação - Owl Carrousel
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 3000,
	stagePadding: 25,
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
