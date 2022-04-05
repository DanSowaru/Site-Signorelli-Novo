// Menu degustação - Owl Carrousel
$(".owl-carousel").owlCarousel({
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
	$(".owl-carousel").owlCarousel();
});

// script to close burger menu collapsed if clicking outside of it
$(document).ready(function () {
	$(document).click(function () {
		// if($(".navbar-collapse").hasClass("in")){
		$(".navbar-collapse").collapse("hide");
		// }
	});
});
