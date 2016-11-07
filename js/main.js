$(document).ready(function() {
	$(".nav__humburger").click(function() {
		$(".nav__container").toggleClass("open")
	});

	$(".nav a").click(function(){
		$(".nav__container").removeClass("open");

		var hash = $(this).attr("href"),
			top = $(hash).offset().top,
			offset = $(".nav--illusion").height();

		console.log(hash, top, offset);

		$("html, body").animate({scrollTop: top - offset}, "slow");

		return false;
	});
});