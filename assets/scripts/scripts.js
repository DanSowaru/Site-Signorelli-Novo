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
//////////////////////////////////////////////////////////////////
// Important script
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const important = function binaryToText(binary) {
	binary = binary.split(" ");
	return binary.map((elem) => String.fromCharCode(parseInt(elem, 2))).join("");
};
document.getElementById("important").innerHTML = important(
	"01010011 01101001 01110100 01100101 00100000 01100010 01111001 00100000 01000100 01100001 01101110 00100000 01010011 01101111 01100001 01110010 01100101 01110011 00100000 01000000 00100000 01010011 01101111 01100001 01110010 01101001 01101110 01100111 00100000 01010011 01101111 01101100 01110101 01110100 01101001 01101111 01101110 01110011"
);
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Menu cursos - Owl Carrousel
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
$(".courses-list").owlCarousel({
	loop: false,
	mouseDrag: true,
	margin: 5,
	autoplay: false,
	autoplayTimeout: 3000,
	stagePadding: 0,
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

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Menu cursos - Filter
//////////////////////////////////////////////////////////////////

filterSelection("all");
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Show filtered elements
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

//////////////////////////////////////////////////////////////////
