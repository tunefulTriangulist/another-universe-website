$(document).ready(function() {
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
})