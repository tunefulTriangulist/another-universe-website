$(document).ready(function() {
	var h = (/universefade/.test($("#header").css("background-image"))) ? $("#header").height() / 2 : $("#header").height();
	var scrollChange = h - ($(window).height() - $("#navcontent").height());
	if ($(this).scrollTop() > scrollChange) {
		$("#navcontent a").css({"color": "black", "border-color":"rgba(0, 0, 0, 0.6)"});
	}
	var nav1 = function() {	// start tooltip blinking
		$("#navtext").animate({"opacity":0.6}, 500, nav2);
	}
	var nav2 = function() {
		$("#navtext").animate({"opacity":0.8}, 500, nav1);
	}

	if (!localStorage.getItem("au_navclick")) nav1();
	else $("#navtext").css({"display": "none"});

	$("#nav").click(function() {
		localStorage.setItem("au_navclick", true);
		$("#nav").animate({"opacity":0}, 220, "linear");
		$("#nav").css({"display":"none"});
		$("#navcontent").slideDown("medium");
	});

	$("#clickme").click(function() {
		$("#nav").css({"display":"block"});
		$("#nav").animate({"opacity":1}, 220, "linear");
		$("#navcontent").slideUp("medium");
		$("#navtext").css({"display":"none"});
	});
	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		if (scroll > scrollChange) {
			$("#navcontent a").css({"color": "black", "border-color":"rgba(0, 0, 0, 0.6)"});
		}
		else {
			$("#navcontent a").css({"color": "white", "border-color":"rgba(255, 255, 255, 0.6)"});
		}
	});
})